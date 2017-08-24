<template>
	<div>
        <i-select :model.sync="model1" style="width:200px" @on-change="changeSelect">        
            <i-option v-for="item in stationList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
		<i-table border size="default" height="500" :columns="columns" :data="data"></i-table>
	</div>  
</template>
<script>
import axios from 'axios';
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: 'AQI',
                        key: 'aqi',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: '空气质量',
                        key: 'arrquality',
                        width: 150,
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: 'PM25',
                        key: 'pm25',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: 'PM10',
                        key: 'pm10',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                     {
                        title: 'CO',
                        key: 'co',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: 'NO2',
                        key: 'no2',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: 'O3',
                        key: 'o3',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: 'O3平均',
                        key: 'o3average',
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: 'SO2',
                        key: 'so2',
                        sortable: true,
                        "align": "center",
                        width: 110
                    }                                                                     
                ],
                data: [
                    {
                        date: '',
                        station: '',
                        CO2: '',
                        NO2: '',
                        CO: '',
                        O3: '',
                        PM2: '',
                        PM10: '',
                        AQI: ''

                    },                    
                ],
                stationList: [],
                model1: ''
            }
        },
        methods:{
            changeSelect(value){
                var url = 'http://localhost:3000/getbystation?stationName=' + value;
                axios.get(url)
                .then(response =>{
                    console.log(response.data);
                })
            }
        },
        created(){
            axios.get('http://localhost:3000/getStation')
            .then(response =>{
                for(var i=0;i<response.data.length;i++)
                    this.stationList.push({});
                response.data.map((item, index) =>{
                    this.stationList[index].label = item.station;
                    this.stationList[index].value = item.station;
                })
            })
        }
    }
</script>
<style type="text/css">
    .ivu-select{
        margin:0 40% 3px 37%;
    }
</style>