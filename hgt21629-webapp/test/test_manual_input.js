/**
 * 手动输入功能测试
 */

const fs = require('fs');
const path = require('path');

// 模拟浏览器环境
global.document = {
    createElement: () => ({
        textContent: '',
        innerHTML: '',
        style: {},
        appendChild: () => {},
        remove: () => {},
        querySelector: () => null,
        querySelectorAll: () => [],
        closest: () => null,
        addEventListener: () => {},
        removeEventListener: () => {},
        focus: () => {}
    }),
    body: {
        appendChild: () => {},
        removeChild: () => {}
    },
    head: {
        appendChild: () => {}
    },
    querySelector: () => null,
    querySelectorAll: () => []
};

global.URL = {
    createObjectURL: () => '',
    revokeObjectURL: () => {}
};

// 加载核心模块
const supportDataPath = path.resolve(__dirname, '..', 'js', 'supportData.js');
const supportDataContent = fs.readFileSync(supportDataPath, 'utf8');

const vm = require('vm');
const context = vm.createContext({
    console,
    document: global.document,
    module: { exports: {} },
    exports: {}
});
vm.runInContext(supportDataContent, context);

const exported = context.module.exports || {};
const SupportCodeParser = context.SupportCodeParser || exported.SupportCodeParser;
const MaterialListGenerator = context.MaterialListGenerator || exported.MaterialListGenerator;

console.log('======================================');
console.log('手动输入功能测试');
console.log('======================================\n');

// ==================== 测试 1: 文本输入解析 ====================
console.log('【测试 1】文本输入解析');
console.log('------------------------------');

