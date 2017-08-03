<template>
<div class="name">
	<div class="inputname">
		<i-input placeholder="请输入姓名..." :value.sync="name">
	        <i-button slot="append" icon="ios-arrow-forward"  :disabled="isClicked"  @click="SearchByName">搜索</i-button>
	        <!-- @click.stop="clickButton" -->
	    </i-input>
    </div>
    <Row>
        <i-col span="14">
            <Card>		            	
        		<p slot="title">姓名：{{NameQueryResult.name}}</p>
            	<p class="extra" slot="extra">性别：{{NameQueryResult.sex}}</p>            
                <p class="des texthight"> 描述：{{NameQueryResult.location + NameQueryResult.type}}</p>
                <p class="des">病例图<i-button class="btn1" size="small">弹出</i-button></p>
                <p class="des">CT图<i-button class="btn1" size="small">弹出</i-button></p>
                <p class="left">阻抗数据</p>
                <div class="right" @click="select">
                	<p>
            		<i-button class="btnbase" size="small" @click="selectButton.disreal = true">癌症实部</i-button>
            		<i-button class="btnbase" size="small" @click="selectButton.norreal = true">正常实部</i-button>
            		<i-button class="btnbase" size="small" @click="selectButton.diffreal = true">癌症-正常实部</i-button>
            		</p>
            		<p>
            		<i-button class="btnbase btnbottom" size="small" @click="selectButton.disimag = true">癌症虚部</i-button>
            		<i-button class="btnbase btnbottom" size="small" @click="selectButton.norimag = true">正常虚部</i-button>
            		<i-button class="btnbase btnbottom" size="small" @click="selectButton.diffimag = true">癌症-正常虚部</i-button>	
            	</p>
                </div>            
            </Card>
        </i-col>
    </Row>
    <Modal
        title="阻抗数据"
        :visible.sync= "selectTrue"
        @on-ok="ok"
        @on-cancel="cancel"
        class-name="vertical-center-modal">
        <div class="content">{{electinfo}}</div>
	</Modal>
</div>
</template>
<script>
import axios from 'axios';
    export default {
        data(){
        	return{
        		name: "",
        		NameQueryResult: {},
        		isClicked:false,
        		selectButton:{
        			disreal:false,
        			norreal:false,
        			diffreal:false,
        			disimag:false,
        			norimag:false,
        			diffimag:false
        		},
        		titletextdesc:["癌症实部","癌症虚部","癌症-正常实部","癌症虚部","正常虚部","癌症-正常虚部"],
        		electinfo:"",
        		selectTrue: "",
        	}
	    },
	    methods: {
	        SearchByName(){
	          	// var flightHandler = function(data){ alert(data); }; // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码） 
	          	// var url = "http://localhost:3000/patient?name=白建华"; // 创建script标签，设置其属性
	          	//  var script = document.createElement('script'); script.setAttribute('src', url); // 把script标签加入head，此时调用开始
	          	//  document.getElementsByTagName('head')[0].appendChild(script);
	          	if(this.isClicked) return;
	          	this.isClicked = true;
          		var url = 'http://localhost:3000/patient?name=' + this.name;
            	axios.get(url)		            
			    .then(response =>{
			      	this.NameQueryResult = response.data.namequery[0];
			      	if(this.NameQueryResult.sex == 0)
			      		this.NameQueryResult.sex ='男';
			      	else
			      		this.NameQueryResult.sex ='女';
			      	this.isClicked = false;
			      	
			    })
			    .catch(err =>{
			      	alert("啥子玩意你找的是");
			      	this.isClicked = false;
			    });			    	          
	        },	        
            select(){
            	for(var key in this.selectButton){
            		if (this.selectButton[key]){            			
        				this.selectTrue = this.selectButton[key];           			
        				// this.electinfo = this.NameQueryResult[key].split(",");
        				var temparry = JSON.parse(this.NameQueryResult[key]);
        				for (var i = 0; i < 31; i++) {
        					this.electinfo += temparry[i] + " ;";
        					if (i>0 && i%6 == 0)
        						this.electinfo += "\n"
        				}
        				// this.titletext = this.titletextdesc[index] + "阻抗数据"        			
            		}　
            	}
            },
            ok(){
            	for(var key in this.selectButton){
            		if (this.selectButton[key]){
            			   this.selectButton[key] = false;       			
            		}
            	}
            	this.electinfo ="";
            },
            cancel(){
            	for(var key in this.selectButton){
            		if (this.selectButton[key]){
            			   this.selectButton[key] =false;       			
            		}
            	}
            	this.electinfo ="";
            }
        } 
	   
    }
</script>

<style type="text/css">
a{
	color:black;
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
.content{
	height: 200px;
}
</style>