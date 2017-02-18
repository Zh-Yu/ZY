<template>
<div class="goods">
  <div class="menu-wrapper">
  	<ul>
  		<li v-for="item in goods" class="menu-item">
  		  <span class="text border-1px">
  		  	<span v-show="item.type>0" class="icon" :class="classmap[item.type]"></span>{{item.name}}
  		  </span> 			
  		</li>
  	</ul>
  </div>
  <div class="foods-wrapper">
  	<ul>
  		<li v-for="item in goods" class="food-list">
  			<h1 class="title">{{item.name}}</h1>
  			<ul>
  				<li v-for="food in item.foods" class="food-item">
  				<div class="icon">
  					<img :src="food.icon">
  				</div>
  				<div class="content">
  					<h2 class="name">{{food.name}}</h2>
  					<p class="desc">{{food.description}}</p>
  					<div class="extra">
  						<span>月售{{food.sellCount}}份</span>
  						<span>好评率{{food.rating}}%<span>
  					</div>
  					<div class="price">
  						<span>￥{{food.price}}</span>
  						<span v-show="food.oldPrice">￥{{food.olePrice}}</span>
  					</div>
  				</div>  					
  				</li>
  			</ul>
  		</li>
  	</ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
   export default{
   	props:{
   	  seller:{
   	    type:Object
   	  }
   	},
   	data(){
   	  return{
   	    goods:[]
   	  }
   	},
   	created(){
      this.classmap = ['decrease','discount','special','invoice','guarantee'];
   	  this.$http.get('/api/goods').then((response)=>{
       response = response.body;
       if(response.errno == ERR_OK){
         this.goods = response.data;
       }
   	  })
   	}
   };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/maxin';
.goods
  display:flex
  position:absolute
  width: 100%
  top: 174px
  bottom:46px
  overflow:hidden
  .menu-wrapper
    flex:0 0 80px
    width:80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      line-height:14px
      padding: 0 12px
      .icon
        vertical-align: top
        height: 12px
        width: 12px
        display: inline-block
        border-radius: 2px
        margin-right: 2px
        background-size: 12px 12px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
	  .text
	    font-size: 12px
	    display: table-cell
	    vertical-align: middle
	    width: 56px
	    border-1px(rgba(7,17,27,0.1))
  .foods-wrapper
    flex:1  

</style>