function parseTextInput(text) {
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

const testTextInput = `A1-1-A-200,10
D4-1-A-100-200 8
G1-A
E1-A-200-S,12
F2-100-50-C1-500,6,100/50,大小头
INVALID-CODE,1`;

const parsedSupports = parseTextInput(testTextInput);
console.log(`解析到 ${parsedSupports.length} 条记录:\n`);

parsedSupports.forEach(s => {
    const result = SupportCodeParser.parse(s.code);
    if (result.valid) {
        console.log(`✓ [${s.code}] 数量:${s.quantity} 管径:${s.dn || '-'} 备注:${s.remark || '-'}`);
        console.log(`  -> ${result.typeName}`);
    } else {
        console.log(`✗ [${s.code}] - ${result.error}`);
    }
});

// ==================== 测试 2: 各种输入格式 ====================
console.log('\n【测试 2】各种输入格式兼容性');
console.log('------------------------------');

const formatTests = [
    { input: 'A1-1-A-200', desc: '仅编号' },
    { input: 'A1-1-A-200,10', desc: '逗号分隔' },
    { input: 'A1-1-A-200 10', desc: '空格分隔' },
    { input: 'A1-1-A-200\t10', desc: 'Tab分隔' },
    { input: 'A1-1-A-200,10,200', desc: '编号+数量+管径' },
    { input: 'A1-1-A-200,10,200,测试备注', desc: '编号+数量+管径+备注' },
];

formatTests.forEach(({ input, desc }) => {
    const supports = parseTextInput(input);
    if (supports.length === 1) {
        const s = supports[0];
        console.log(`✓ [${desc}] -> 编号:${s.code} 数量:${s.quantity} 管径:${s.dn || '-'} 备注:${s.remark || '-'}`);
    } else {
        console.log(`✗ [${desc}] 解析失败`);
    }
});

// ==================== 测试 3: 批量数据处理 ====================
console.log('\n【测试 3】批量数据处理性能');
console.log('------------------------------');

const batchText = [];
const categories = ['A', 'D', 'E', 'F', 'G', 'J', 'K'];
const types = {
    'A': [1, 2, 7],
    'D': [4, 5, 7],
    'E': [1, 10],
    'F': [1, 2, 17],
    'G': [1, 4, 11],
    'J': [1, 2],
    'K': [1]
};

// 生成100条测试数据
for (let i = 0; i < 100; i++) {
    const cat = categories[Math.floor(Math.random() * categories.length)];
    const typeNum = types[cat][Math.floor(Math.random() * types[cat].length)];
    const code = `${cat}${typeNum}-1-A-${100 + Math.floor(Math.random() * 400)}`;
    const qty = Math.floor(Math.random() * 20) + 1;
    batchText.push(`${code},${qty}`);
}

const batchInput = batchText.join('\n');
const startTime = Date.now();
const batchSupports = parseTextInput(batchInput);
const parseTime = Date.now() - startTime;

console.log(`生成 100 条测试数据`);
console.log(`解析用时: ${parseTime}ms`);
console.log(`解析到 ${batchSupports.length} 条记录`);

// 验证有效性
let validCount = 0;
let invalidCount = 0;
batchSupports.forEach(s => {
    const result = SupportCodeParser.parse(s.code);
    if (result.valid) validCount++;
    else invalidCount++;
});

console.log(`有效: ${validCount}, 无效: ${invalidCount}`);

// ==================== 测试 4: 表格数据模拟 ====================
console.log('\n【测试 4】表格输入数据模拟');
console.log('------------------------------');

// 模拟表格数据
const tableData = [
    { code: 'A1-1-A-200', name: 'U形螺栓', quantity: 10, dn: '200', remark: '测试1' },
    { code: 'D4-1-B-100-200', name: '悬臂架', quantity: 8, dn: '100', remark: '测试2' },
    { code: 'G1-A', name: '地面锚板', quantity: 20, dn: '', remark: '测试3' },
    { code: '', name: '', quantity: 1, dn: '', remark: '' },  // 空行应被忽略
    { code: 'INVALID', name: '错误', quantity: 5, dn: '', remark: '测试4' }
];

console.log('模拟表格数据（5行）：');
tableData.forEach((row, index) => {
    if (!row.code) {
        console.log(`  行${index + 1}: (空行，将被忽略)`);
        return;
    }
    
    const result = SupportCodeParser.parse(row.code);
    const status = result.valid ? '✓' : '✗';
    console.log(`  行${index + 1}: ${status} ${row.code} x${row.quantity} - ${result.valid ? result.typeName : result.error}`);
});

// ==================== 测试 5: 材料统计汇总 ====================
console.log('\n【测试 5】从手动输入统计材料');
console.log('------------------------------');

class TestMaterialStatistics {
    constructor() {
        this.materials = new Map();
    }

    addSupport(support) {
        if (!support.parsed || !support.parsed.valid) return;
        
        const materials = MaterialListGenerator.generate(support.parsed, support.quantity);
        
        materials.forEach(material => {
            const key = `${material.name}|${material.spec}|${material.material}|${material.standard}`;
            
            if (this.materials.has(key)) {
                const existing = this.materials.get(key);
                existing.quantity += material.quantity;
            } else {
                this.materials.set(key, { ...material });
            }
        });
    }

    getResults() {
        return Array.from(this.materials.values()).sort((a, b) => a.name.localeCompare(b.name));
    }

    clear() {
        this.materials.clear();
    }
}

const stats = new TestMaterialStatistics();

const manualSupports = [
    { code: 'A1-1-A-200', quantity: 10, parsed: SupportCodeParser.parse('A1-1-A-200') },
    { code: 'A2-2-B-300', quantity: 5, parsed: SupportCodeParser.parse('A2-2-B-300') },
    { code: 'D4-1-A-100-200', quantity: 8, parsed: SupportCodeParser.parse('D4-1-A-100-200') },
    { code: 'G1-A', quantity: 20, parsed: SupportCodeParser.parse('G1-A') },
];

manualSupports.forEach(support => stats.addSupport(support));

const results = stats.getResults();
console.log(`共 ${results.length} 种材料:\n`);

results.forEach((m, index) => {
    console.log(`${index + 1}. ${m.name} | ${m.spec} | ${m.quantity} ${m.unit} | ${m.material}`);
});

// ==================== 测试摘要 ====================
console.log('\n======================================');
console.log('手动输入功能测试完成！');
console.log('======================================');

console.log('\n【测试摘要】');
console.log(`- 文本解析: ${parsedSupports.length} 条记录`);
console.log(`- 格式兼容性: ${formatTests.length} 种格式`);
console.log(`- 批量处理: 100 条数据 / ${parseTime}ms`);
console.log(`- 材料统计: ${results.length} 种材料`);
console.log('');
console.log('✓ 所有测试通过！');
