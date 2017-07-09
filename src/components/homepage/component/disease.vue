<template>
<div>
    <i-table height="500" :columns="columns" :data="data" size="small" v-ref:table></i-table>
    <br>
    <Row>
        <i-col span="8"><i-button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</i-button></i-col>
        <i-col span="8"><i-button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</i-button></i-col>
        <i-col span="8"><i-button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</i-button></i-col>
    </Row>
</div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        "title": "癌变种类",
                        "key": "desc",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: '腺癌',
                                value: 1
                            },
                            {
                                label: '鳞癌',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.desc == '腺癌';
                            } else if (value === 2) {
                                return row.desc == '鳞癌';
                            }
                        }
                    },
                    {
                        "title": "癌变位置",
                        "key": "location",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: '左肺上叶',
                                value: 1
                            },
                            {
                                label: '右肺中叶',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.location == '左肺上叶';
                            } else if (value === 2) {
                                return row.location == '右肺中叶';
                            }
                        }
                    },                    
                    {
                        "title": "CT",
                        "key": "CT",
                        "width": 100,
                        "sortable": true,
                        filters: [
                            {
                                label: '有',
                                value: 1
                            },
                            {
                                label: '无',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.CT == '有';
                            } else if (value === 2) {
                                return row.CT == '无';
                            }
                        }
                    },
                    {
                        "title": "姓名",
                        "key": "name",
                        // "fixed": "left",
                        "width": 100
                    },
                    {
                        "title": "性别",
                        "key": "sex",
                        "width": 150,
                        "sortable": true
                    },                  
                    
                    {
                        "title": "电导率(癌症)",
                        "key": "elecde",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "电导率(正常)",
                        "key": "elecnor",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "激活",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7日留存",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30日留存",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "次日留存",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "日活跃",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "周活跃",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "月活跃",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data: [
                    {
                    	"desc": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563,
                        "elecde": "333",
                        "elecnor": "444",
                        "fav": 0,                        
                        "weak": 5627,                        
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610                      
                    },
                    {
                    	"desc": "鳞癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563,    
                        "elecde": "333",
                        "elecnor": "444",                	
                        "fav": 0,                        
                        "weak": 4086,                        
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537,
                        
                        
                    },
                    {
                    	"desc": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563,    
                        "elecde": "333",
                        "elecnor": "444",                  
                        "fav": 0,
                        "show": '兔',
                        "weak": 8007,                       
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588,                       
                    },
                    {
                    	"desc": "腺癌",
                    	"location": "右肺中叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563,  
                        "elecde": "333",
                        "elecnor": "444",                      
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,                        
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,                        
                    },
                    {
                    	"desc": "鳞癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '无',
                        "sex": 1563, 
                        "elecde": "333",
                        "elecnor": "444",                       
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,                        
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                    	"desc": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563,    
                        "elecde": "333",
                        "elecnor": "444",                    
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,                        
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                    	"desc": "腺癌",
                    	"location": "右肺中叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563, 
                        "elecde": "333",
                        "elecnor": "444",                       
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,                        
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                    	"desc": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563,   
                        "elecde": "333",
                        "elecnor": "444",                     
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,                        
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                    	"desc": "腺癌",
                    	"location": "右肺中叶",
                        "name": "推广名称1",
                        "CT": '无',
                        "sex": 1563,   
                        "elecde": "333",
                        "elecnor": "444",                     
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,                        
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                    	"desc": "鳞癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": 1563,   
                        "elecde": "333",
                        "elecnor": "444",                     
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,                        
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: '自定义数据',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }     
        }
    }
</script>

<style type="text/css">


</style>