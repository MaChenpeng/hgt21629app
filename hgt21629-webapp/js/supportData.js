/**
 * HG/T21629-2021 管架标准图材料数据库
 * 包含：材料库、管架类型定义、零件清单生成规则、编号解析函数
 */

// ==================== 材料库 ====================
const MaterialLibrary = {
    // 型钢规格
    sections: {
        // 等边角钢 GB/T 706
        angle: [
            { spec: 'L20×3', Wx: 0.58, Ix: 0.39, A: 1.13, weight: 0.89 },
            { spec: 'L25×3', Wx: 0.91, Ix: 0.74, A: 1.43, weight: 1.12 },
            { spec: 'L30×3', Wx: 1.28, Ix: 1.28, A: 1.75, weight: 1.37 },
            { spec: 'L36×3', Wx: 1.85, Ix: 2.11, A: 2.11, weight: 1.66 },
            { spec: 'L40×3', Wx: 2.26, Ix: 2.83, A: 2.36, weight: 1.85 },
            { spec: 'L40×4', Wx: 2.97, Ix: 3.59, A: 3.09, weight: 2.42 },
            { spec: 'L45×4', Wx: 3.89, Ix: 5.09, A: 3.49, weight: 2.74 },
            { spec: 'L50×4', Wx: 4.88, Ix: 7.18, A: 3.90, weight: 3.06 },
            { spec: 'L50×5', Wx: 6.00, Ix: 8.68, A: 4.80, weight: 3.77 },
            { spec: 'L56×5', Wx: 7.55, Ix: 12.27, A: 5.42, weight: 4.25 },
            { spec: 'L63×5', Wx: 9.13, Ix: 17.55, A: 6.14, weight: 4.82 },
            { spec: 'L63×6', Wx: 10.84, Ix: 20.48, A: 7.29, weight: 5.72 },
            { spec: 'L70×6', Wx: 13.77, Ix: 29.00, A: 8.16, weight: 6.41 },
            { spec: 'L75×6', Wx: 16.06, Ix: 37.82, A: 8.78, weight: 6.89 },
            { spec: 'L80×6', Wx: 18.80, Ix: 48.79, A: 9.40, weight: 7.38 },
            { spec: 'L80×8', Wx: 24.60, Ix: 62.78, A: 12.30, weight: 9.66 },
            { spec: 'L90×7', Wx: 26.40, Ix: 79.20, A: 12.30, weight: 9.66 },
            { spec: 'L100×8', Wx: 33.80, Ix: 120.0, A: 15.60, weight: 12.2 },
            { spec: 'L100×10', Wx: 41.20, Ix: 143.0, A: 19.30, weight: 15.1 },
            { spec: 'L125×10', Wx: 65.40, Ix: 282.0, A: 24.30, weight: 19.1 },
            { spec: 'L140×12', Wx: 90.80, Ix: 483.0, A: 32.50, weight: 25.5 },
            { spec: 'L160×14', Wx: 135.0, Ix: 863.0, A: 43.30, weight: 34.0 },
            { spec: 'L180×16', Wx: 191.0, Ix: 1430.0, A: 55.50, weight: 43.6 },
            { spec: 'L200×20', Wx: 267.0, Ix: 2240.0, A: 76.50, weight: 60.1 }
        ],
        // 槽钢 GB/T 706
        channel: [
            { spec: '[50×37×4.5', h: 50, Wx: 10.4, Ix: 26.0, A: 6.51, weight: 5.44 },
            { spec: '[63×40×4.8', h: 63, Wx: 16.3, Ix: 51.0, A: 8.45, weight: 6.63 },
            { spec: '[80×43×5.0', h: 80, Wx: 25.3, Ix: 101.0, A: 10.24, weight: 8.04 },
            { spec: '[100×48×5.3', h: 100, Wx: 39.7, Ix: 198.0, A: 12.74, weight: 10.0 },
            { spec: '[126×53×5.5', h: 126, Wx: 62.1, Ix: 391.0, A: 15.69, weight: 12.3 },
            { spec: '[140×58×6.0', h: 140, Wx: 80.5, Ix: 564.0, A: 18.51, weight: 14.5 },
            { spec: '[160×63×6.5', h: 160, Wx: 108.0, Ix: 866.0, A: 21.95, weight: 17.2 },
            { spec: '[180×68×7.0', h: 180, Wx: 141.0, Ix: 1270.0, A: 25.69, weight: 20.2 },
            { spec: '[200×73×7.0', h: 200, Wx: 191.0, Ix: 1910.0, A: 28.83, weight: 22.6 },
            { spec: '[220×77×7.0', h: 220, Wx: 233.0, Ix: 2570.0, A: 31.85, weight: 25.0 },
            { spec: '[250×78×7.0', h: 250, Wx: 270.0, Ix: 3370.0, A: 34.91, weight: 27.5 },
            { spec: '[280×82×7.5', h: 280, Wx: 340.0, Ix: 4760.0, A: 40.02, weight: 31.4 },
            { spec: '[320×88×8.0', h: 320, Wx: 475.0, Ix: 7600.0, A: 48.70, weight: 38.1 },
            { spec: '[360×96×9.0', h: 360, Wx: 660.0, Ix: 11900.0, A: 60.89, weight: 47.8 },
            { spec: '[400×100×10.5', h: 400, Wx: 878.0, Ix: 17600.0, A: 75.05, weight: 58.9 }
        ],
        // 工字钢 GB/T 706
        iBeam: [
            { spec: 'I100×68×4.5', h: 100, Wx: 49.0, Ix: 245.0, A: 14.34, weight: 11.3 },
            { spec: 'I126×74×5.0', h: 126, Wx: 77.0, Ix: 485.0, A: 18.10, weight: 14.2 },
            { spec: 'I140×80×5.5', h: 140, Wx: 102.0, Ix: 712.0, A: 21.50, weight: 16.9 },
            { spec: 'I160×88×6.0', h: 160, Wx: 141.0, Ix: 1130.0, A: 26.11, weight: 20.5 },
            { spec: 'I180×94×6.5', h: 180, Wx: 185.0, Ix: 1660.0, A: 30.74, weight: 24.1 },
            { spec: 'I200×100×7.0', h: 200, Wx: 237.0, Ix: 2370.0, A: 35.55, weight: 27.9 },
            { spec: 'I220×110×7.5', h: 220, Wx: 309.0, Ix: 3400.0, A: 42.00, weight: 33.0 },
            { spec: 'I250×116×8.0', h: 250, Wx: 422.0, Ix: 5280.0, A: 48.50, weight: 38.1 },
            { spec: 'I280×122×8.5', h: 280, Wx: 542.0, Ix: 7590.0, A: 55.45, weight: 43.4 },
            { spec: 'I320×130×9.5', h: 320, Wx: 760.0, Ix: 12170.0, A: 67.05, weight: 52.7 },
            { spec: 'I360×136×10.0', h: 360, Wx: 962.0, Ix: 17310.0, A: 76.30, weight: 60.0 },
            { spec: 'I400×142×10.5', h: 400, Wx: 1190.0, Ix: 23850.0, A: 86.10, weight: 67.6 },
            { spec: 'I450×150×11.5', h: 450, Wx: 1570.0, Ix: 35300.0, A: 102.0, weight: 80.4 },
            { spec: 'I500×158×12.0', h: 500, Wx: 2070.0, Ix: 51700.0, A: 119.0, weight: 93.6 }
        ]
    },
    
    // 扁钢
    flatBar: [
        { width: 20, thickness: 3, weight: 0.47 },
        { width: 25, thickness: 3, weight: 0.59 },
        { width: 25, thickness: 4, weight: 0.79 },
        { width: 30, thickness: 3, weight: 0.71 },
        { width: 30, thickness: 4, weight: 0.94 },
        { width: 40, thickness: 4, weight: 1.26 },
        { width: 40, thickness: 5, weight: 1.57 },
        { width: 50, thickness: 5, weight: 1.96 },
        { width: 60, thickness: 6, weight: 2.83 },
        { width: 80, thickness: 8, weight: 5.02 },
        { width: 100, thickness: 8, weight: 6.28 },
        { width: 100, thickness: 10, weight: 7.85 }
    ],
    
    // 钢板
    steelPlate: [
        { thickness: 4, weight: 31.4 },
        { thickness: 5, weight: 39.2 },
        { thickness: 6, weight: 47.1 },
        { thickness: 8, weight: 62.8 },
        { thickness: 10, weight: 78.5 },
        { thickness: 12, weight: 94.2 },
        { thickness: 16, weight: 125.6 },
        { thickness: 20, weight: 157.0 },
        { thickness: 25, weight: 196.3 }
    ],
    
    // 钢管 (外径×壁厚)
    steelPipe: [
        { spec: 'Φ21×2', OD: 21, weight: 0.95 },
        { spec: 'Φ27×2', OD: 27, weight: 1.25 },
        { spec: 'Φ34×2.5', OD: 34, weight: 1.98 },
        { spec: 'Φ42×3', OD: 42, weight: 2.89 },
        { spec: 'Φ48×3.5', OD: 48, weight: 3.84 },
        { spec: 'Φ60×4', OD: 60, weight: 5.52 },
        { spec: 'Φ76×5', OD: 76, weight: 8.75 },
        { spec: 'Φ89×5', OD: 89, weight: 10.4 },
        { spec: 'Φ114×6', OD: 114, weight: 16.0 },
        { spec: 'Φ140×6', OD: 140, weight: 20.0 }
    ],
    
    // 螺栓
    bolts: [
        { spec: 'M8', d: 8, A: 50.3, weight: 0.041 },
        { spec: 'M10', d: 10, A: 78.5, weight: 0.065 },
        { spec: 'M12', d: 12, A: 113, weight: 0.093 },
        { spec: 'M16', d: 16, A: 201, weight: 0.165 },
        { spec: 'M20', d: 20, A: 314, weight: 0.257 },
        { spec: 'M24', d: 24, A: 452, weight: 0.370 },
        { spec: 'M30', d: 30, A: 707, weight: 0.578 },
        { spec: 'M36', d: 36, A: 1020, weight: 0.833 }
    ],
    
    // 材料标准
    materialStandards: {
        'Q235B': { name: '碳素结构钢', standard: 'GB/T 700', temp: '-20℃~300℃' },
        'Q355B': { name: '低合金高强度结构钢', standard: 'GB/T 1591', temp: '-40℃~400℃' },
        '20#': { name: '优质碳素结构钢', standard: 'GB/T 699', temp: '-20℃~425℃' },
        '16Mn': { name: '低合金钢', standard: 'GB/T 1591', temp: '-40℃~450℃' },
        '15CrMo': { name: '合金结构钢', standard: 'GB/T 3077', temp: '≤550℃' },
        '0Cr18Ni9': { name: '不锈钢', standard: 'GB/T 1220', temp: '-196℃~700℃' },
        'PTFE': { name: '聚四氟乙烯', standard: 'HG/T 2902', temp: '-200℃~260℃' }
    }
};

