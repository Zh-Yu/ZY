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
				<div class="right" @click="displayImpendanceDialog=true">
					<p>
					<i-button class="btnbase" size="small" @click="impedanceDialog='disreal'">癌症实部</i-button>
					<i-button class="btnbase" size="small" @click="impedanceDialog='norreal'">正常实部</i-button>
					<i-button class="btnbase" size="small" @click="impedanceDialog='diffreal'">癌症-正常实部</i-button>
					</p>
					<p>
					<i-button class="btnbase btnbottom" size="small" @click="impedanceDialog='disimag'">癌症虚部</i-button>
					<i-button class="btnbase btnbottom" size="small" @click="impedanceDialog='norimag'">正常虚部</i-button>
					<i-button class="btnbase btnbottom" size="small" @click="impedanceDialog='diffimag'">癌症-正常虚部</i-button>	
				</p>
				</div>            
			</Card>
		</i-col>
	</Row>

	<Modal
		title="阻抗数据"
		:visible.sync="displayImpendanceDialog"
		@on-ok="ok"
		@on-cancel="cancel"
		class-name="vertical-center-modal">
		<div class="content">{{impedanceNumber[impedanceDialog]}}</div>
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
				impedanceDialog: '',
				impedanceNumber: {},
				displayImpendanceDialog: false,
				titletextdesc:["癌症实部","癌症虚部","癌症-正常实部","癌症虚部","正常虚部","癌症-正常虚部"],
				electinfo:"",
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
					this.isClicked = false;

					if(response.data.length === 0) {
					  alert("啥子玩意你找的是");
						return;
					}

					const data = response.data.namequery[0];
					const displayText = {};
					["disreal", "disimag", "norreal", "norimag", "diffreal", "diffimag"].forEach(key => {
						const temparry = JSON.parse(data[key]);
						displayText[key] = temparry.map((value, index)=>{
							value = value.toFixed(2);
							return (value + '\t' + ( index % 4 === 0 ? ' \n' : ''))
						}).join('');
					})
					this.impedanceNumber = displayText;

					this.NameQueryResult = response.data.namequery[0];
					if(this.NameQueryResult.sex == 0)
						this.NameQueryResult.sex ='男';
					else
						this.NameQueryResult.sex ='女';
				})
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