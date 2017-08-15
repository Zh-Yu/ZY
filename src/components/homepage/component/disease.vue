<template>
<div>
    <i-table height="500" :columns="columns" :data="data" size="small" v-ref:table border></i-table>
    <br>
    <Row class="databtn">
        <i-col span="8"><i-button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</i-button></i-col>
        <i-col span="8"><i-button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</i-button></i-col>
        <!-- <i-col span="8"><i-button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</i-button></i-col> -->
        <Page class="page" :current="1" :total="count" simple @on-change="changepage"></Page>
    </Row>   
</div>
</template>
<script>
import axios from 'axios';
    export default {
        data () {
            return {
                count: 0,
                columns: [
                	{
                		"title": "序号",
                        "type": "index",
                        "width": 60,
                        "align": "center"
                    },                         //0
                    {
                        "title": "癌变种类",
                        "key": "type",
                        "width": 150,
                        "align": "center",
                        "sortable": true,
                        filters: [],                        
                        filterMultiple: false,
                        filterMethod(value, row){ 
                            for(var i=0; i<this.filters.length; i++){
                                if(value == this.filters[i].value)
                                    return row.type == this.filters[i].label;
                            }                                         
                        }
                    },                   //1
                    {
                        "title": "癌变位置",
                        "key": "location",
                        "width": 150,
                        "align": "center",
                        "sortable": true,
                        filters: [],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            for(var i=0; i<this.filters.length; i++){
                                if(value == this.filters[i].value)
                                    return row.location == this.filters[i].label;
                            }
                        }
                    },                                     //2                   
                    {
                        "title": "CT",
                        "key": "ct",
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
                                value: 0
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.ct == '有';
                            } else if (value === 0) {
                                return row.ct == '无';
                            }
                        }
                    },                                 //3
                    {
                        "title": "姓名",
                        "key": "name",
                        "align": "center",
                        "width": 100
                    },                             //4
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
                    },                                 //5                                 
                    {
                        "title": "电导率(癌症)",
                        "key": "elecdisease",
                        "width": 150,
                        "align": "center",
                        "sortable": true
                    },                                   //6
                    {
                        "title": "电导率(正常)",
                        "key": "elecnormal",
                        "width": 150,
                        "align": "center",
                        "sortable": true
                    },                                  //7
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
                data: [],
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
            },
            changepage(page){
                var url = 'http://localhost:3000/patientList?page=' + page;
                axios.get(url)                                  
                .then(response =>{ 
                    var processedItem = ["disreal", "disimag", "norreal", "norimag", "diffreal", "diffimag"];
                    var shortdata = response.data.pagecontent.map((item) =>{
                        for(var key in item)
                            if(processedItem.indexOf(key) >-1) {
                                var shortnum = JSON.parse(item[key]).map((value)=>value.toFixed(2)).join('; ');
                                item[key] = shortnum;
                            }                   
                        item.ct = item.ct===1?'有':'无';
                        item.sex =item.sex === 0?'男':'女';
                        return item;
                    })
                    this.data = shortdata; 
                })
            }     
        },
        created(){           
            axios.get('http://localhost:3000/patientList?page=1')		            
            .then(response =>{ 
                var processedItem = ["disreal", "disimag", "norreal", "norimag", "diffreal", "diffimag"];
                var shortdata = response.data.pagecontent.map((item) =>{
                    for(var key in item)
                        if(processedItem.indexOf(key) >-1) {
                            var shortnum = JSON.parse(item[key]).map((value)=>value.toFixed(2)).join('; ');
                            item[key] = shortnum;
                        }                   
                    item.ct = item.ct===1?'有':'无';
                    item.sex =item.sex === 0?'男':'女';
                    return item;
                })
                this.data = shortdata;                      //把数据改成两位小数
                this.count = response.data.count[0].count;         //查询数据总数，条数=总数/10 + 1
                var filterstype = this.columns[1].filters;
                response.data.typecontent.map((item, index) =>{
                    filterstype.push({label:'',value:0});
                    filterstype[index].label = item.type;
                    filterstype[index].value = index;
                })                                           //类型筛选
                var filterslocation = this.columns[2].filters;
                response.data.locationcontent.map((item, index) =>{
                    filterslocation.push({label:'',value:0});
                    filterslocation[index].label = item.location;
                    filterslocation[index].value = index;
                })                                               //位置筛选
                // console.log(this.columns[1].filters)
            })
        },
    }
</script>

<style type="text/css">
.databtn{
	text-align: right;
}
.page{
    position: absolute;
    right: 0;
}
.ivu-page-simple .ivu-page-simple-pager input{
    width: 40px !important;
}
</style>