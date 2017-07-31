<template>
<div>
    <i-table height="500" :columns="columns" :data="data" size="small" v-ref:table border></i-table>
    <br>
    <Row class="databtn">
        <i-col span="8"><i-button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</i-button></i-col>
        <i-col span="8"><i-button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</i-button></i-col>
        <!-- <i-col span="8"><i-button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</i-button></i-col> -->
    </Row>
</div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                	{
                		"title": "序号",
                        "type": "index",
                        "width": 60,
                        "align": "center"
                    },
                    {
                        "title": "癌变种类",
                        "key": "type",
                        "width": 150,
                        "align": "center",
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
                                return row.type == '腺癌';
                            } else if (value === 2) {
                                return row.type == '鳞癌';
                            }
                        }
                    },
                    {
                        "title": "癌变位置",
                        "key": "location",
                        "width": 150,
                        "align": "center",
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
                        "align": "center",
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
                        "align": "center",
                        "width": 100
                    },
                    {
                        "title": "性别",
                        "key": "sex",
                        "width": 100,
                        "align": "center",
                        "sortable": true,
                        filters: [
                            {
                                label: '男',
                                value: 1
                            },
                            {
                                label: '女',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.sex == '男';
                            } else if (value === 2) {
                                return row.sex == '女';
                            }
                        }
                    },                  
                    
                    {
                        "title": "电导率(癌症)",
                        "key": "elecdisease",
                        "width": 150,
                        "align": "center",
                        "sortable": true
                    },
                    {
                        "title": "电导率(正常)",
                        "key": "elecnormal",
                        "width": 150,
                        "align": "center",
                        "sortable": true
                    },
                    {
                        "title": "备注",
                        "key": "extra",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "癌症实部",
                        "key": "disreal",
                        "width": 600,
                        "sortable": true
                    },
                    {
                        "title": "癌症虚部",
                        "key": "disimag",
                        "width": 600,
                        "sortable": true
                    },
                    {
                        "title": "正常实部",
                        "key": "norreal",
                        "width": 600,
                        "sortable": true
                    },
                    {
                        "title": "正常虚部",
                        "key": "norimag",
                        "width": 600,
                        "sortable": true
                    },
                    {
                        "title": "癌症-正常实部",
                        "key": "diffreal",
                        "width": 600,
                        "sortable": true
                    },
                    {
                        "title": "癌症-正常虚部",
                        "key": "diffimag",
                        "width": 600,
                        "sortable": true
                    }
                ],
                data: [
                    {
                    	"type": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "男",
                        "elecdisease": "333",
                        "elecnormal": "444",
                        "extra": "计算",                                               
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,                   
                    },
                    {
                    	"type": "鳞癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "女",    
                        "elecdisease": "333",
                        "elecnormal": "444",                	
                        "extra": "计算",                                                
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,                                                  
                    },
                    {
                    	"type": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "男",    
                        "elecdisease": "333",
                        "elecnormal": "444",                  
                        "extra": "仅正常",
                        "show": '兔',                      
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,                         
                    },
                    {
                    	"type": "腺癌",
                    	"location": "右肺中叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "男",  
                        "elecdisease": "333",
                        "elecnormal": "444",                      
                        "extra": "混合在一起",                        
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,                          
                    },
                    {
                    	"type": "鳞癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '无',
                        "sex": "男", 
                        "elecdisease": "333",
                        "elecnormal": "444",                       
                        "extra": "计算",                                               
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,  
                    },
                    {
                    	"type": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "女",    
                        "elecdisease": "333",
                        "elecnormal": "444",                    
                        "extra": "计算",
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,  
                    },
                    {
                    	"type": "腺癌",
                    	"location": "右肺中叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "男", 
                        "elecdisease": "333",
                        "elecnormal": "444",                       
                        "extra": "计算",
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,  
                    },
                    {
                    	"type": "腺癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "女",   
                        "elecdisease": "333",
                        "elecnormal": "444",                     
                        "extra": "计算",
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,  
                    },
                    {
                    	"type": "腺癌",
                    	"location": "右肺中叶",
                        "name": "推广名称1",
                        "CT": '无',
                        "sex": "男",   
                        "elecdisease": "333",
                        "elecnormal": "444",                     
                        "extra": "计算",
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,  
                    },
                    {
                    	"type": "鳞癌",
                    	"location": "左肺上叶",
                        "name": "推广名称1",
                        "CT": '有',
                        "sex": "女",   
                        "elecdisease": "333",
                        "elecnormal": "444",                     
                        "extra": "计算",
                        "disreal": 4254,
                        "disimag": 1438,
                        "norreal": 100,
                        "norimag": 285,
                        "diffreal": 1727,
                        "diffimag": 558,  
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
                } 
            }     
        }
    }
</script>

<style type="text/css">
.databtn{
	text-align: right;
}

</style>