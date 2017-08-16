<template>
<div>
    <i-table height="500" :columns="columns" :data="data" size="default" v-ref:table border></i-table>
    <br>
    <Row>
        <i-col span="8"><i-button type="ghost" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</i-button></i-col>
        <i-col span="8"><i-button type="ghost" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</i-button></i-col>
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
                        // "sortable": true,
                        filters: [],       //{value:number, label:string}                    
                        filterMultiple: false,
                        filterMethod(value, row){
                            // for(var i=0;i<this.filters.length;i++){
                            //     if(value ==this.filters[i].value){
                            //         var filturl = 'http://localhost:3000/patientfilter?command=' + this.filters[i].label;
                            //     // axios.get(filturl)
                                //     .then(response =>{
                                //         console.log(response.data)
                                //     }  
                                var arr=[];
                                var temp = this.filters[0].label;
                                // console.log(temp)
                                arr.push(temp)
                                // console.log(arr)
                                for(var i=0;i<arr.length;i++){
                                    if(arr[i] == arr[0])
                                        return;
                                    else
                                        arr.push(temp);
                                }                                    
                                                                   
                                console.log(arr)

                                // }
                                
                                // console.log(this.filters[0].label);  //本页的10个数组，每个数组有5个对象 鳞癌
                                // console.log(this.filters.length);  //5
                                // function filtdata(filturl){
                                // time = time + 1;
                                // if(time ===1){
                                //     axios.get(filturl)
                                //     .then(response =>{
                                        // console.log(filturl)
                                //     })
                                // time = 0;
                                // }                                    
                                // }
                            // }
                            // for(var i=0; i<this.filters.length; i++){
                            //     if(value == this.filters[i].value)
                            //         return row.type == this.filters[i].label;
                            // }                                         
                        }
                    },                   //1
                    {
                        "title": "癌变位置",
                        "key": "location",
                        "width": 150,
                        "align": "center",
                        // "sortable": true,
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
                        // "sortable": true,
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
                        // "sortable": true,
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
                        "title": "备注",
                        "key": "extra",
                        "width": 150,
                        // "sortable": true
                    },
                    {
                        "title": "癌症实部",
                        "key": "disreal",
                        "width": 600,
                        // "sortable": true
                    },
                    {
                        "title": "癌症虚部",
                        "key": "disimag",
                        "width": 600,
                        // "sortable": true
                    },
                    {
                        "title": "正常实部",
                        "key": "norreal",
                        "width": 600,
                        // "sortable": true
                    },
                    {
                        "title": "正常虚部",
                        "key": "norimag",
                        "width": 600,
                        // "sortable": true
                    },
                    {
                        "title": "癌症-正常实部",
                        "key": "diffreal",
                        "width": 600,
                        // "sortable": true
                    },
                    {
                        "title": "癌症-正常虚部",
                        "key": "diffimag",
                        "width": 600,
                        // "sortable": true
                    },
                    {
                        "title": "电导率(癌症)",
                        "key": "elecdisease",
                        "width": 150,
                        "align": "center",
                        // "sortable": true
                    },                                   //6
                    {
                        "title": "电导率(正常)",
                        "key": "elecnormal",
                        "width": 150,
                        "align": "center",
                        // "sortable": true
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
            requestPage(pageNumber, isInit = false) {
                var url = 'http://localhost:3000/patientList?page=' + pageNumber;
                this.$Loading.start();
                axios.get(url)                                  
                .then(response =>{ 
                    this.$Loading.finish();
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

                    if(isInit) {
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
                        })   
                    }
                })
            },
            changepage(page){
                this.requestPage(page);
            }     
        },
        created(){         
            this.requestPage(1, true);
        },
    }
</script>

<style type="text/css">
.ivu-table-body{
    height: 450px !important;
}
.page{
    position: absolute;
    right: 0;
}
.ivu-page-simple .ivu-page-simple-pager input{
    width: 40px !important;
}
</style>