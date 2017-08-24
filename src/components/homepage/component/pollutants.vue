<template>
	<div>
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
                        key: "date_format(a.date,'%Y/%m/%d')",
                        sortable: true,
                        "align": "center",
                        width: 110
                    },
                    {
                        title: '观测站',
                        key: 'station',
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
                        key: 'airquality',
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
                    // {
                    //     date: '',
                    //     station: '',
                    //     CO2: '',
                    //     NO2: '',
                    //     CO: '',
                    //     O3: '',
                    //     PM2: '',
                    //     PM10: '',
                    //     AQI: ''
                    // },                    
                ]
            }
        },
        created(){
            axios.get('http://localhost:3000/pollutionToday')
            .then(response =>{
                this.data = response.data;
                console.log(this.response.data)
            })
        }
    }
</script>