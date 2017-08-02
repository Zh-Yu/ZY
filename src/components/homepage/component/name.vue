<template>
<div class="name">
	<div class="inputname">
		<i-input placeholder="请输入姓名..." :value.sync="name">
	        <i-button slot="append" icon="ios-arrow-forward" :class="{ 'isClicked': isclicked}" @click="SearchByName">搜索</i-button>
	        <!-- @click.stop="clickButton" -->
	    </i-input>
    </div>
	    <Row>
	        <i-col span="14">
	            <Card>		            	
            		<p slot="title">姓名：{{namequeryresult.name}}</p>
                	<p class="extra" slot="extra">性别：{{namequeryresult.sex}}</p>            
	                <p class="des texthight"> 描述：{{namequeryresult.location + namequeryresult.type}}</p>
	                <p class="des">病例图<i-button class="btn1" size="small">弹出</i-button></p>
	                <p class="des">CT图<i-button class="btn1" size="small">弹出</i-button></p>
	                <p class="left">阻抗数据</p>
	                <div class="right">
	                	<p>
                		<i-button class="btnbase" size="small">癌症实部</i-button>
                		<i-button class="btnbase" size="small">正常实部</i-button>
                		<i-button class="btnbase" size="small">癌症-正常实部</i-button>
                		</p>
                		<p>
                		<i-button class="btnbase btnbottom" size="small">癌症虚部</i-button>
                		<i-button class="btnbase btnbottom" size="small">正常虚部</i-button>
                		<i-button class="btnbase btnbottom" size="small">癌症-正常虚部</i-button>	
                	</p>
	                </div>            
	            </Card>
	        </i-col>
        </Row>
</div>
</template>
<script>
import axios from 'axios';
    export default {
        data(){
        	return{
        		name: "",
        		namequeryresult: {					
					sex: "",
					type: "",
					location: ""
        		},
        		isclicked:false
        	}
	    },
	    methods: {
	        SearchByName(){
	          	// var flightHandler = function(data){ alert(data); }; // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码） 
	          	// var url = "http://localhost:3000/patient?name=白建华"; // 创建script标签，设置其属性
	          	//  var script = document.createElement('script'); script.setAttribute('src', url); // 把script标签加入head，此时调用开始
	          	//  document.getElementsByTagName('head')[0].appendChild(script);
	          	if(this.isclicked) return;
	          	this.isclicked = true;
          		var url = 'http://localhost:3000/patient?name=' + this.name;
            	axios.get(url)		            
			    .then(response =>{
			      	this.namequeryresult = response.data.namequery[0];
			      	if(this.namequeryresult.sex == 0)
			      		this.namequeryresult.sex ='男';
			      	else
			      		this.namequeryresult.sex ='女';
			      	this.isclicked = false;
			      	
			    })
			    .catch(function(err){
			      	alert("啥子玩意你找的是");
			      	this.isclicked = false;
			    });			    	          	
	        }  
	    }
    }
</script>

<style type="text/css">
a{
	color:black;
}
.isClicked{
	color: red;
}
.inputname {   
    width: 30%;
    margin-bottom: 40px;
}
.extra{
	margin-bottom: 5px;
}
.texthight{
	line-height: 20px;
}
.des{
	margin-bottom: 35px;
}
.btn1{
	margin-left: 10px;
}
.btnbase{
	margin: 0 10px 10px 0;
}
.btnbottom{
	margin-top: 10px;
}
.left{
	float: left;
}
.right{
	margin-left: 70px;
}
</style>