// ==================== 管架类型定义 ====================
const SupportTypes = {
    // A类 - 管架零部件
    'A': {
        name: '管架零部件',
        items: {
            'A1': { name: 'U形螺栓', unit: '套', category: '紧固件' },
            'A2': { name: '标准型2螺栓管夹', unit: '套', category: '管夹' },
            'A3': { name: '重载型2螺栓管夹', unit: '套', category: '管夹' },
            'A4': { name: '法兰用U形管夹', unit: '套', category: '管夹' },
            'A5': { name: '减振用U形管夹', unit: '套', category: '管夹' },
            'A6': { name: '可调节的U形管夹', unit: '套', category: '管夹' },
            'A7': { name: '标准型3螺栓管夹', unit: '套', category: '管夹' },
            'A8': { name: '重载型3螺栓管夹', unit: '套', category: '管夹' },
            'A9': { name: '标准型铬钼钢3螺栓管夹', unit: '套', category: '管夹', material: '15CrMo' },
            'A10': { name: '重载型铬钼钢3螺栓管夹', unit: '套', category: '管夹', material: '15CrMo' },
            'A11': { name: '单孔吊板', unit: '件', category: '吊架配件' },
            'A12': { name: '直管用吊板', unit: '件', category: '吊架配件' },
            'A13': { name: '90°弯头用吊板', unit: '件', category: '吊架配件' },
            'A14': { name: 'U形吊耳', unit: '件', category: '吊架配件' },
            'A15': { name: '花篮螺母', unit: '件', category: '紧固件' },
            'A16': { name: 'U形螺母', unit: '件', category: '紧固件' },
            'A17': { name: '双孔吊板', unit: '件', category: '吊架配件' },
            'A18': { name: '三孔吊板', unit: '件', category: '吊架配件' },
            'A19': { name: '四孔吊板', unit: '件', category: '吊架配件' },
            'A20': { name: '吊板螺母', unit: '件', category: '紧固件' },
            'A21': { name: '垫板', unit: '件', category: '基础件' },
            'A22': { name: '小管径保温管用管夹', unit: '套', category: '管夹' },
            'A23': { name: '中管径保温管用管夹', unit: '套', category: '管夹' },
            'A24': { name: '大管径保温管用管夹', unit: '套', category: '管夹' },
            'A25': { name: '大管径保冷管用管夹', unit: '套', category: '管夹' }
        }
    },
    
    // B类 - 刚性吊架
    'B': {
        name: '刚性吊架',
        items: {
            'B1': { name: '管夹式刚性吊架', unit: '套', category: '吊架' },
            'B2': { name: '吊杆式刚性吊架', unit: '套', category: '吊架' },
            'B3': { name: '秋千式刚性吊架', unit: '套', category: '吊架' }
        }
    },
    
    // C类 - 弹簧支吊架
    'C': {
        name: '弹簧支吊架',
        items: {
            'C1': { name: '可变弹簧吊架', unit: '套', category: '弹簧支吊架' },
            'C2': { name: '恒力吊架', unit: '套', category: '弹簧支吊架' }
        }
    },
    
    // D类 - 钢结构生根辅助钢结构
    'D': {
        name: '钢结构生根辅助钢结构',
        items: {
            'D1': { name: '筋板和垫板', unit: '套', category: '基础件' },
            'D2': { name: '端焊悬臂架', unit: '件', category: '悬臂架', steelTypes: ['槽钢', '角钢'] },
            'D3': { name: '侧焊悬臂架', unit: '件', category: '悬臂架', steelTypes: ['槽钢', '角钢'] },
            'D4': { name: '悬臂架', unit: '件', category: '悬臂架', steelTypes: ['槽钢', '角钢'] },
            'D5': { name: '端焊三角架', unit: '件', category: '三角架', steelTypes: ['槽钢', '角钢'] },
            'D6': { name: '侧焊三角架', unit: '件', category: '三角架', steelTypes: ['槽钢', '角钢'] },
            'D7': { name: 'L形/倒L形架', unit: '件', category: '支架', steelTypes: ['槽钢', '角钢'] },
            'D8': { name: '门形/倒门形架(角钢和槽钢)', unit: '件', category: '门形架', steelTypes: ['角钢', '槽钢'] },
            'D9': { name: '半门形/倒半门形架(角钢和槽钢)', unit: '件', category: '门形架', steelTypes: ['角钢', '槽钢'] },
            'D10': { name: '辅助梁', unit: '件', category: '辅助件', steelTypes: ['槽钢', '工字钢'] },
            'D11': { name: '辅助柱', unit: '件', category: '辅助件', steelTypes: ['槽钢', '工字钢'] },
            'D12': { name: 'T形/倒T形架', unit: '件', category: '支架', steelTypes: ['槽钢'] },
            'D13': { name: '门形/倒门形架(H型钢)', unit: '件', category: '门形架', steelTypes: ['H型钢'] },
            'D14': { name: '半门形/倒半门形架(H型钢)', unit: '件', category: '门形架', steelTypes: ['H型钢'] },
            'D15': { name: '水平T形架', unit: '件', category: '支架', steelTypes: ['槽钢'] },
            'D16': { name: '水平门形/井形架', unit: '件', category: '支架', steelTypes: ['槽钢', '角钢'] },
            'D17': { name: '并排双三角架', unit: '件', category: '三角架', steelTypes: ['槽钢', '角钢'] },
            'D18': { name: '双角钢/槽钢悬臂架', unit: '件', category: '悬臂架', steelTypes: ['双角钢', '双槽钢'] },
            'D19': { name: '双槽钢三角架', unit: '件', category: '三角架', steelTypes: ['双槽钢'] },
            'D20': { name: '门形架(槽钢与H型钢组合)', unit: '件', category: '门形架', steelTypes: ['槽钢', 'H型钢'] }
        }
    },
    
    // E类 - 导向架
    'E': {
        name: '导向架',
        items: {
            'E1': { name: '不保温管的导向架', unit: '套', category: '导向架' },
            'E2': { name: '管托的导向架', unit: '套', category: '导向架' },
            'E3': { name: '管托的压扣型导向架', unit: '套', category: '导向架' },
            'E4': { name: '结构型导向/限位架', unit: '套', category: '导向架' },
            'E5': { name: '弹簧支架或可调支架的导向/限位架', unit: '套', category: '导向架' },
            'E6': { name: '竖管耳轴的导向/限位架', unit: '套', category: '导向架' },
            'E7': { name: '耳轴的压扣型导向/限位架', unit: '套', category: '导向架' },
            'E8': { name: '水平双耳轴的导向架', unit: '套', category: '导向架' },
            'E9': { name: '不保温管的管夹型导向架', unit: '套', category: '导向架' },
            'E10': { name: '保温/保冷立管的承重/导向架', unit: '套', category: '导向架' },
            'E11': { name: '立管的两方向导向架', unit: '套', category: '导向架' },
            'E12': { name: '立管的四方向导向架', unit: '套', category: '导向架' }
        }
    },
    
    // F类 - 耳轴/支腿/耳座
    'F': {
        name: '耳轴/支腿/耳座',
        items: {
            'F1': { name: '耳轴的补强板', unit: '件', category: '耳轴' },
            'F2': { name: '弯头的竖直耳轴', unit: '件', category: '耳轴' },
            'F3': { name: '水平管的竖直耳轴', unit: '件', category: '耳轴' },
            'F4': { name: '竖直弯头的水平耳轴', unit: '件', category: '耳轴' },
            'F5': { name: '水平弯头的水平耳轴', unit: '件', category: '耳轴' },
            'F6': { name: '立管的耳轴(型1)', unit: '件', category: '耳轴' },
            'F7': { name: '立管的耳轴(型2)', unit: '件', category: '耳轴' },
            'F8': { name: '水平管的水平耳轴(型1)', unit: '件', category: '耳轴' },
            'F9': { name: '水平管的水平耳轴(型2)', unit: '件', category: '耳轴' },
            'F10': { name: '小管径立管的耳板', unit: '件', category: '耳轴' },
            'F11': { name: '立管的L形耳轴(型1)', unit: '件', category: '耳轴' },
            'F12': { name: '立管的L形耳轴(型2)', unit: '件', category: '耳轴' },
            'F13': { name: '管的L形耳轴(型1)', unit: '件', category: '耳轴' },
            'F14': { name: '管的L形耳轴(型2)', unit: '件', category: '耳轴' },
            'F15': { name: '16"及以上立管用导向耳轴(型1)', unit: '件', category: '耳轴' },
            'F16': { name: '16"及以上立管用导向耳轴(型2)', unit: '件', category: '耳轴' },
            'F17': { name: '立管用耳座', unit: '件', category: '耳座' },
            'F18': { name: '虾米弯支座', unit: '件', category: '支座' },
            'F19': { name: '斜管的竖直耳轴', unit: '件', category: '耳轴' },
            'F20': { name: '小管径三通和弯头用支架', unit: '件', category: '支架' }
        }
    },
    
    // G类 - 地面/混凝土生根支架
    'G': {
        name: '地面/混凝土生根支架',
        items: {
            'G1': { name: '地面锚板', unit: '件', category: '锚板' },
            'G2': { name: '混凝土锚板(膨胀螺栓)', unit: '件', category: '锚板' },
            'G3': { name: '混凝土锚板(化学螺栓)', unit: '件', category: '锚板' },
            'G4': { name: '地面上生根的T形架', unit: '件', category: '支架', steelTypes: ['槽钢'] },
            'G5': { name: '地面上生根的门形架', unit: '件', category: '门形架', steelTypes: ['槽钢'] },
            'G6': { name: '地面上生根的门形架(组合)', unit: '件', category: '门形架', steelTypes: ['槽钢', 'H型钢'] },
            'G7': { name: '连接板型管道支腿', unit: '件', category: '支腿' },
            'G8': { name: 'U形螺栓/管卡型管道支腿', unit: '件', category: '支腿' },
            'G9': { name: '罐的支腿', unit: '件', category: '支腿' },
            'G10': { name: '软管站用支架', unit: '件', category: '支架' },
            'G11': { name: '混凝土上生根的悬臂架', unit: '件', category: '悬臂架', steelTypes: ['槽钢', '角钢'] },
            'G12': { name: '混凝土上生根的三角架', unit: '件', category: '三角架', steelTypes: ['槽钢', '角钢'] },
            'G13': { name: '混凝土上生根的L形/倒L形架', unit: '件', category: '支架', steelTypes: ['槽钢', '角钢'] },
            'G14': { name: '混凝土上生根的门形/倒门形架', unit: '件', category: '门形架', steelTypes: ['槽钢', 'H型钢'] },
            'G15': { name: '混凝土上生根的水平T形架', unit: '件', category: '支架', steelTypes: ['槽钢'] },
            'G16': { name: '混凝土上生根的水平门形架', unit: '件', category: '支架', steelTypes: ['槽钢'] },
            'G17': { name: '混凝土上生根的水平井形架', unit: '件', category: '支架', steelTypes: ['槽钢'] }
        }
    },
    
    // H类 - 可调支架
    'H': {
        name: '可调支架',
        items: {
            'H1': { name: '可调支架', unit: '套', category: '可调支架' },
            'H2': { name: '短可调支架', unit: '套', category: '可调支架' },
            'H3': { name: '大管可调支架', unit: '套', category: '可调支架' }
        }
    },
    
    // J类 - 管托
    'J': {
        name: '管托',
        items: {
            'J1': { name: '焊接式管托', unit: '件', category: '管托' },
            'J2': { name: '管夹式管托', unit: '件', category: '管托' },
            'J3': { name: '大管焊接式管托', unit: '件', category: '管托' },
            'J4': { name: '大管管夹式管托', unit: '件', category: '管托' },
            'J5': { name: '多向管夹式管托(型1)', unit: '件', category: '管托' },
            'J6': { name: '多向管夹式管托(型2)', unit: '件', category: '管托' },
            'J7': { name: '多向管夹式管托(型3)', unit: '件', category: '管托' },
            'J8': { name: '多向管夹式管托(型4)', unit: '件', category: '管托' },
            'J9': { name: '多向大管管夹式管托(型1)', unit: '件', category: '管托' },
            'J10': { name: '多向大管管夹式管托(型2)', unit: '件', category: '管托' },
            'J11': { name: '多向大管管夹式管托(型3)', unit: '件', category: '管托' },
            'J12': { name: '多向大管管夹式管托(型4)', unit: '件', category: '管托' },
            'J13': { name: '带垫板的焊接式管托', unit: '件', category: '管托' },
            'J14': { name: '100长管夹式管托', unit: '件', category: '管托' },
            'J15': { name: '8"及以上立管用焊接式管托(型1)', unit: '件', category: '管托' },
            'J16': { name: '8"及以上立管用焊接式管托(型2)', unit: '件', category: '管托' }
        }
    },
    
    // K类 - 限位架
    'K': {
        name: '限位架',
        items: {
            'K1': { name: '不保温管限位架', unit: '套', category: '限位架' },
            'K2': { name: '绝热管限位架', unit: '套', category: '限位架' },
            'K3': { name: '固定架', unit: '套', category: '固定架' },
            'K4': { name: '双向限位架', unit: '套', category: '限位架' }
        }
    },
    
    // L类 - 保冷管架
    'L': {
        name: '保冷管架',
        items: {
            'L1': { name: '保冷管托', unit: '件', category: '管托' },
            'L2': { name: '保冷吊架', unit: '套', category: '吊架' },
            'L3': { name: '保冷耳座', unit: '件', category: '耳座' }
        }
    },
    
    // Q类 - 大管支撑小管/小支管加强架
    'Q': {
        name: '大管支撑小管/小支管加强架',
        items: {
            'Q1': { name: '大管支撑小管支架(型1)', unit: '件', category: '支架' },
            'Q2': { name: '大管支撑小管支架(型2)', unit: '件', category: '支架' },
            'Q3': { name: '小支管加强架(型1)', unit: '件', category: '支架' },
            'Q4': { name: '小支管加强架(型2)', unit: '件', category: '支架' }
        }
    }
};

