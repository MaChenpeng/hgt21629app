/**
 * HG/T21629-2021 管架标准图材料数据库
 * 数据来源: HGT21629管架标准图输入和计算书.xlsm
 * 生成时间: 2026-02-28T01:54:46.671Z
 * 
 * 包含：材质编码映射、管架类型定义、零件清单生成规则、编号解析函数
 */

// ==================== 材质编码映射 ====================
const MaterialCodeMap = {
    "C1": "Q235B",
    "C2": "Q345R",
    "L": "Q345E",
    "S": "06Cr19Ni10",
    "S1": "Q235B+EPDM",
    "A1": "15CrMoR",
    "A2": "12Cr1MoVR"
};

const BoltMaterialMap = {
    "C1": "4.8级/4级",
    "C2": "35CrMo/30CrMo",
    "L": "35CrMo/30CrMo",
    "S": "06Cr19Ni10",
    "A1": "35CrMo/30CrMo",
    "A2": "25Cr2MoV"
};

// ==================== 管架类型定义 ====================
const SupportTypes = {
    "A1": {
        "name": "U型螺栓",
        "drawingNo": "图C.1-1",
        "unit": "套",
        "category": "管架零部件",
        "items": {},
        "type": "materialCodeMap",
        "materialCodes": {
            "C1": {
                "代号": "A1",
                "施工图号": "图C.1-1",
                "名称": "U型螺栓",
                "单位": "套",
                "材质编码": "C1",
                "材质": "Q235B"
            },
            "S": {
                "材质编码": "S",
                "材质": "06Cr19Ni10"
            },
            "S1": {
                "材质编码": "S1",
                "材质": "Q235B+EPDM"
            }
        }
    },
    "A2": {
        "name": "标准型2螺栓管夹",
        "drawingNo": "图C.1-2",
        "unit": "套",
        "category": "管架零部件",
        "items": {},
        "type": "materialCodeMap",
        "materialCodes": {
            "L": {
                "代号": "A2",
                "施工图号": "图C.1-2",
                "名称": "标准型2螺栓管夹",
                "单位": "套",
                "材质编码": "L",
                "钢板材质": "Q345R",
                "螺栓和螺母材质": "35CrMo/30CrMo"
            },
            "C1": {
                "材质编码": "C1",
                "钢板材质": "Q235B",
                "螺栓和螺母材质": "4.8级/4级"
            },
            "C2": {
                "材质编码": "C2",
                "钢板材质": "Q345R",
                "螺栓和螺母材质": "35CrMo/30CrMo"
            },
            "A1": {
                "材质编码": "A1",
                "钢板材质": "15CrMoR",
                "螺栓和螺母材质": "35CrMo/30CrMo"
            },
            "A2": {
                "材质编码": "A2",
                "钢板材质": "12Cr1MoVR",
                "螺栓和螺母材质": "25Cr2MoV"
            },
            "S": {
                "材质编码": "S",
                "钢板材质": "06Cr19Ni10",
                "螺栓和螺母材质": "06Cr19Ni10"
            }
        }
    },
    "A3": {
        "name": "重载型2螺栓管夹",
        "drawingNo": "图C.1-3",
        "unit": "套",
        "category": "管架零部件",
        "items": {},
        "type": "materialCodeMap",
        "materialCodes": {
            "L": {
                "代号": "A3",
                "施工图号": "图C.1-3",
                "名称": "重载型2螺栓管夹",
                "单位": "套",
                "材质编码": "L",
                "钢板材质": "Q345R",
                "螺栓和螺母材质": "35CrMo/30CrMo"
            },
            "C1": {
                "材质编码": "C1",
                "钢板材质": "Q235B",
                "螺栓和螺母材质": "4.8级/4级"
            }
        }
    },
    "A4": {
        "name": "法兰用U型管夹",
        "drawingNo": "图C.1-4",
        "unit": "套",
        "category": "管架零部件",
        "items": {
            "15": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=3",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=3",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "S"
            },
            "25": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 50,
                        "material": 25
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M16x60",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 50,
                        "material": 25
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M16x60",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "A5": {
        "name": "减震用U型管夹",
        "drawingNo": "图C.1-5",
        "unit": "套",
        "category": "管架零部件",
        "items": {
            "15": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 45,
                        "material": 50
                    },
                    {
                        "name": "螺栓",
                        "spec": "M12",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 45,
                        "material": 50
                    },
                    {
                        "name": "螺栓",
                        "spec": "M12",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "25": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 45,
                        "material": 50
                    },
                    {
                        "name": "螺栓",
                        "spec": "M12",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 45,
                        "material": 50
                    },
                    {
                        "name": "螺栓",
                        "spec": "M12",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 45,
                        "material": 50
                    },
                    {
                        "name": "螺栓",
                        "spec": "M12",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 70,
                        "material": 75
                    },
                    {
                        "name": "螺栓",
                        "spec": "M20",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 70,
                        "material": 75
                    },
                    {
                        "name": "螺栓",
                        "spec": "M20",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 70,
                        "material": 75
                    },
                    {
                        "name": "螺栓",
                        "spec": "M20",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 85,
                        "material": 100
                    },
                    {
                        "name": "螺栓",
                        "spec": "M24",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 85,
                        "material": 100
                    },
                    {
                        "name": "螺栓",
                        "spec": "M24",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 85,
                        "material": 100
                    },
                    {
                        "name": "螺栓",
                        "spec": "M24",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 105,
                        "material": 150
                    },
                    {
                        "name": "螺栓",
                        "spec": "M30",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 105,
                        "material": 150
                    },
                    {
                        "name": "螺栓",
                        "spec": "M30",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 105,
                        "material": 150
                    },
                    {
                        "name": "螺栓",
                        "spec": "M30",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 105,
                        "material": 150
                    },
                    {
                        "name": "螺栓",
                        "spec": "M30",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 150,
                        "material": 200
                    },
                    {
                        "name": "螺栓",
                        "spec": "M42",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 150,
                        "material": 200
                    },
                    {
                        "name": "螺栓",
                        "spec": "M42",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 150,
                        "material": 200
                    },
                    {
                        "name": "螺栓",
                        "spec": "M42",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 150,
                        "material": 200
                    },
                    {
                        "name": "螺栓",
                        "spec": "M42",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 150,
                        "material": 200
                    },
                    {
                        "name": "螺栓",
                        "spec": "M42",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "D2": {
        "name": "端焊悬臂架",
        "drawingNo": "图C.4-2",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "G": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "H": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "J": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D3": {
        "name": "侧焊悬臂架",
        "drawingNo": "图C.4-3",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "G": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[25a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D4": {
        "name": "悬臂架（梁上生根）",
        "drawingNo": "图C.4-4",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 100,
                        "material": "m²"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 100,
                        "material": "m²"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D5": {
        "name": "端焊三角架",
        "drawingNo": "图C.4-5",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠160x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠200x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D6": {
        "name": "侧焊三角架",
        "drawingNo": "图C.4-6",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[25a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D7": {
        "name": "L形/倒L形架",
        "drawingNo": "图C.4-7",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D8": {
        "name": "门形/倒门形架（角钢/槽钢）",
        "drawingNo": "图C.4-8",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D9": {
        "name": "半门形/倒半门形架（角钢/槽钢）",
        "drawingNo": "图C.4-9",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D10": {
        "name": "辅助梁",
        "drawingNo": "图C.4-10",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A1": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "A2": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "A3": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "A4": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C1": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C2": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C3": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C4": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "H1": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H148x100x6x9",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "H2": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H194x150x6x9",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "H3": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H244x175x7x11",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "H4": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H294x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D11": {
        "name": "辅助柱",
        "drawingNo": "图C.4-11",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D12": {
        "name": "T形/倒T形架",
        "drawingNo": "图C.4-12",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "G": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D13": {
        "name": "门形/倒门形架（H型钢）",
        "drawingNo": "图C.4-13",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D14": {
        "name": "半门形/倒半门形架（H型钢）",
        "drawingNo": "图C.4-14",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D15": {
        "name": "水平T形架",
        "drawingNo": "图C.4-15",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D16": {
        "name": "水平门型/井形架",
        "drawingNo": "图C.4-16",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D17": {
        "name": "并排双三角架",
        "drawingNo": "图C.4-17",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[8",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠160x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠200x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D18": {
        "name": "双角钢/槽钢悬臂架",
        "drawingNo": "图C.4-18",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "70",
                        "material": "30"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "70",
                        "material": "50"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "70",
                        "material": "50"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "100",
                        "material": "70"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "100",
                        "material": "100"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D19": {
        "name": "双槽钢三角架",
        "drawingNo": "图C.4-19",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "100",
                        "material": "60"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "120",
                        "material": "80"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "150",
                        "material": "100"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[25a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "150",
                        "material": "120"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "D20": {
        "name": "门形架（槽钢与H型钢组合）",
        "drawingNo": "图C.4-20",
        "unit": "件",
        "category": "钢结构生根辅助钢结构",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H00x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[5",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E1": {
        "name": "不保温管的导向架",
        "drawingNo": "图C.5-1",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "0.025",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": "50",
                        "material": "50"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": "50",
                        "material": "60"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": "100",
                        "material": "80"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": "100",
                        "material": "90"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": "150",
                        "material": "100"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E2": {
        "name": "管托的导向架",
        "drawingNo": "图C.5-2",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "0.025",
                        "material": "m²"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "0.05",
                        "material": "m"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "0.075",
                        "material": "m"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "0.01",
                        "material": "m"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E3": {
        "name": "管托的压扣型导向架",
        "drawingNo": "图C.5-3",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "35",
                        "material": "20"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 55,
                        "material": 35
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 80,
                        "material": 55
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 110,
                        "material": 80
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "150",
                        "material": "25"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E4": {
        "name": "结构型导向/限位架",
        "drawingNo": "图C.5-4",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[25a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[28c",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E5": {
        "name": "弹簧支架或可调支架的导向/限位架",
        "drawingNo": "图C.5-5",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E6": {
        "name": "竖管耳轴的导向/限位架",
        "drawingNo": "图C.5-6",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0025,
                        "material": "m²"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": 0.05,
                        "material": "m"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": 0.075,
                        "material": "m"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": 0.1,
                        "material": "m"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E7": {
        "name": "耳轴的压扣型导向/限位架",
        "drawingNo": "图C.5-7",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "35",
                        "material": "20"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 55,
                        "material": 35
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 80,
                        "material": 55
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 110,
                        "material": 80
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "150",
                        "material": "25"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E8": {
        "name": "水平双耳轴的导向架",
        "drawingNo": "图C.5-8",
        "unit": "套",
        "category": "导向架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "0.1",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": 0.16,
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0225,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x6x8",
                        "unit": 0.21,
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0225,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "0.1",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": 0.1,
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "E9": {
        "name": "不保温管的管夹型导向架",
        "drawingNo": "图C.5-9",
        "unit": "套",
        "category": "导向架",
        "items": {
            "150": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "E10": {
        "name": "保温/保冷立管的承重/导向架",
        "drawingNo": "图C.5-10",
        "unit": "套",
        "category": "导向架",
        "items": {
            "1": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "0.00125",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 35,
                        "material": 20
                    },
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "m"
                    }
                ]
            },
            "2": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "0.00125",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 35,
                        "material": 20
                    },
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.1,
                        "material": "m"
                    }
                ]
            },
            "3": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "0",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 35,
                        "material": 20
                    },
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "m"
                    }
                ]
            },
            "4": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "0",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 35,
                        "material": 20
                    },
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.1,
                        "material": "m"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "F2": {
        "name": "弯头的竖直耳轴",
        "drawingNo": "图C.6-2",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0009726464,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00116356625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0013979594,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00168279665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00211448385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00270486665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0035660666,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00421771865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00571173065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00802364985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.368341625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F3": {
        "name": "水平管的竖直耳轴",
        "drawingNo": "图C.6-3",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0009726464,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00116356625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0013979594,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00168279665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00211448385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00270486665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0035660666,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00421771865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00571173065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00802364985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.368341625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F4": {
        "name": "竖直弯头的水平耳轴",
        "drawingNo": "图C.6-4",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F5": {
        "name": "水平弯头的水平耳轴",
        "drawingNo": "图C.6-5",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F6": {
        "name": "立管的耳轴(型1)",
        "drawingNo": "图C.6-6",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F7": {
        "name": "立管的耳轴(型2)",
        "drawingNo": "图C.6-6",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F8": {
        "name": "水平管的水平耳轴(型1)",
        "drawingNo": "图C.6-7",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F9": {
        "name": "水平管的水平耳轴(型2)",
        "drawingNo": "图C.6-7",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0003868794,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00051044625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0006693224,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00087047865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00118786985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00163946465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0023230976,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00285433065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00410342265,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00609286385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.00799193585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01252207665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.02551885065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.04192465985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.063761625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.08857061585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1060768616,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.1374209696,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.172669385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.212264,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.30370394,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 0.35449344,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F10": {
        "name": "小管径立管的耳板",
        "drawingNo": "图C.6-8",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {},
        "type": "materialCodeMap",
        "materialCodes": {
            "A": {
                "代号": "F10",
                "施工图号": "图C.6-8",
                "长度代码": 1,
                "L mm": 100,
                "高度代码": "A",
                "H mm": 50,
                "名称": "六角头螺栓/螺母",
                "规格": "M12x40",
                "单位": "套",
                "材质": "Q345R",
                "数量": 4,
                "材质编码": "L"
            },
            "B": {
                "代号": "F10",
                "长度代码": 2,
                "L mm": 150,
                "高度代码": "B",
                "H mm": 100,
                "名称": "六角头螺栓/螺母",
                "规格": "M12x40",
                "单位": "套",
                "材质": "Q235B",
                "数量": 4,
                "材质编码": "C1"
            },
            "C": {
                "代号": "F10",
                "长度代码": 3,
                "L mm": 200,
                "高度代码": "C",
                "H mm": 150,
                "名称": "六角头螺栓/螺母",
                "规格": "M12x40",
                "单位": "套",
                "材质": "Q345R",
                "数量": 4,
                "材质编码": "C2"
            },
            "D": {
                "代号": "F10",
                "高度代码": "D",
                "H mm": 200,
                "名称": "六角头螺栓/螺母",
                "规格": "M12x40",
                "单位": "套",
                "材质": "15CrMoGR",
                "数量": 4,
                "材质编码": "A1"
            }
        }
    },
    "F11": {
        "name": "立管的L形耳轴(型1)",
        "drawingNo": "图C.6-9",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0009726464,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00116356625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0013979594,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00168279665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00211448385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00270486665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0035660666,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00421771865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00571173065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00802364985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.368341625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F12": {
        "name": "立管的L形耳轴(型2)",
        "drawingNo": "图C.6-9",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0009726464,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00116356625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0013979594,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00168279665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00211448385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00270486665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0035660666,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00421771865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00571173065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00802364985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.368341625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F13": {
        "name": "管的L形耳轴(型1)",
        "drawingNo": "图C.6-10",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0009726464,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00116356625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0013979594,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00168279665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00211448385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00270486665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0035660666,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00421771865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00571173065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00802364985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.368341625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "F14": {
        "name": "管的L形耳轴(型2)",
        "drawingNo": "图C.6-10",
        "unit": "件",
        "category": "耳轴/支腿/耳座",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0009726464,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00116356625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0013979594,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00168279665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00211448385,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00270486665,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0035660666,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00421771865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00571173065,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.00802364985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.01018396985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.01523252465,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.02933143865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 0.04677407585,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.06971114,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 0.09555899985,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 450,
                        "material": 450
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1137122426,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.1460931786,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 550,
                        "material": 550
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 0.18237434,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "950": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1000": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 600,
                        "material": 600
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.223009865,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1050": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1100": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1150": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.316531625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "1200": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "m",
                        "unit": "见材料编码",
                        "material": "A"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 700,
                        "material": 700
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": 0.368341625,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=25",
                        "unit": "m²",
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "G1": {
        "name": "地面锚板",
        "drawingNo": "图C.7-1",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 150,
                        "material": 150
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x120",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 260,
                        "material": 260
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x160",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 360,
                        "material": 360
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x160",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 470,
                        "material": 470
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 570,
                        "material": 570
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 680,
                        "material": 680
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "G": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 780,
                        "material": 780
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "H": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 880,
                        "material": 880
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "J": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 980,
                        "material": 980
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G2": {
        "name": "混凝土锚板(膨胀螺栓)",
        "drawingNo": "图C.7-2",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G3": {
        "name": "混凝土锚板(化学螺栓)",
        "drawingNo": "图C.7-3",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M8x110",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M12x160",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M16x190",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x240",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G4": {
        "name": "地面上生根的T形架",
        "drawingNo": "图C.7-4",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 150,
                        "material": 150
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M8x120",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=14",
                        "unit": 210,
                        "material": 210
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M12x160",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=18",
                        "unit": 260,
                        "material": 260
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M16x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=18",
                        "unit": 260,
                        "material": 260
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M16x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "G": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G5": {
        "name": "地面上生根的门形架",
        "drawingNo": "图C.7-5",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 150,
                        "material": 150
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M8x120",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=14",
                        "unit": 210,
                        "material": 210
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M12x160",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=18",
                        "unit": 260,
                        "material": 260
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M16x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=18",
                        "unit": 260,
                        "material": 260
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M16x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "G": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G6": {
        "name": "地面上生根的门形架(组合)",
        "drawingNo": "图C.7-6",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[5",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=18",
                        "unit": 260,
                        "material": 260
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M16x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H200x200x8x12",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 400,
                        "material": 400
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H250x250x9x14",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=22",
                        "unit": 500,
                        "material": 500
                    },
                    {
                        "name": "化学锚栓",
                        "spec": "M20x220",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G11": {
        "name": "混凝土上生根的悬臂架",
        "drawingNo": "图C.7-11",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G12": {
        "name": "混凝土上生根的三角架",
        "drawingNo": "图C.7-11",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[25a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G13": {
        "name": "混凝土上生根的L形/倒L形架",
        "drawingNo": "图C.7-13",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G14": {
        "name": "混凝土上生根的门形/倒门形架",
        "drawingNo": "图C.7-14",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G15": {
        "name": "混凝土上生根的水平T形架",
        "drawingNo": "图C.7-15",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G16": {
        "name": "混凝土上生根的水平门形架",
        "drawingNo": "图C.7-16",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "G17": {
        "name": "混凝土上生根的水平井形架",
        "drawingNo": "图C.7-17",
        "unit": "件",
        "category": "地面/混凝土生根支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M20x180",
                        "unit": 2,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "H1": {
        "name": "可调支架",
        "drawingNo": "图C.8-1",
        "unit": "套",
        "category": "可调支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN100",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M36x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 150,
                        "material": 0.0176625
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 160,
                        "material": 0.020096
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 95,
                        "material": 0.007084625
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 80,
                        "material": 0.005024
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 110,
                        "material": 150
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 40,
                        "material": 0.001256
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN150",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M42x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 200,
                        "material": 0.0314
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 220,
                        "material": 0.037994
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 145,
                        "material": 0.016504625
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": 0.005024
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 140,
                        "material": 150
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 40,
                        "material": 0.001256
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN200",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M48x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 250,
                        "material": 0.0490625
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 270,
                        "material": 0.0572265
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 195,
                        "material": 0.029849625
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 120,
                        "material": 0.005024
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 150,
                        "material": 150
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 50,
                        "material": 0.0019625
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN250",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M56x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 300,
                        "material": 0.07065
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 320,
                        "material": 0.080384
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 245,
                        "material": 0.047119625
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 150,
                        "material": 0.005024
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 160,
                        "material": 150
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 50,
                        "material": 0.0019625
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "H2": {
        "name": "短可调支架",
        "drawingNo": "图C.8-2",
        "unit": "套",
        "category": "可调支架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN100",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M36x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 200,
                        "material": 200
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 150,
                        "material": 0.0176625
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 160,
                        "material": 0.020096
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 80,
                        "material": 0.005024
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN150",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M42x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 250,
                        "material": 250
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 200,
                        "material": 0.0314
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 220,
                        "material": 0.037994
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": 0.005024
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN200",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M48x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=16",
                        "unit": 300,
                        "material": 300
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 250,
                        "material": 0.0490625
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 270,
                        "material": 0.0572265
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 120,
                        "material": 0.005024
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "结构用无缝钢管",
                        "spec": "DN250",
                        "unit": "m",
                        "material": "Q235B"
                    },
                    {
                        "name": "全螺纹螺柱/六角螺母",
                        "spec": "M56x150",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=20",
                        "unit": 350,
                        "material": 350
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 300,
                        "material": 0.07065
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=30",
                        "unit": 320,
                        "material": 0.080384
                    },
                    {
                        "name": "PTFE滑板",
                        "spec": "δ=6",
                        "unit": 150,
                        "material": 0.005024
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "J1": {
        "name": "焊接式管托",
        "drawingNo": "图C.9-1",
        "unit": "件",
        "category": "管托",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345E"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345R"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "15CrMoR"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "12Cr1MoVR"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "06Cr19Ni10"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 250,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 300,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 350,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 350,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 350,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 400,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 450,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "J2": {
        "name": "管夹式管托",
        "drawingNo": "图C.9-2",
        "unit": "件",
        "category": "管托",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345E"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345R"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "15CrMoR"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "12Cr1MoVR"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "06Cr19Ni10"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 120,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 150,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 180,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 220,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 250,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 280,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 300,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 330,
                        "material": "m²"
                    },
                    {
                        "name": "标准型2螺栓管夹",
                        "spec": "A2",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "J13": {
        "name": "带垫板的焊接式管托",
        "drawingNo": "图C.9-1",
        "unit": "件",
        "category": "管托",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345E"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 10.676,
                        "material": "m²"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 14.13,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345R"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 18.0026666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "15CrMoR"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 22.294,
                        "material": "m²"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "12Cr1MoVR"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 28.1553333333333,
                        "material": "m²"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "06Cr19Ni10"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 35.2726666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 44.3786666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 50.554,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 63.114,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 100,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 79.6513333333333,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 93.0486666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 119.634,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 146.219333333333,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 125,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 176.154,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": 229.324666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 200,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 285.74,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 250,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 344.667333333333,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 300,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 372.194666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 350,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 425.365333333333,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 350,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": 478.326666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 350,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 531.706666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 400,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 585.086666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": "m²",
                        "material": "Q235B"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=12",
                        "unit": 450,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 638.466666666667,
                        "material": "m²"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "K1": {
        "name": "不保温管限位架",
        "drawingNo": "图C.10-1",
        "unit": "套",
        "category": "限位架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "0.2",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m",
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": 0.32,
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.045,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x6x8",
                        "unit": 0.42,
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.08,
                        "material": "m²"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "K2": {
        "name": "绝热管限位架",
        "drawingNo": "图C.10-2",
        "unit": "套",
        "category": "限位架",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "0.2",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H100x100x6x8",
                        "unit": "0.2",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x6x8",
                        "unit": "0.2",
                        "material": "m"
                    },
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "Q1": {
        "name": "大管支撑小管支架(型1)",
        "drawingNo": "图C.15-1",
        "unit": "件",
        "category": "大管支撑小管",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "Q2": {
        "name": "大管支撑小管支架(型2)",
        "drawingNo": "图C.15-2",
        "unit": "件",
        "category": "大管支撑小管",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "Q3": {
        "name": "小支管加强架(型1)",
        "drawingNo": "图C.15-3",
        "unit": "件",
        "category": "大管支撑小管",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "Q4": {
        "name": "小支管加强架(型2)",
        "drawingNo": "图C.15-4",
        "unit": "件",
        "category": "大管支撑小管",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "Q5": {
        "name": "小支管加强架(型3)",
        "drawingNo": "图C.15-5",
        "unit": "件",
        "category": "大管支撑小管",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[12.6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "Q6": {
        "name": "小支管加强架(型4)",
        "drawingNo": "图C.15-6",
        "unit": "件",
        "category": "大管支撑小管",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "Q7": {
        "name": "小支管加强架(型5)",
        "drawingNo": "图C.15-6",
        "unit": "件",
        "category": "大管支撑小管",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "D": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[16a",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "E": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "H125x125x6.5x9",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            },
            "F": {
                "materials": [
                    {
                        "name": "H型钢",
                        "spec": "H150x150x7x10",
                        "unit": "m",
                        "material": "Q235B"
                    }
                ]
            }
        },
        "type": "subItem"
    },
    "U1": {
        "name": "U型螺栓",
        "drawingNo": "图C.19-1",
        "unit": "套",
        "category": "U型螺栓及连接件",
        "items": {},
        "type": "materialCodeMap",
        "materialCodes": {
            "C1": {
                "代号": "U1",
                "施工图号": "图C.19-1",
                "名称": "U型螺栓",
                "单位": "套",
                "材质编码": "C1",
                "材质": "Q235B"
            },
            "S": {
                "材质编码": "S",
                "材质": "06Cr19Ni10"
            },
            "S1": {
                "材质编码": "S1",
                "材质": "Q235B+EPDM"
            }
        }
    },
    "U2": {
        "name": "U型螺栓短连接件",
        "drawingNo": "图C.19-2",
        "unit": "套",
        "category": "U型螺栓及连接件",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "C1",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "8": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S",
                        "material": "06Cr19Ni10"
                    }
                ],
                "materialCode": "S"
            },
            "10": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S1",
                        "material": "Q235B+EPDM"
                    }
                ],
                "materialCode": "S1"
            },
            "15": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.085,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "25": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.09,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.11,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.12,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.13,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.15,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.18,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.21,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 0.24,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": 0.28,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": 0.33,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": 0.39,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.47,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.5,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.55,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.61,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.68,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.72,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.78,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.83,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.88,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.93,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 0.98,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 1.04,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 1.08,
                        "material": "m"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "U3": {
        "name": "U型螺栓长连接件",
        "drawingNo": "图C.19-2",
        "unit": "套",
        "category": "U型螺栓及连接件",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "C1",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "8": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S",
                        "material": "06Cr19Ni10"
                    }
                ],
                "materialCode": "S"
            },
            "10": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S1",
                        "material": "Q235B+EPDM"
                    }
                ],
                "materialCode": "S1"
            },
            "15": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "25": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.0015,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.005,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.005,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.005,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.005,
                        "material": "m²"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "U4": {
        "name": "U型螺栓带锚固连接件",
        "drawingNo": "图C.19-4",
        "unit": "套",
        "category": "U型螺栓及连接件",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "C1",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "8": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S",
                        "material": "06Cr19Ni10"
                    }
                ],
                "materialCode": "S"
            },
            "10": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S1",
                        "material": "Q235B+EPDM"
                    }
                ],
                "materialCode": "S1"
            },
            "15": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "25": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠50x6",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠75x7",
                        "unit": 75,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": 100,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": 100,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": 100,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠100x10",
                        "unit": 100,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 100,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠125x10",
                        "unit": 100,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "角钢",
                        "spec": "∠160x12",
                        "unit": 125,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "U5": {
        "name": "U型螺栓槽钢连接件",
        "drawingNo": "图C.19-5",
        "unit": "套",
        "category": "U型螺栓及连接件",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "C1",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "8": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S",
                        "material": "06Cr19Ni10"
                    }
                ],
                "materialCode": "S"
            },
            "10": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "S1",
                        "material": "Q235B+EPDM"
                    }
                ],
                "materialCode": "S1"
            },
            "15": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.08,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.085,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "25": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.09,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.11,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[10",
                        "unit": 0.12,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M8x80",
                        "unit": 1,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": 0.13,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": 0.15,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": 0.18,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": 0.21,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": 0.24,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[14a",
                        "unit": 0.28,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M12x120",
                        "unit": 2,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": 0.33,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 3,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": 0.39,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 3,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": 0.47,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 3,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": 0.5,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 3,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "槽钢",
                        "spec": "[20a",
                        "unit": 0.55,
                        "material": "m"
                    },
                    {
                        "name": "膨胀锚栓",
                        "spec": "M16x140",
                        "unit": 3,
                        "material": "套"
                    },
                    {
                        "name": "U型螺栓",
                        "spec": "套",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "U6": {
        "name": "法兰用U型管夹",
        "drawingNo": "图C.19-6",
        "unit": "套",
        "category": "U型螺栓及连接件",
        "items": {
            "15": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=3",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=3",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "S"
            },
            "25": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 40,
                        "material": 20
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x50",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 50,
                        "material": 25
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M16x60",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "扁钢",
                        "spec": "δ=6",
                        "unit": 50,
                        "material": 25
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M16x60",
                        "unit": 2,
                        "material": "套"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "Y1": {
        "name": "不锈钢超薄垫板",
        "drawingNo": "图C.23-1",
        "unit": "件",
        "category": "其他附件",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 20,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "8": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 20,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 20,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "15": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 20,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "20": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 25,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "25": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 30,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "32": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 40,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 45,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 60,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=1",
                        "unit": 70,
                        "material": 40
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 90,
                        "material": 50
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 100,
                        "material": 50
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 120,
                        "material": 50
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 150,
                        "material": 50
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 200,
                        "material": 70
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 200,
                        "material": 70
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 250,
                        "material": 70
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 250,
                        "material": 70
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 100
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 100
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 100
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 100
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 100
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 150
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 150
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 150
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 150
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 150
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=2",
                        "unit": 300,
                        "material": 150
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "Y2": {
        "name": "防振管夹垫板",
        "drawingNo": "图C.23-2",
        "unit": "件",
        "category": "其他附件",
        "items": {
            "6": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345E"
                    }
                ],
                "materialCode": "L"
            },
            "8": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "10": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q345R"
                    }
                ],
                "materialCode": "C2"
            },
            "15": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "15CrMoR"
                    }
                ],
                "materialCode": "A1"
            },
            "20": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "12Cr1MoVR"
                    }
                ],
                "materialCode": "A2"
            },
            "25": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "06Cr19Ni10"
                    }
                ],
                "materialCode": "S"
            },
            "32": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "40": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "50": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "65": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "80": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "100": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "125": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "150": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "200": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=6",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "250": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "300": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "350": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "400": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "450": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=8",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "500": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "550": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "600": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "650": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "700": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "750": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "800": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "850": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            },
            "900": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": "m²",
                        "material": "Q235B"
                    }
                ],
                "materialCode": "C1"
            }
        },
        "type": "byDN"
    },
    "Y4": {
        "name": "管夹加长连接板",
        "drawingNo": "图C.23-4",
        "unit": "件",
        "category": "其他附件",
        "items": {
            "A": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.04,
                        "material": "m²"
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x100",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "B": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.09,
                        "material": "m²"
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x100",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            },
            "C": {
                "materials": [
                    {
                        "name": "钢板",
                        "spec": "δ=10",
                        "unit": 0.16,
                        "material": "m²"
                    },
                    {
                        "name": "六角头螺栓/螺母",
                        "spec": "M12x100",
                        "unit": 4,
                        "material": "套"
                    }
                ]
            }
        },
        "type": "subItem"
    }
};

