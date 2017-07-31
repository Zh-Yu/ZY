<template>
	<div>
		<i-table border size="small" height="550" :columns="columns" :data="data"></i-table>
	</div>  
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '观测站',
                        key: 'station'
                    },
                    {
                        title: 'SO2',
                        key: 'SO2',
                        sortable: true
                    },
                     {
                        title: 'NO2',
                        key: 'NO2',
                        sortable: true
                    },
                     {
                        title: 'CO',
                        key: 'CO',
                        sortable: true
                    },
                     {
                        title: 'O3',
                        key: 'O3',
                        sortable: true
                    },
                     {
                        title: 'PM2.5',
                        key: 'PM2.5',
                        sortable: true
                    },
                     {
                        title: 'PM10',
                        key: 'PM10',
                        sortable: true
                    },
                    {
                        title: 'AQI',
                        key: 'AQI',
                        sortable: true
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
                    }
                ]
            }
        }
    }
</script>