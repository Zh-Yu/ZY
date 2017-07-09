<template>
<div class="name">
	<div class="inputname">
		<i-input placeholder="请输入姓名...">
	        <i-button slot="append" icon="ios-arrow-forward">搜索</i-button>
	        <!-- @click.stop="clickButton" -->
	    </i-input>
    </div>
	    <Row>
	        <i-col span="14">
	            <Card>		            	
            		<p slot="title">姓名：笨小兔</p>
                	<p class="extra" slot="extra">性别：女/年龄：26</p>            
	                <p class="des texthight"> 描述：这个兔子可爱到发光啦这个兔子可爱到发光啦这个兔子可爱到发光啦这个兔子可爱到发光啦这个兔子可爱到发光啦这个兔子可爱到发光啦这个兔子可爱到发光啦这个兔子可爱到发光啦这个兔子可爱到发光啦</p>
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
    export default {
        data () {
    
	    },
	    methods: {
	            
	    }
    }
</script>

<style type="text/css">
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