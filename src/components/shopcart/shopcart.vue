<template>
  <div class="shopcart">
  	<div class="content">
  		<div class="content-left">
  			<div class="logo-wrapper">
  				<div class="logo">
  					<i class="icon-shopping_cart"></i>
  				</div>
          <div class="num">{{totalCount}}</div>
  			</div>
  				<div class="price">¥{{totalPrice}}</div>
  				<div class="desc">另需配送费¥{{deliveryPrice}}元</div>
  		</div>
  		<div class="content-right">
        <div class="pay">¥{{minPrice}}元起送</div>      
      </div>
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
   export default{
     props:{
       selectFoods:{
         type:Array,
         default(){
           return[];
         }
       },
       deliveryPrice:{
         type: Number,
         default: 0
       },
       minPrice:{
         type: Number,
         default: 0
       }
     },
     computed:{
       totalPrice(){
         let total = 0;
         this.selectFoods.forEach((food) =>{
           total += food.price * food.count;
         });
         return total;
       },
       totalCount(){
         let count= 0;
         this.selectFoods.forEach((food) =>{
           count += food.count;
         });
         return count;
       }
     }
   };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart
  position: fixed
  left: 0
  bottom: 0
  z-index: 50
  width: 100%
  height: 48px
  .content
    display: flex
    background: #141d27
    font-size: 0
    color: rgba(255,255,255,0.4)
    .content-left
      flex: 1
      .logo-wrapper
        display: inline-block
        position: relative
        top: -10px
        margin: 0 12px
        padding: 6px 0
        width: 56px
        height: 56px
        box-sizing: border-box
        vertical-align: top
        border-radius: 50%
        background: #141d27
        .logo
          width: 80%
          height: 100%
          border-radius: 50%
          background: #2b343c
          margin: 0 0 0 6px
          text-align:center
          .icon-shopping_cart
            color: #80858a
            font-size: 24px
            line-height: 44px
      .price
        display: inline-block
        vertical-align: top
        line-height: 24px
        margin-top: 12px
        box-sizing: border-box
        padding-right: 12px
        border-right: 1px solid rgba(255,255,255,0.1)
        font-size: 16px
        font-weight: 700
      .desc
        display: inline-block
        vertical-align: top
        line-height: 24px
        margin: 12px 0 0 12px
        font-size: 10px
        font-weight: 200
    .content-right
      flex: 0 0 105px
      width: 105px  
      .pay
        height: 48px
        line-height: 48px
        text-align: center
        font-size: 12px
        font-weight: 700
        background:#2b333b
        
</style>