// ==================== 管架编号解析器 ====================
const SupportCodeParser = {
    /**
     * 解析管架编号
     * @param {string} code - 管架编号，如 "D4-1-A-100-200"
     * @returns {Object} 解析结果
     */
    parse(code) {
        if (!code || typeof code !== 'string') {
            return { valid: false, error: '编号为空' };
        }

        code = code.trim().toUpperCase();
        
        // 基本正则：类别字母 + 数字
        const match = code.match(/^([A-Z])(\d+)(?:-(.*))?$/);
        if (!match) {
            return { valid: false, error: '编号格式错误' };
        }

        const category = match[1];
        const typeNum = match[2];
        const typeCode = category + typeNum;
        const params = match[3] ? match[3].split('-') : [];

        // 检查类别是否存在
        if (!SupportTypes[category]) {
            return { valid: false, error: `未知类别: ${category}` };
        }

        // 检查型号是否存在
        const typeInfo = SupportTypes[category].items[typeCode];
        if (!typeInfo) {
            return { valid: false, error: `未知型号: ${typeCode}` };
        }

        return {
            valid: true,
            code: code,
            category: category,
            categoryName: SupportTypes[category].name,
            typeCode: typeCode,
            typeName: typeInfo.name,
            params: params,
            unit: typeInfo.unit,
            category2: typeInfo.category,
            material: typeInfo.material || null,
            steelTypes: typeInfo.steelTypes || []
        };
    },

    /**
     * 获取载荷等级说明
     */
    getLoadLevel(level) {
        const levels = {
            'A': { name: '轻载', desc: '较小载荷' },
            'B': { name: '中轻载', desc: '中等偏小' },
            'C': { name: '中载', desc: '中等载荷' },
            'D': { name: '重载', desc: '较大载荷' },
            'E': { name: '超重载', desc: '大载荷' }
        };
        return levels[level] || { name: '未知', desc: '' };
    },

    /**
     * 获取附加参数说明
     */
    getParamMeaning(param) {
        const params = {
            'S': { name: '滑动型', desc: '滑动支架' },
            'F': { name: '防腐型', desc: '防腐处理' },
            'C1': { name: '材质等级1', desc: '普通碳钢' },
            'C2': { name: '材质等级2', desc: '低合金钢' },
            'Y': { name: '预制型', desc: '工厂预制' },
            'UP': { name: '向上', desc: '安装方向向上' },
            'DOWN': { name: '向下', desc: '安装方向向下' },
            'FB': { name: '带法兰', desc: '带法兰连接' },
            'INS': { name: '保温', desc: '保温型' },
            'COLD': { name: '保冷', desc: '保冷型' }
        };
        return params[param] || { name: param, desc: '' };
    }
};

