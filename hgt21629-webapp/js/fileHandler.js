/**
 * 文件导入处理器
 * 支持格式：Excel (.xlsx, .xls)、CSV、TXT
 */

class FileHandler {
    constructor() {
        this.supportedFormats = ['.xlsx', '.xls', '.csv', '.txt'];
        this.delimiters = {
            csv: ',',
            tsv: '\t',
            pipe: '|'
        };
    }

    /**
     * 检测文件类型
     */
    getFileType(filename) {
        const ext = filename.toLowerCase().split('.').pop();
        return ext === 'xlsx' || ext === 'xls' ? 'excel' : 
               ext === 'csv' ? 'csv' : 
               ext === 'txt' ? 'txt' : 'unknown';
    }

    /**
     * 读取文件内容
     */
    async readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                resolve({
                    content: e.target.result,
                    name: file.name,
                    type: this.getFileType(file.name)
                });
            };
            
            reader.onerror = (e) => {
                reject(new Error('文件读取失败: ' + e.message));
            };

            if (this.getFileType(file.name) === 'excel') {
                reader.readAsArrayBuffer(file);
            } else {
                reader.readAsText(file, 'UTF-8');
            }
        });
    }

    /**
     * 解析文件内容
     */
    async parseFile(fileData) {
        const { content, type } = fileData;
        
        try {
            switch(type) {
                case 'excel':
                    return this.parseExcel(content);
                case 'csv':
                    return this.parseDelimited(content, ',');
                case 'txt':
                    return this.parseTxt(content);
                default:
                    throw new Error('不支持的文件格式');
            }
        } catch (error) {
            throw new Error(`解析文件失败: ${error.message}`);
        }
    }

    /**
     * 解析 Excel 文件
     */
    parseExcel(arrayBuffer) {
        // 使用 SheetJS 库解析 Excel
        if (typeof XLSX === 'undefined') {
            throw new Error('需要加载 SheetJS 库 (xlsx.full.min.js)');
        }

        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        
        return this.normalizeData(data);
    }

    /**
     * 解析分隔符分隔的文件 (CSV/TSV)
     */
    parseDelimited(content, delimiter) {
        const lines = content.split(/\r?\n/).filter(line => line.trim());
        const data = lines.map(line => this.splitLine(line, delimiter));
        return this.normalizeData(data);
    }

    /**
     * 解析 TXT 文件（自动检测分隔符）
     */
    parseTxt(content) {
        // 尝试检测分隔符
        const firstLine = content.split(/\r?\n/)[0] || '';
        let delimiter = '\t'; // 默认 Tab
        
        if (firstLine.includes('|')) {
            delimiter = '|';
        } else if (firstLine.includes(',')) {
            delimiter = ',';
        } else if (firstLine.includes(';')) {
            delimiter = ';';
        }

        return this.parseDelimited(content, delimiter);
    }

    /**
     * 分割行数据（处理引号内的分隔符）
     */
    splitLine(line, delimiter) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                if (inQuotes && line[i + 1] === '"') {
                    current += '"';
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === delimiter && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        
        result.push(current.trim());
        return result;
    }

    /**
     * 规范化数据
     */
    normalizeData(rawData) {
        if (!rawData || rawData.length === 0) {
            return { headers: [], rows: [] };
        }

        // 查找表头行（包含关键词的行）
        let headerRowIndex = 0;
        const keywords = ['编号', '管架', '型号', '规格', '数量', '图号', '支吊架', 'code', 'support'];
        
        for (let i = 0; i < Math.min(10, rawData.length); i++) {
            const row = rawData[i];
            const rowText = row.join(' ').toLowerCase();
            if (keywords.some(k => rowText.includes(k.toLowerCase()))) {
                headerRowIndex = i;
                break;
            }
        }

        const headers = rawData[headerRowIndex].map(h => String(h).trim());
        const rows = rawData.slice(headerRowIndex + 1)
            .filter(row => row.some(cell => cell !== undefined && cell !== null && String(cell).trim() !== ''));

        return { headers, rows };
    }

    /**
     * 提取支吊架数据
     */
    extractSupportData(parsedData) {
        const { headers, rows } = parsedData;
        const supports = [];

        // 列映射
        const columnMap = this.detectColumns(headers);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const support = this.parseRow(row, columnMap, i + 1);
            if (support && support.code) {
                supports.push(support);
            }
        }

        return supports;
    }

    /**
     * 检测列位置
     */
    detectColumns(headers) {
        const map = {
            code: -1,       // 管架编号
            name: -1,       // 名称/描述
            quantity: -1,   // 数量
            dn: -1,         // 管径
            loadLevel: -1,  // 载荷等级
            remark: -1      // 备注
        };

        headers.forEach((header, index) => {
            const h = String(header).toLowerCase().trim();
            
            // 编号列
            if (/^(编号|图号|管架编号|型号|code|support|tag|no\.?|序号)/i.test(h)) {
                map.code = index;
            }
            // 名称列
            else if (/^(名称|描述|说明|name|description)/i.test(h)) {
                map.name = index;
            }
            // 数量列
            else if (/^(数量|qty|quantity|个数|套数)/i.test(h)) {
                map.quantity = index;
            }
            // 管径列
            else if (/^(管径|dn|直径|size|pipe|管线)/i.test(h)) {
                map.dn = index;
            }
            // 载荷等级列
            else if (/^(载荷|等级|load|level|class)/i.test(h)) {
                map.loadLevel = index;
            }
            // 备注列
            else if (/^(备注|note|remark|comment)/i.test(h)) {
                map.remark = index;
            }
        });

        // 如果没有找到编号列，尝试第一列
        if (map.code === -1 && headers.length > 0) {
            map.code = 0;
        }

        return map;
    }

    /**
     * 解析单行数据
     */
    parseRow(row, columnMap, rowNumber) {
        const codeIndex = columnMap.code;
        if (codeIndex === -1 || codeIndex >= row.length) {
            return null;
        }

        const code = String(row[codeIndex] || '').trim();
        
        // 过滤无效数据
        if (!code || code.toLowerCase() === 'code' || code === '编号') {
            return null;
        }

        // 提取数量
        let quantity = 1;
        if (columnMap.quantity !== -1 && columnMap.quantity < row.length) {
            const qtyVal = parseFloat(row[columnMap.quantity]);
            if (!isNaN(qtyVal) && qtyVal > 0) {
                quantity = qtyVal;
            }
        }

        // 提取管径
        let dn = '';
        if (columnMap.dn !== -1 && columnMap.dn < row.length) {
            dn = String(row[columnMap.dn] || '').trim();
        }

        // 提取名称
        let name = '';
        if (columnMap.name !== -1 && columnMap.name < row.length) {
            name = String(row[columnMap.name] || '').trim();
        }

        // 提取备注
        let remark = '';
        if (columnMap.remark !== -1 && columnMap.remark < row.length) {
            remark = String(row[columnMap.remark] || '').trim();
        }

        return {
            code,
            name,
            quantity,
            dn,
            remark,
            rowNumber
        };
    }

    /**
     * 验证支吊架编号
     */
    validateSupports(supports) {
        const valid = [];
        const invalid = [];

        supports.forEach(support => {
            const parsed = SupportCodeParser.parse(support.code);
            if (parsed.valid) {
                valid.push({
                    ...support,
                    parsed
                });
            } else {
                invalid.push({
                    ...support,
                    error: parsed.error
                });
            }
        });

        return { valid, invalid };
    }
}