// ==================== 辅助函数 ====================
function getMaterial(materialCode) {
    return MaterialCodeMap[materialCode] || 'Q235B';
}

function getBoltMaterial(materialCode) {
    return BoltMaterialMap[materialCode] || '4.8级/4级';
}

﻿// ==================== 材料清单生成器 ====================
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
        const params = supportInfo.params || [];
        
        const supportType = SupportTypes[code];
        if (!supportType) {
            return this.generateGenericMaterials(supportInfo, quantity);
        }
        
        // 根据类型生成材料
        if (supportType.type === 'materialCodeMap') {
            // 材质编码映射类型（A1, A2等）
            const materialCode = params[params.length - 1] || 'C1';
            const matData = supportType.materialCodes[materialCode];
            
            if (matData) {
                materials.push({
                    name: supportType.name,
                    spec: code,
                    quantity: quantity,
                    unit: supportType.unit,
                    standard: 'HG/T 21629-2021',
                    material: matData['钢板材质'] || matData['材质'] || 'Q235B'
                });
            }
        }
        else if (supportType.type === 'subItem') {
            // 子项配置类型（D2-D20等）
            materials.push(...this.generateSubItemMaterials(code, params, quantity, supportType));
        }
        else if (supportType.type === 'byDN') {
            // 管径相关类型（A4, A5, F2, J1, J2等）
            materials.push(...this.generateByDNMaterials(code, params, quantity, supportType));
        }
        
        if (materials.length === 0) {
            return this.generateGenericMaterials(supportInfo, quantity);
        }
        
        return materials;
    },
    
    /**
     * 生成子项类型（D类）的材料清单
     */
    generateSubItemMaterials(typeCode, params, quantity, supportType) {
        const materials = [];
        
        // 查找匹配的子项
        let subItem = null;
        let itemData = null;
        
        for (let i = params.length - 1; i >= 0; i--) {
            if (supportType.items[params[i]]) {
                subItem = params[i];
                itemData = supportType.items[params[i]];
                break;
            }
        }
        
        // 如果没找到，使用默认值
        if (!itemData) {
            subItem = 'A';
            itemData = supportType.items[subItem];
        }
        
        if (!itemData || !itemData.materials) {
            return materials;
        }
        
        // 提取各种参数
        const extractedParams = this.extractParams(typeCode, params);
        
        // 根据支吊架类型应用不同的计算规则
        const calcRules = this.getCalculationRules(typeCode);
        
        itemData.materials.forEach((mat, index) => {
            let matQuantity = quantity;
            
            // 根据材料类型和计算规则计算数量
            if (mat.unit === 'm') {
                // 型钢按长度计算
                const lengthM = this.calculateSteelLength(typeCode, mat, index, extractedParams, calcRules, quantity);
                matQuantity = lengthM;
            } else if (mat.unit === 'm²') {
                // 钢板按面积计算
                const area = this.calculatePlateArea(typeCode, mat, index, extractedParams, calcRules, quantity);
                matQuantity = area;
            }
            
            materials.push({
                name: mat.name,
                spec: mat.spec,
                quantity: matQuantity,
                unit: mat.unit,
                standard: 'HG/T 21629-2021',
                material: mat.material
            });
        });
        
        return materials;
    },
    
    /**
     * 生成byDN类型（A4, A5, F2, J1, J2等）的材料清单
     */
    generateByDNMaterials(typeCode, params, quantity, supportType) {
        const materials = [];
        const dn = params[0] || '50';
        const itemData = supportType.items[dn];
        
        if (!itemData || !itemData.materials) {
            return materials;
        }
        
        // 提取参数
        const extractedParams = this.extractParams(typeCode, params);
        
        itemData.materials.forEach(mat => {
            let matQuantity = quantity;
            
            // 如果单位是米(m)且能提取到长度参数，计算实际长度
            if (mat.unit === 'm' && extractedParams.lengthMm > 0) {
                matQuantity = (extractedParams.lengthMm / 1000) * quantity;
            }
            
            materials.push({
                name: mat.name,
                spec: mat.spec,
                quantity: matQuantity,
                unit: mat.unit,
                standard: 'HG/T 21629-2021',
                material: mat.material
            });
        });
        
        return materials;
    },
    
    /**
     * 提取支吊架编号中的各种参数
     */
    extractParams(typeCode, params) {
        const result = {
            lengthMm: 0,      // 长度（mm）
            heightMm: 0,      // 高度（mm）
            dn: 0,            // 管径（mm）
            plateSize: null   // 筋板尺寸 {height, width}
        };
        
        if (!params || params.length === 0) return result;
        
        // 根据类型提取参数
        switch (typeCode) {
            case 'D2':
                // D2-子项-长度-筋板高x宽
                // params: [子项, 长度, 筋板高x宽]
                if (params[1]) result.lengthMm = this.parseNumber(params[1]);
                if (params[2]) result.plateSize = this.parsePlateSize(params[2]);
                break;
                
            case 'D4':
                // D4-序列-载荷-管径-长度
                // params: [序列, 载荷, 管径, 长度]
                if (params[2]) result.dn = this.parseNumber(params[2]);
                if (params[3]) result.lengthMm = this.parseNumber(params[3]);
                break;
                
            case 'D5':
                // D5-序列-子项-管径-长度-高度-筋板高x宽
                // params: [序列, 子项, 管径, 长度, 高度, 筋板高x宽]
                if (params[2]) result.dn = this.parseNumber(params[2]);
                if (params[3]) result.lengthMm = this.parseNumber(params[3]);
                if (params[4]) result.heightMm = this.parseNumber(params[4]);
                if (params[5]) result.plateSize = this.parsePlateSize(params[5]);
                break;
                
            case 'D7':
            case 'D8':
            case 'D9':
                // D7/D8/D9-序列-子项-高度-长度
                // params: [序列, 子项, 高度, 长度]
                if (params[2]) result.heightMm = this.parseNumber(params[2]);
                if (params[3]) result.lengthMm = this.parseNumber(params[3]);
                break;
                
            case 'D12':
            case 'D13':
            case 'D14':
                // D12/D13/D14-序列-子项-高度-长度
                // params: [序列, 子项, 高度, 长度]
                if (params[2]) result.heightMm = this.parseNumber(params[2]);
                if (params[3]) result.lengthMm = this.parseNumber(params[3]);
                break;
                
            case 'D15':
            case 'D16':
                // D15/D16-序列-子项-长度-宽度
                // params: [序列, 子项, 长度, 宽度]
                if (params[2]) result.lengthMm = this.parseNumber(params[2]);
                if (params[3]) result.heightMm = this.parseNumber(params[3]); // 宽度作为高度使用
                break;
                
            case 'D17':
            case 'D19':
                // D17/D19-序列-子项-高度-长度
                // params: [序列, 子项, 高度, 长度]
                if (params[2]) result.heightMm = this.parseNumber(params[2]);
                if (params[3]) result.lengthMm = this.parseNumber(params[3]);
                break;
                
            case 'D18':
                // D18-序列-载荷-管径-长度
                // params: [序列, 载荷, 管径, 长度]
                if (params[2]) result.dn = this.parseNumber(params[2]);
                if (params[3]) result.lengthMm = this.parseNumber(params[3]);
                break;
                
            case 'D20':
                // D20-序列-子项-高度-长度
                // params: [序列, 子项, 高度, 长度]
                if (params[2]) result.heightMm = this.parseNumber(params[2]);
                if (params[3]) result.lengthMm = this.parseNumber(params[3]);
                break;
                
            case 'J1':
            case 'J2':
                // J1/J2-管径-高度-长度-材料
                // params: [管径, 高度, 长度, 材料]
                if (params[0]) result.dn = this.parseNumber(params[0]);
                if (params[1]) result.heightMm = this.parseNumber(params[1]);
                if (params[2]) result.lengthMm = this.parseNumber(params[2]);
                break;
                
            case 'G4':
            case 'G5':
            case 'G6':
            case 'G11':
            case 'G12':
            case 'G13':
            case 'G14':
            case 'G15':
            case 'G16':
            case 'G17':
                // G类-序列-子项-长度
                // params: [序列, 子项, 长度]
                if (params[2]) result.lengthMm = this.parseNumber(params[2]);
                break;
        }
        
        return result;
    },
    
    /**
     * 解析数字，处理逗号作为小数点的情况
     */
    parseNumber(value) {
        if (value === undefined || value === null) return 0;
        const str = String(value).replace(',', '.');
        const num = parseFloat(str);
        return isNaN(num) ? 0 : num;
    },
    
    /**
     * 解析筋板尺寸（格式："高x宽"或"高X宽"）
     */
    parsePlateSize(value) {
        if (!value) return null;
        const str = String(value);
        const match = str.match(/(\d+(?:[.,]\d+)?)\s*[xX]\s*(\d+(?:[.,]\d+)?)/);
        if (match) {
            return {
                height: this.parseNumber(match[1]),
                width: this.parseNumber(match[2])
            };
        }
        return null;
    },
    
    /**
     * 获取计算规则
     */
    getCalculationRules(typeCode) {
        // 定义不同支吊架类型的材料计算规则
        const rules = {
            // D2: 端焊悬臂架
            // 材料1: 角钢/槽钢/H型钢 - 按长度计算
            // 材料2: 钢板 - 按筋板尺寸计算面积
            'D2': {
                steelCalculation: 'length',  // 按长度计算
                plateCalculation: 'plate_size'  // 按筋板尺寸计算
            },
            
            // D4: 悬臂架（梁上生根）
            // 材料1: 角钢/槽钢 - 按长度计算
            'D4': {
                steelCalculation: 'length'
            },
            
            // D5: 端焊三角架
            // 材料1: H型钢（横梁）- 按长度计算
            // 材料2: 角钢（斜撑）- 按勾股定理计算 sqrt((DN/1000)^2 + (DN/1000)^2)
            // 材料3: 钢板（筋板）- 按筋板尺寸计算面积
            'D5': {
                steelCalculation: 'mixed',  // 混合计算
                hasDiagonal: true,  // 有斜撑
                plateCalculation: 'plate_size'
            },
            
            // D7-D9: L形/门形/半门形架
            // 材料按长度或高度计算
            'D7': { steelCalculation: 'length_or_height' },
            'D8': { steelCalculation: 'length_or_height' },
            'D9': { steelCalculation: 'length_or_height' },
            
            // D12-D14: T形/门形/半门形架（H型钢）
            'D12': { steelCalculation: 'length' },
            'D13': { steelCalculation: 'length' },
            'D14': { steelCalculation: 'length' },
            
            // 默认规则
            'default': {
                steelCalculation: 'length'
            }
        };
        
        return rules[typeCode] || rules['default'];
    },
    
    /**
     * 计算型钢长度（单位：m）
     */
    calculateSteelLength(typeCode, mat, matIndex, params, rules, quantity) {
        const calcType = rules.steelCalculation;
        
        switch (calcType) {
            case 'length':
                // 单纯按长度计算
                if (params.lengthMm > 0) {
                    return (params.lengthMm / 1000) * quantity;
                }
                break;
                
            case 'mixed':
                // 混合计算（如D5三角架）
                if (typeCode === 'D5') {
                    if (matIndex === 0) {
                        // 材料1: H型钢（横梁）- 按长度计算
                        if (params.lengthMm > 0) {
                            return (params.lengthMm / 1000) * quantity;
                        }
                    } else if (matIndex === 1) {
                        // 材料2: 角钢（斜撑）- 按勾股定理计算
                        // 公式: sqrt((DN/1000)^2 + (DN/1000)^2) * 数量
                        // 简化: sqrt(2) * (DN/1000) * 数量
                        if (params.dn > 0) {
                            const diagonalLength = Math.sqrt(2) * (params.dn / 1000);
                            return diagonalLength * quantity;
                        }
                    }
                }
                break;
                
            case 'length_or_height':
                // 按长度或高度计算（取适用的）
                if (params.lengthMm > 0) {
                    return (params.lengthMm / 1000) * quantity;
                } else if (params.heightMm > 0) {
                    return (params.heightMm / 1000) * quantity;
                }
                break;
                
            default:
                // 默认按长度计算
                if (params.lengthMm > 0) {
                    return (params.lengthMm / 1000) * quantity;
                }
        }
        
        return quantity;
    },
    
    /**
     * 计算钢板面积（单位：m²）
     */
    calculatePlateArea(typeCode, mat, matIndex, params, rules, quantity) {
        const calcType = rules.plateCalculation;
        
        switch (calcType) {
            case 'plate_size':
                // 按筋板尺寸计算
                // 公式: (高/1000) * (宽/1000) * 数量
                if (params.plateSize) {
                    const heightM = params.plateSize.height / 1000;
                    const widthM = params.plateSize.width / 1000;
                    return heightM * widthM * quantity;
                }
                break;
                
            case 'dn_based':
                // 基于管径计算（如D5的斜撑面积）
                if (params.dn > 0) {
                    // 简化计算，实际可能需要更复杂的公式
                    const sideM = params.dn / 1000;
                    return sideM * sideM * quantity;
                }
                break;
        }
        
        return quantity;
    },
    
    generateGenericMaterials(info, qty) {
        return [{
            name: info.typeName || info.code,
            spec: info.code,
            quantity: qty,
            unit: info.unit || '套',
            standard: 'HG/T 21629-2021',
            material: 'Q235B'
        }];
    }
};
// ==================== 管架编号解析器 ====================
const SupportCodeParser = {
    /**
     * 解析管架编号
     * @param {string} code - 管架编号，如 "D4-1-A-100-200" 或 "A2-2\"-C1"
     * @returns {Object} 解析结果
     */
    parse(code) {
        if (!code || typeof code !== 'string') {
            return { valid: false, error: '编号为空' };
        }

        const originalCode = code.trim();
        code = originalCode.toUpperCase();
        
        // 处理带引号的管径（如 2"）
        code = code.replace(/"/g, '\"');
        
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
        if (!this.getCategoryName(category)) {
            return { valid: false, error: `未知类别: ${category}` };
        }

        // 检查型号是否存在
        const typeInfo = SupportTypes[typeCode];
        if (!typeInfo) {
            return { valid: false, error: `未知型号: ${typeCode}` };
        }

        return {
            valid: true,
            code: originalCode,
            category: category,
            categoryName: this.getCategoryName(category),
            typeCode: typeCode,
            typeName: typeInfo.name,
            params: params,
            unit: typeInfo.unit,
            category2: typeInfo.category
        };
    },

    getCategoryName(category) {
        const categories = {
            'A': '管架零部件',
            'B': '刚性吊架',
            'C': '弹簧支吊架',
            'D': '钢结构生根辅助钢结构',
            'E': '导向架',
            'F': '耳轴/支腿/耳座',
            'G': '地面/混凝土生根支架',
            'H': '可调支架',
            'J': '管托',
            'K': '限位架',
            'L': '保冷管架',
            'Q': '大管支撑小管/小支管加强架',
            'U': 'U型螺栓及连接件',
            'Y': '其他附件'
        };
        return categories[category];
    }
};

// ==================== 导出模块 ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MaterialCodeMap,
        BoltMaterialMap,
        SupportTypes,
        SupportCodeParser,
        MaterialListGenerator,
        getMaterial,
        getBoltMaterial
    };
}
