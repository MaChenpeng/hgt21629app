/**
 * HG/T21629 管架材料统计系统 - 主应用
 */

class SupportApp {
    constructor() {
        this.fileHandler = new FileHandler();
        this.materialStats = new MaterialStatistics();
        this.uploadedFiles = [];
        this.validSupports = [];
        this.invalidSupports = [];
        this.manualData = []; // 表格输入的数据
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.initManualInput();
        console.log('HG/T21629 管架材料统计系统已初始化');
    }

    bindEvents() {
        // 文件上传区域
        const uploadZone = document.getElementById('uploadZone');
        const fileInput = document.getElementById('fileInput');

        if (uploadZone && fileInput) {
            uploadZone.addEventListener('click', () => fileInput.click());
            
            uploadZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadZone.classList.add('dragover');
            });

            uploadZone.addEventListener('dragleave', () => {
                uploadZone.classList.remove('dragover');
            });

            uploadZone.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadZone.classList.remove('dragover');
                this.handleFiles(e.dataTransfer.files);
            });

            fileInput.addEventListener('change', (e) => {
                this.handleFiles(e.target.files);
            });
        }

        // 按钮事件
        const processBtn = document.getElementById('processBtn');
        const sampleBtn = document.getElementById('sampleBtn');
        const exportExcelBtn = document.getElementById('exportExcelBtn');
        const exportCsvBtn = document.getElementById('exportCsvBtn');

        if (processBtn) processBtn.addEventListener('click', () => this.processFiles());
        if (sampleBtn) sampleBtn.addEventListener('click', () => this.downloadSample());
        if (exportExcelBtn) exportExcelBtn.addEventListener('click', () => this.exportExcel());
        if (exportCsvBtn) exportCsvBtn.addEventListener('click', () => this.exportCSV());

        // 结果标签页切换
        document.querySelectorAll('.tab[data-tab]').forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
        });

        // 输入方式标签页切换
        document.querySelectorAll('.tab[data-input-tab]').forEach(tab => {
            tab.addEventListener('click', () => this.switchInputTab(tab.dataset.inputTab));
        });
    }

    /**
     * 初始化手动输入功能
     */
    initManualInput() {
        // 表格输入按钮
        const addRowBtn = document.getElementById('addRowBtn');
        const clearTableBtn = document.getElementById('clearTableBtn');
        const processTableBtn = document.getElementById('processTableBtn');

        if (addRowBtn) {
            addRowBtn.addEventListener('click', () => this.addTableRow());
        }
        if (clearTableBtn) {
            clearTableBtn.addEventListener('click', () => this.clearTable());
        }
        if (processTableBtn) {
            processTableBtn.addEventListener('click', () => this.processTableData());
        }

        // 文本导入按钮
        const textInput = document.getElementById('textInput');
        const clearTextBtn = document.getElementById('clearTextBtn');
        const processTextBtn = document.getElementById('processTextBtn');

        if (textInput) {
            textInput.addEventListener('input', () => this.onTextInput());
        }
        if (clearTextBtn) {
            clearTextBtn.addEventListener('click', () => this.clearText());
        }
        if (processTextBtn) {
            processTextBtn.addEventListener('click', () => this.processTextData());
        }

        // 添加初始行
        this.addTableRow();
    }

    /**
     * 切换输入方式标签页
     */
    switchInputTab(tabName) {
        // 更新标签按钮
        document.querySelectorAll('.tab[data-input-tab]').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.inputTab === tabName);
        });

        // 更新面板显示
        document.querySelectorAll('.input-panel').forEach(panel => {
            panel.classList.remove('active');
        });

        const panel = document.getElementById(tabName + 'Panel');
        if (panel) {
            panel.classList.add('active');
        }
    }

    /**
     * 添加表格行
     */
    addTableRow(data = {}) {
        const tbody = document.getElementById('manualTableBody');
        if (!tbody) return;

        // 移除空行提示
        const emptyRow = tbody.querySelector('.empty-row');
        if (emptyRow) {
            emptyRow.remove();
        }

        const rowCount = tbody.querySelectorAll('tr.input-row').length + 1;
        const row = document.createElement('tr');
        row.className = 'input-row';
        row.innerHTML = `
            <td class="number">${rowCount}</td>
            <td class="editable-cell">
                <input type="text" class="input-code" placeholder="如：A1-1-A-200" value="${data.code || ''}">
            </td>
            <td class="editable-cell">
                <input type="text" class="input-name" placeholder="可选" value="${data.name || ''}">
            </td>
            <td class="editable-cell">
                <input type="number" class="input-qty" placeholder="1" value="${data.quantity || '1'}" min="1" style="text-align: center;">
            </td>
            <td class="editable-cell">
                <input type="text" class="input-dn" placeholder="可选" value="${data.dn || ''}">
            </td>
            <td class="editable-cell">
                <input type="text" class="input-remark" placeholder="可选" value="${data.remark || ''}">
            </td>
            <td class="actions">
                <button class="btn btn-danger btn-sm" onclick="app.deleteTableRow(this)">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        tbody.appendChild(row);

        // 绑定输入事件
        const codeInput = row.querySelector('.input-code');
        if (codeInput) {
            codeInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.addTableRow();
                    // 聚焦到新行的编号输入框
                    setTimeout(() => {
                        const newRow = tbody.lastElementChild;
                        if (newRow) {
                            const newCodeInput = newRow.querySelector('.input-code');
                            if (newCodeInput) newCodeInput.focus();
                        }
                    }, 0);
                }
            });

            codeInput.addEventListener('input', () => this.validateTableRow(row));
            codeInput.addEventListener('blur', () => this.validateTableRow(row));
        }

        // 启用统计按钮
        const processBtn = document.getElementById('processTableBtn');
        if (processBtn) {
            processBtn.disabled = false;
        }

        return row;
    }

    /**
     * 删除表格行
     */
    deleteTableRow(btn) {
        const row = btn.closest('tr');
        if (row) {
            row.remove();
            this.renumberTableRows();
            this.checkTableEmpty();
        }
    }

    /**
     * 验证表格行
     */
    validateTableRow(row) {
        const codeInput = row.querySelector('.input-code');
        if (!codeInput || !codeInput.value.trim()) {
            codeInput?.classList.remove('error');
            return;
        }

        const result = SupportCodeParser.parse(codeInput.value);
        if (result.valid) {
            codeInput.classList.remove('error');
        } else {
            codeInput.classList.add('error');
        }
    }

    /**
     * 重新编号表格行
     */
    renumberTableRows() {
        const tbody = document.getElementById('manualTableBody');
        if (!tbody) return;

        const rows = tbody.querySelectorAll('tr.input-row');
        rows.forEach((row, index) => {
            const numCell = row.querySelector('.number');
            if (numCell) {
                numCell.textContent = index + 1;
            }
        });
    }

    /**
     * 检查表格是否为空
     */
    checkTableEmpty() {
        const tbody = document.getElementById('manualTableBody');
        if (!tbody) return;

        const rows = tbody.querySelectorAll('tr.input-row');
        const processBtn = document.getElementById('processTableBtn');

        if (rows.length === 0) {
            tbody.innerHTML = `
                <tr class="empty-row">
                    <td colspan="7" class="text-center" style="padding: 32px; color: var(--text-secondary);">
                        <i class="fas fa-inbox" style="font-size: 24px; display: block; margin-bottom: 8px;"></i>
                        暂无数据，点击"添加行"开始输入
                    </td>
                </tr>
            `;
            if (processBtn) processBtn.disabled = true;
        }
    }

    /**
     * 清空表格
     */
    clearTable() {
        const tbody = document.getElementById('manualTableBody');
        if (tbody) {
            tbody.innerHTML = `
                <tr class="empty-row">
                    <td colspan="7" class="text-center" style="padding: 32px; color: var(--text-secondary);">
                        <i class="fas fa-inbox" style="font-size: 24px; display: block; margin-bottom: 8px;"></i>
                        暂无数据，点击"添加行"开始输入
                    </td>
                </tr>
            `;
        }
        const processBtn = document.getElementById('processTableBtn');
        if (processBtn) processBtn.disabled = true;
    }

    /**
     * 处理表格数据
     */
    processTableData() {
        const tbody = document.getElementById('manualTableBody');
        if (!tbody) return;

        const rows = tbody.querySelectorAll('tr.input-row');
        const supports = [];

        rows.forEach((row, index) => {
            const codeInput = row.querySelector('.input-code');
            const nameInput = row.querySelector('.input-name');
            const qtyInput = row.querySelector('.input-qty');
            const dnInput = row.querySelector('.input-dn');
            const remarkInput = row.querySelector('.input-remark');

            const code = codeInput?.value.trim();
            if (!code) return;

            const quantity = parseFloat(qtyInput?.value) || 1;
            const name = nameInput?.value.trim() || '';
            const dn = dnInput?.value.trim() || '';
            const remark = remarkInput?.value.trim() || '';

            supports.push({
                code,
                name,
                quantity,
                dn,
                remark,
                rowNumber: index + 1
            });
        });

        if (supports.length === 0) {
            this.showAlert('请输入至少一个管架编号', 'warning');
            return;
        }

        // 验证并处理
        const { valid, invalid } = this.fileHandler.validateSupports(supports);
        
        this.validSupports = valid;
        this.invalidSupports = invalid;
        
        // 统计材料
        this.materialStats.clear();
        this.validSupports.forEach(support => {
            this.materialStats.addSupport(support);
        });

        // 显示结果
        this.displayResults();
        
        const msg = `处理完成！成功识别 ${valid.length} 个管架` + 
                    (invalid.length > 0 ? `，${invalid.length} 个待确认` : '');
        this.showAlert(msg, invalid.length > 0 ? 'warning' : 'success');
    }

    /**
     * 文本输入事件
     */
    onTextInput() {
        const textInput = document.getElementById('textInput');
        const processBtn = document.getElementById('processTextBtn');
        if (textInput && processBtn) {
            processBtn.disabled = textInput.value.trim().length === 0;
        }
    }

    /**
     * 清空文本
     */
    clearText() {
        const textInput = document.getElementById('textInput');
        const processBtn = document.getElementById('processTextBtn');
        if (textInput) textInput.value = '';
        if (processBtn) processBtn.disabled = true;
    }

    /**
     * 处理文本数据
     */
    processTextData() {
        const textInput = document.getElementById('textInput');
        if (!textInput) return;

        const text = textInput.value.trim();
        if (!text) {
            this.showAlert('请输入数据', 'warning');
            return;
        }

        const supports = this.parseTextInput(text);
        
        if (supports.length === 0) {
            this.showAlert('未识别到有效的管架数据', 'warning');
            return;
        }

        // 验证并处理
        const { valid, invalid } = this.fileHandler.validateSupports(supports);
        
        this.validSupports = valid;
        this.invalidSupports = invalid;
        
        // 统计材料
        this.materialStats.clear();
        this.validSupports.forEach(support => {
            this.materialStats.addSupport(support);
        });

        // 显示结果
        this.displayResults();
        
        const msg = `处理完成！成功识别 ${valid.length} 个管架` + 
                    (invalid.length > 0 ? `，${invalid.length} 个待确认` : '');
        this.showAlert(msg, invalid.length > 0 ? 'warning' : 'success');
    }

    /**
     * 解析文本输入
     */
    parseTextInput(text) {
        const lines = text.split('\n').filter(line => line.trim());
        const supports = [];

        lines.forEach((line, index) => {
            // 支持格式：编号,数量 或 编号 数量 或 编号
            const parts = line.split(/[,\s]+/).filter(p => p.trim());
            if (parts.length === 0) return;

            const code = parts[0].trim();
            let quantity = 1;

            // 尝试解析数量
            if (parts.length > 1) {
                const qty = parseFloat(parts[1]);
                if (!isNaN(qty) && qty > 0) {
                    quantity = qty;
                }
            }

            // 支持逗号分隔的额外信息：编号,数量,管径,备注
            let dn = '';
            let remark = '';
            
            if (line.includes(',')) {
                const csvParts = line.split(',').map(p => p.trim());
                if (csvParts[2]) dn = csvParts[2];
                if (csvParts[3]) remark = csvParts[3];
            }

            if (code) {
                supports.push({
                    code,
                    quantity,
                    dn,
                    remark,
                    rowNumber: index + 1
                });
            }
        });

        return supports;
    }

    /**
     * 处理上传的文件
     */
    handleFiles(files) {
        for (let file of files) {
            const fileType = this.fileHandler.getFileType(file.name);
            if (fileType === 'unknown') {
                this.showAlert(`不支持的文件格式: ${file.name}`, 'warning');
                continue;
            }
            
            // 检查是否已存在
            if (this.uploadedFiles.some(f => f.name === file.name)) {
                continue;
            }
            
            this.uploadedFiles.push(file);
        }
        
        this.updateFileList();
    }

    /**
     * 更新文件列表显示
     */
    updateFileList() {
        const fileList = document.getElementById('fileList');
        const processBtn = document.getElementById('processBtn');
        
        if (this.uploadedFiles.length === 0) {
            if (fileList) fileList.innerHTML = '';
            if (processBtn) processBtn.disabled = true;
            return;
        }

        if (processBtn) processBtn.disabled = false;
        
        if (fileList) {
            fileList.innerHTML = this.uploadedFiles.map((file, index) => `
                <div class="file-item">
                    <span class="file-icon">
                        <i class="fas ${this.getFileIcon(file.name)}"></i>
                    </span>
                    <div class="file-info">
                        <div class="file-name">${file.name}</div>
                        <div class="file-size">${this.formatFileSize(file.size)}</div>
                    </div>
                    <div class="file-status">
                        <span class="badge badge-success">待处理</span>
                        <button class="remove-btn" onclick="app.removeFile(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    /**
     * 获取文件图标
     */
    getFileIcon(filename) {
        const ext = filename.toLowerCase().split('.').pop();
        if (ext === 'xlsx' || ext === 'xls') return 'fa-file-excel text-success';
        if (ext === 'csv') return 'fa-file-csv text-info';
        return 'fa-file-alt text-secondary';
    }

    /**
     * 格式化文件大小
     */
    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    /**
     * 移除文件
     */
    removeFile(index) {
        this.uploadedFiles.splice(index, 1);
        this.updateFileList();
    }

    /**
     * 处理文件
     */
    async processFiles() {
        if (this.uploadedFiles.length === 0) {
            this.showAlert('请先选择文件', 'warning');
            return;
        }

        const processBtn = document.getElementById('processBtn');
        if (processBtn) {
            processBtn.disabled = true;
            processBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
        }

        try {
            this.validSupports = [];
            this.invalidSupports = [];
            this.materialStats.clear();

            for (let file of this.uploadedFiles) {
                const fileData = await this.fileHandler.readFile(file);
                const parsedData = await this.fileHandler.parseFile(fileData);
                const supports = this.fileHandler.extractSupportData(parsedData);
                
                // 验证支吊架编号
                const { valid, invalid } = this.fileHandler.validateSupports(supports);
                
                this.validSupports.push(...valid);
                this.invalidSupports.push(...invalid);
            }

            // 统计材料
            this.validSupports.forEach(support => {
                this.materialStats.addSupport(support);
            });

            // 显示结果
            this.displayResults();
            this.showAlert(`处理完成！成功识别 ${this.validSupports.length} 个管架`, 'success');

        } catch (error) {
            console.error(error);
            this.showAlert('处理文件时出错: ' + error.message, 'danger');
        } finally {
            if (processBtn) {
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="fas fa-cogs"></i> 开始统计';
            }
        }
    }

    /**
     * 显示结果
     */
    displayResults() {
        // 显示统计区域
        const statsSection = document.getElementById('statsSection');
        const resultCard = document.getElementById('resultCard');
        
        if (statsSection) statsSection.style.display = 'grid';
        if (resultCard) resultCard.style.display = 'block';
        
        // 更新统计数据
        const validCount = document.getElementById('validCount');
        const invalidCount = document.getElementById('invalidCount');
        const totalMaterials = document.getElementById('totalMaterials');
        const totalQuantity = document.getElementById('totalQuantity');
        
        if (validCount) validCount.textContent = this.validSupports.length;
        if (invalidCount) invalidCount.textContent = this.invalidSupports.length;
        
        const materials = this.materialStats.getResults();
        if (totalMaterials) totalMaterials.textContent = materials.length;
        if (totalQuantity) totalQuantity.textContent = materials.reduce((sum, m) => sum + m.quantity, 0);

        // 显示待确认项标签
        const invalidTab = document.getElementById('invalidTab');
        if (invalidTab) {
            if (this.invalidSupports.length > 0) {
                invalidTab.style.display = 'block';
                invalidTab.innerHTML = `<i class="fas fa-exclamation-triangle"></i> 待确认项 (${this.invalidSupports.length})`;
            } else {
                invalidTab.style.display = 'none';
            }
        }

        // 渲染表格
        this.renderMaterialsTable(materials);
        this.renderSupportsTable();
        this.renderInvalidTable();

        // 滚动到结果区域
        if (resultCard) {
            resultCard.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * 渲染材料清单表格
     */
    renderMaterialsTable(materials) {
        const container = document.getElementById('materialsTableContainer');
        if (!container) return;
        
        if (materials.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="icon"><i class="fas fa-inbox"></i></div>
                    <h3>暂无数据</h3>
                    <p>请先导入支吊架清单文件</p>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th class="number">序号</th>
                        <th>材料名称</th>
                        <th>规格</th>
                        <th class="quantity">数量</th>
                        <th>单位</th>
                        <th>材料采用的技术标准</th>
                        <th>材料</th>
                    </tr>
                </thead>
                <tbody>
                    ${materials.map((item, index) => `
                        <tr>
                            <td class="number">${index + 1}</td>
                            <td>${this.escapeHtml(item.name)}</td>
                            <td>${this.escapeHtml(item.spec)}</td>
                            <td class="quantity">${item.quantity}</td>
                            <td>${item.unit}</td>
                            <td>${this.escapeHtml(item.standard)}</td>
                            <td><span class="badge badge-info">${item.material}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    /**
     * 渲染管架明细表格
     */
    renderSupportsTable() {
        const container = document.getElementById('supportsTableContainer');
        if (!container) return;
        
        if (this.validSupports.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="icon"><i class="fas fa-inbox"></i></div>
                    <h3>暂无数据</h3>
                    <p>请先导入支吊架清单文件</p>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th class="number">序号</th>
                        <th>管架编号</th>
                        <th>类别</th>
                        <th>名称</th>
                        <th class="quantity">数量</th>
                        <th>单位</th>
                        <th>管径</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.validSupports.map((item, index) => `
                        <tr>
                            <td class="number">${index + 1}</td>
                            <td><code>${this.escapeHtml(item.code)}</code></td>
                            <td>${item.parsed.categoryName}</td>
                            <td>${item.parsed.typeName}</td>
                            <td class="quantity">${item.quantity}</td>
                            <td>${item.parsed.unit}</td>
                            <td>${item.dn || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    /**
     * 渲染无效数据表格
     */
    renderInvalidTable() {
        const container = document.getElementById('invalidTableContainer');
        if (!container) return;
        
        if (this.invalidSupports.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="icon"><i class="fas fa-check-circle text-success"></i></div>
                    <h3>全部识别成功</h3>
                    <p>没有无法识别的管架编号</p>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th class="number">行号</th>
                        <th>编号</th>
                        <th>错误信息</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.invalidSupports.map(item => `
                        <tr>
                            <td class="number">${item.rowNumber}</td>
                            <td><code>${this.escapeHtml(item.code)}</code></td>
                            <td><span class="text-danger">${item.error}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    /**
     * 切换标签页
     */
    switchTab(tabName) {
        // 更新标签按钮
        document.querySelectorAll('.tab[data-tab]').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        // 更新内容区域
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        const tabId = tabName + 'Tab';
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    }

    /**
     * 导出 Excel
     */
    exportExcel() {
        try {
            this.materialStats.exportToExcel('管架材料清单.xlsx');
            this.showAlert('Excel 文件已导出', 'success');
        } catch (error) {
            this.showAlert('导出失败: ' + error.message, 'danger');
        }
    }

    /**
     * 导出 CSV
     */
    exportCSV() {
        try {
            this.materialStats.exportToCSV('管架材料清单.csv');
            this.showAlert('CSV 文件已导出', 'success');
        } catch (error) {
            this.showAlert('导出失败: ' + error.message, 'danger');
        }
    }

    /**
     * 下载示例文件
     */
    downloadSample() {
        const sampleData = [
            ['编号', '名称', '数量', '管径', '备注'],
            ['A1-1-A-200', 'U形螺栓 DN200', 10, 200, ''],
            ['A2-2-B-300', '标准型2螺栓管夹 DN300', 5, 300, ''],
            ['D4-1-A-100-200', '悬臂架 DN100 L=200', 8, 100, '梁上生根'],
            ['D5-2-C-200-1000-300', '端焊三角架 DN200', 3, 200, ''],
            ['E1-A-200-S', '不保温管导向架 DN200', 6, 200, '滑动型'],
            ['F2-100-50-C1-500', '弯头竖直耳轴 DN100/50', 4, '100/50', ''],
            ['G1-A', '地面锚板 载荷A', 20, '', ''],
            ['J1-65-200-300-C1', '焊接式管托 DN200', 15, 200, '保温65mm'],
            ['K1-A-50-200x300', '限位架 M50', 8, 50, ''],
            ['L1-100-50-200-C1', '保冷管托 DN100', 6, 100, '保冷50mm']
        ];

        // 创建 CSV 内容
        const csvContent = sampleData.map(row => row.join(',')).join('\n');
        
        // 添加 BOM 以支持中文
        const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '支吊架清单示例.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        this.showAlert('示例文件已下载', 'success');
    }

    /**
     * 显示提示信息
     */
    showAlert(message, type = 'info') {
        // 查找或创建 alert 容器
        let alertContainer = document.querySelector('.alert-container');
        if (!alertContainer) {
            alertContainer = document.createElement('div');
            alertContainer.className = 'alert-container';
            alertContainer.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; max-width: 400px;';
            document.body.appendChild(alertContainer);
        }

        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.style.cssText = 'margin-bottom: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); animation: slideIn 0.3s ease;';
        
        const icon = {
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            danger: 'fa-times-circle',
            info: 'fa-info-circle'
        }[type] || 'fa-info-circle';
        
        alertDiv.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
        
        alertContainer.appendChild(alertDiv);
        
        // 添加动画样式
        if (!document.getElementById('alert-animations')) {
            const style = document.createElement('style');
            style.id = 'alert-animations';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            alertDiv.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => alertDiv.remove(), 300);
        }, 5000);
    }

    /**
     * HTML 转义
     */
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// 初始化应用
const app = new SupportApp();

// 导出供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SupportApp };
}