// ==================== 材料清单生成器 ====================
const MaterialListGenerator = {
    /**
     * 根据管架信息生成材料清单
     * @param {Object} supportInfo - 管架信息
     * @param {number} quantity - 数量
     * @returns {Array} 材料清单
     */
    generate(supportInfo, quantity = 1) {
        const materials = [];
        const code = supportInfo.typeCode;
        
        // A类 - 管架零部件
        if (code.startsWith('A')) {
            materials.push(...this.generateAMaterials(supportInfo, quantity));
        }
        // D类 - 钢结构生根辅助钢结构
        else if (code.startsWith('D')) {
            materials.push(...this.generateDMaterials(supportInfo, quantity));
        }
        // E类 - 导向架
        else if (code.startsWith('E')) {
            materials.push(...this.generateEMaterials(supportInfo, quantity));
        }
        // F类 - 耳轴/支腿/耳座
        else if (code.startsWith('F')) {
            materials.push(...this.generateFMaterials(supportInfo, quantity));
        }
        // G类 - 地面/混凝土生根支架
        else if (code.startsWith('G')) {
            materials.push(...this.generateGMaterials(supportInfo, quantity));
        }
        // H类 - 可调支架
        else if (code.startsWith('H')) {
            materials.push(...this.generateHMaterials(supportInfo, quantity));
        }
        // J类 - 管托
        else if (code.startsWith('J')) {
            materials.push(...this.generateJMaterials(supportInfo, quantity));
        }
        // K类 - 限位架
        else if (code.startsWith('K')) {
            materials.push(...this.generateKMaterials(supportInfo, quantity));
        }
        // L类 - 保冷管架
        else if (code.startsWith('L')) {
            materials.push(...this.generateLMaterials(supportInfo, quantity));
        }
        // Q类 - 大管支撑小管
        else if (code.startsWith('Q')) {
            materials.push(...this.generateQMaterials(supportInfo, quantity));
        }
        else {
            // 其他类别，生成基础条目
            materials.push({
                name: supportInfo.typeName,
                spec: supportInfo.code,
                quantity: quantity,
                unit: supportInfo.unit,
                standard: 'HG/T 21629-2021',
                material: 'Q235B'
            });
        }

        return materials;
    },

    // A类材料生成
    generateAMaterials(info, qty) {
        const materials = [];
        const code = info.typeCode;
        
        switch(code) {
            case 'A1': // U形螺栓
                materials.push({
                    name: 'U形螺栓',
                    spec: 'M12~M36',
                    quantity: qty,
                    unit: '套',
                    standard: 'GB/T 798',
                    material: '20#'
                });
                materials.push({
                    name: '螺母',
                    spec: '与螺栓配套',
                    quantity: qty * 2,
                    unit: '个',
                    standard: 'GB/T 6170',
                    material: '20#'
                });
                break;
                
            case 'A2': // 标准型2螺栓管夹
            case 'A3': // 重载型2螺栓管夹
                materials.push({
                    name: '管夹本体',
                    spec: '钢板 δ=6~12',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: code === 'A2' ? 'Q235B' : 'Q355B'
                });
                materials.push({
                    name: '螺栓',
                    spec: 'M16~M30',
                    quantity: qty * 2,
                    unit: '套',
                    standard: 'GB/T 5782',
                    material: '20#'
                });
                break;
                
            case 'A7': // 标准型3螺栓管夹
            case 'A8': // 重载型3螺栓管夹
                materials.push({
                    name: '管夹本体',
                    spec: '钢板 δ=8~16',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: code === 'A7' ? 'Q235B' : 'Q355B'
                });
                materials.push({
                    name: '螺栓',
                    spec: 'M20~M36',
                    quantity: qty * 3,
                    unit: '套',
                    standard: 'GB/T 5782',
                    material: '20#'
                });
                break;
                
            case 'A9': // 铬钼钢管夹
            case 'A10':
                materials.push({
                    name: '管夹本体',
                    spec: '锻件',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 3077',
                    material: '15CrMo'
                });
                materials.push({
                    name: '铬钼钢螺栓',
                    spec: 'M20~M36',
                    quantity: qty * 3,
                    unit: '套',
                    standard: 'GB/T 3077',
                    material: '15CrMo'
                });
                break;
                
            case 'A11': // 单孔吊板
                materials.push({
                    name: '吊板',
                    spec: '扁钢 -100×10',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'A12': // 直管用吊板
            case 'A13': // 弯头用吊板
                materials.push({
                    name: '吊板',
                    spec: '扁钢 -120×12',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '加强筋',
                    spec: '扁钢 -60×8',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'A15': // 花篮螺母
                materials.push({
                    name: '花篮螺母',
                    spec: 'M16~M30',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            default:
                materials.push({
                    name: info.typeName,
                    spec: info.code,
                    quantity: qty,
                    unit: info.unit,
                    standard: 'HG/T 21629-2021',
                    material: 'Q235B'
                });
        }
        
        return materials;
    },

    // D类材料生成
    generateDMaterials(info, qty) {
        const materials = [];
        const code = info.typeCode;
        const params = info.params;
        
        // 解析参数获取尺寸信息
        const loadLevel = params[1] || 'A'; // 载荷等级
        const pipeDN = params[2] || '100';  // 管径
        const length = params[3] || '200';  // 长度/高度
        
        switch(code) {
            case 'D1': // 筋板和垫板
                materials.push({
                    name: '筋板',
                    spec: '钢板 δ=6~10',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '垫板',
                    spec: '钢板 δ=10~20',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'D2': // 端焊悬臂架
            case 'D3': // 侧焊悬臂架
            case 'D4': // 悬臂架
                const channelSpecs = ['[100×48×5.3', '[126×53×5.5', '[140×58×6.0', '[160×63×6.5', '[180×68×7.0'];
                const loadIndex = ['A', 'B', 'C', 'D', 'E'].indexOf(loadLevel);
                const channelSpec = channelSpecs[Math.min(loadIndex, 4)] || channelSpecs[0];
                
                materials.push({
                    name: '槽钢悬臂',
                    spec: channelSpec,
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '筋板',
                    spec: '钢板 δ=8',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'D5': // 端焊三角架
            case 'D6': // 侧焊三角架
                materials.push({
                    name: '横梁',
                    spec: '[100×48×5.3',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '斜撑',
                    spec: 'L63×5',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '筋板',
                    spec: '钢板 δ=8',
                    quantity: qty * 4,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'D7': // L形/倒L形架
                materials.push({
                    name: '立柱',
                    spec: '[100×48×5.3',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '横梁',
                    spec: '[100×48×5.3',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '连接板',
                    spec: '钢板 δ=10',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'D8': // 门形架(角钢和槽钢)
                materials.push({
                    name: '立柱',
                    spec: 'L75×6',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '横梁',
                    spec: '[100×48×5.3',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                break;
                
            case 'D12': // T形/倒T形架
                materials.push({
                    name: '立柱',
                    spec: '[126×53×5.5',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '横梁',
                    spec: '[100×48×5.3',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                break;
                
            case 'D13': // 门形架(H型钢)
                materials.push({
                    name: '立柱',
                    spec: 'I200×100×7.0',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '横梁',
                    spec: 'I200×100×7.0',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                break;
                
            default:
                materials.push({
                    name: info.typeName,
                    spec: info.code,
                    quantity: qty,
                    unit: info.unit,
                    standard: 'HG/T 21629-2021',
                    material: 'Q235B'
                });
        }
        
        return materials;
    },

    // E类材料生成
    generateEMaterials(info, qty) {
        const materials = [];
        const code = info.typeCode;
        
        switch(code) {
            case 'E1': // 不保温管的导向架
                materials.push({
                    name: '导向架本体',
                    spec: '钢板 δ=8~12',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '导向板',
                    spec: '扁钢 -100×10',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'E10': // 保温/保冷立管的承重/导向架
                materials.push({
                    name: '承重导向架',
                    spec: '组合件',
                    quantity: qty,
                    unit: '套',
                    standard: 'HG/T 21629-2021',
                    material: 'Q235B'
                });
                materials.push({
                    name: 'U形螺栓',
                    spec: 'M16~M24',
                    quantity: qty * 2,
                    unit: '套',
                    standard: 'GB/T 798',
                    material: '20#'
                });
                break;
                
            default:
                materials.push({
                    name: info.typeName,
                    spec: info.code,
                    quantity: qty,
                    unit: info.unit,
                    standard: 'HG/T 21629-2021',
                    material: 'Q235B'
                });
        }
        
        return materials;
    },

    // F类材料生成
    generateFMaterials(info, qty) {
        const materials = [];
        const code = info.typeCode;
        
        switch(code) {
            case 'F1': // 耳轴的补强板
                materials.push({
                    name: '补强板',
                    spec: '钢板 δ=10~16',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'F2': // 弯头的竖直耳轴
            case 'F3': // 水平管的竖直耳轴
            case 'F4': // 竖直弯头的水平耳轴
            case 'F5': // 水平弯头的水平耳轴
                materials.push({
                    name: '耳轴',
                    spec: '圆钢 Φ40~80',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '加强板',
                    spec: '钢板 δ=12~20',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'F17': // 立管用耳座
                materials.push({
                    name: '耳座',
                    spec: '钢板 δ=16~25',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '筋板',
                    spec: '钢板 δ=10',
                    quantity: qty * 4,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            default:
                materials.push({
                    name: info.typeName,
                    spec: info.code,
                    quantity: qty,
                    unit: info.unit,
                    standard: 'HG/T 21629-2021',
                    material: 'Q235B'
                });
        }
        
        return materials;
    },

    // G类材料生成
    generateGMaterials(info, qty) {
        const materials = [];
        const code = info.typeCode;
        
        switch(code) {
            case 'G1': // 地面锚板
                materials.push({
                    name: '锚板',
                    spec: '钢板 δ=20~30',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '地脚螺栓',
                    spec: 'M24~M36',
                    quantity: qty * 4,
                    unit: '套',
                    standard: 'GB/T 799',
                    material: 'Q235B'
                });
                break;
                
            case 'G2': // 混凝土锚板(膨胀螺栓)
                materials.push({
                    name: '锚板',
                    spec: '钢板 δ=12~20',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '膨胀螺栓',
                    spec: 'M12~M20',
                    quantity: qty * 4,
                    unit: '套',
                    standard: 'GB/T 22795',
                    material: 'Q235B'
                });
                break;
                
            case 'G4': // 地面上生根的T形架
                materials.push({
                    name: '立柱',
                    spec: '[126×53×5.5',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '横梁',
                    spec: '[100×48×5.3',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '底板',
                    spec: '钢板 δ=20',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '地脚螺栓',
                    spec: 'M20',
                    quantity: qty * 4,
                    unit: '套',
                    standard: 'GB/T 799',
                    material: 'Q235B'
                });
                break;
                
            case 'G11': // 混凝土上生根的悬臂架
                materials.push({
                    name: '槽钢',
                    spec: '[100×48×5.3',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 706',
                    material: 'Q235B'
                });
                materials.push({
                    name: '锚板',
                    spec: '钢板 δ=12',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '膨胀螺栓',
                    spec: 'M16',
                    quantity: qty * 4,
                    unit: '套',
                    standard: 'GB/T 22795',
                    material: 'Q235B'
                });
                break;
                
            default:
                materials.push({
                    name: info.typeName,
                    spec: info.code,
                    quantity: qty,
                    unit: info.unit,
                    standard: 'HG/T 21629-2021',
                    material: 'Q235B'
                });
        }
        
        return materials;
    },

    // H类材料生成
    generateHMaterials(info, qty) {
        const materials = [];
        
        materials.push({
            name: '可调支架本体',
            spec: '组合件',
            quantity: qty,
            unit: '套',
            standard: 'HG/T 21629-2021',
            material: 'Q235B'
        });
        materials.push({
            name: '调节螺栓',
            spec: 'M20~M30',
            quantity: qty,
            unit: '套',
            standard: 'GB/T 5782',
            material: '20#'
        });
        
        return materials;
    },

    // J类材料生成
    generateJMaterials(info, qty) {
        const materials = [];
        const code = info.typeCode;
        
        switch(code) {
            case 'J1': // 焊接式管托
                materials.push({
                    name: '托板',
                    spec: '钢板 δ=6~12',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '筋板',
                    spec: '钢板 δ=6',
                    quantity: qty * 2,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            case 'J2': // 管夹式管托
                materials.push({
                    name: '托板',
                    spec: '钢板 δ=6~10',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: 'U形螺栓',
                    spec: 'M12~M24',
                    quantity: qty * 2,
                    unit: '套',
                    standard: 'GB/T 798',
                    material: '20#'
                });
                break;
                
            case 'J3': // 大管焊接式管托
                materials.push({
                    name: '弧形托板',
                    spec: '钢板 δ=10~16',
                    quantity: qty,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                materials.push({
                    name: '筋板',
                    spec: '钢板 δ=8',
                    quantity: qty * 4,
                    unit: '件',
                    standard: 'GB/T 700',
                    material: 'Q235B'
                });
                break;
                
            default:
                materials.push({
                    name: info.typeName,
                    spec: info.code,
                    quantity: qty,
                    unit: info.unit,
                    standard: 'HG/T 21629-2021',
                    material: 'Q235B'
                });
        }
        
        return materials;
    },

    // K类材料生成
    generateKMaterials(info, qty) {
        const materials = [];
        
        materials.push({
            name: '限位架本体',
            spec: '钢板 δ=10~16',
            quantity: qty,
            unit: '件',
            standard: 'GB/T 700',
            material: 'Q235B'
        });
        materials.push({
            name: '挡块',
            spec: '扁钢 -80×10',
            quantity: qty * 2,
            unit: '件',
            standard: 'GB/T 700',
            material: 'Q235B'
        });
        materials.push({
            name: '固定螺栓',
            spec: 'M16~M24',
            quantity: qty * 4,
            unit: '套',
            standard: 'GB/T 5782',
            material: '20#'
        });
        
        return materials;
    },

    // L类材料生成
    generateLMaterials(info, qty) {
        const materials = [];
        
        materials.push({
            name: '保冷管架本体',
            spec: '组合件',
            quantity: qty,
            unit: '件',
            standard: 'HG/T 21629-2021',
            material: 'Q235B'
        });
        materials.push({
            name: '保冷材料',
            spec: '聚氨酯泡沫/PIR',
            quantity: qty,
            unit: '套',
            standard: 'GB/T 20974',
            material: '聚氨酯'
        });
        
        return materials;
    },

    // Q类材料生成
    generateQMaterials(info, qty) {
        const materials = [];
        
        materials.push({
            name: '加强架本体',
            spec: '扁钢 -100×10',
            quantity: qty,
            unit: '件',
            standard: 'GB/T 700',
            material: 'Q235B'
        });
        materials.push({
            name: 'U形螺栓',
            spec: 'M12~M16',
            quantity: qty * 2,
            unit: '套',
            standard: 'GB/T 798',
            material: '20#'
        });
        
        return materials;
    }
};

// ==================== 导出模块 ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MaterialLibrary,
        SupportTypes,
        SupportCodeParser,
        MaterialListGenerator
    };
}