// ==================== 材料统计器 ====================
class MaterialStatistics {
    constructor() {
        this.materials = new Map();
    }

    /**
     * 添加支吊架到统计
     */
    addSupport(support) {
        if (!support.parsed || !support.parsed.valid) {
            return;
        }

        const materials = MaterialListGenerator.generate(support.parsed, support.quantity);
        
        materials.forEach(material => {
            const key = this.getMaterialKey(material);
            
            if (this.materials.has(key)) {
                const existing = this.materials.get(key);
                existing.quantity += material.quantity;
            } else {
                this.materials.set(key, {
                    ...material,
                    quantity: material.quantity
                });
            }
        });
    }

    /**
     * 获取材料唯一键
     */
    getMaterialKey(material) {
        return `${material.name}|${material.spec}|${material.material}|${material.standard}`;
    }

    /**
     * 获取统计结果
     */
    getResults() {
        const results = Array.from(this.materials.values());
        
        // 按类别排序
        return results.sort((a, b) => {
            const categoryOrder = ['型钢', '钢板', '圆钢', '扁钢', '螺栓', '管夹', '基础件'];
            const aIdx = categoryOrder.findIndex(c => a.name.includes(c));
            const bIdx = categoryOrder.findIndex(c => b.name.includes(c));
            
            if (aIdx !== bIdx) {
                return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
            }
            
            return a.name.localeCompare(b.name);
        });
    }

    /**
     * 清空统计
     */
    clear() {
        this.materials.clear();
    }

    /**
     * 导出为 Excel
     */
    exportToExcel(filename = '材料清单.xlsx') {
        if (typeof XLSX === 'undefined') {
            throw new Error('需要加载 SheetJS 库');
        }

        const data = this.getResults();
        
        // 准备导出数据
        const exportData = data.map((item, index) => ({
            '序号': index + 1,
            '材料名称': item.name,
            '规格': item.spec,
            '数量': item.quantity,
            '单位': item.unit,
            '材料采用的技术标准': item.standard,
            '材料': item.material
        }));

        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '材料清单');
        
        // 设置列宽
        ws['!cols'] = [
            { wch: 8 },   // 序号
            { wch: 25 },  // 材料名称
            { wch: 25 },  // 规格
            { wch: 10 },  // 数量
            { wch: 8 },   // 单位
            { wch: 25 },  // 技术标准
            { wch: 15 }   // 材料
        ];

        XLSX.writeFile(wb, filename);
    }

    /**
     * 导出为 CSV
     */
    exportToCSV(filename = '材料清单.csv') {
        const data = this.getResults();
        
        // CSV 表头
        const headers = ['序号', '材料名称', '规格', '数量', '单位', '材料采用的技术标准', '材料'];
        
        // CSV 内容
        const rows = data.map((item, index) => [
            index + 1,
            this.escapeCSV(item.name),
            this.escapeCSV(item.spec),
            item.quantity,
            item.unit,
            this.escapeCSV(item.standard),
            item.material
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        this.downloadFile(csvContent, filename, 'text/csv;charset=utf-8;');
    }

    /**
     * 转义 CSV 特殊字符
     */
    escapeCSV(value) {
        if (typeof value !== 'string') return value;
        if (value.includes(',') || value.includes('"') || value.includes('\n')) {
            return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
    }

    /**
     * 下载文件
     */
    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FileHandler, MaterialStatistics };
}
