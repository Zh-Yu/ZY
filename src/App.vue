<template>
 <div>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Menu-item name="1">
          <Icon type="ios-navigate"></Icon>
          病例
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-keypad"></Icon>
          CT
        </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-analytics"></Icon>
          电导率
        </Menu-item>
        <Menu-item name="4">
          <Icon type="ios-paper"></Icon>
          空气质量
        </Menu-item>
      </div>
    </Menu>
    <!-- <Menu mode="horizontal" active-name="1">
      <div class="layout-assistant">
        <Menu-item name="1">二级导航</Menu-item>
        <Menu-item name="2">二级导航</Menu-item>
        <Menu-item name="3">二级导航</Menu-item>
        <Menu-item name="1">数据库哎喂</Menu-item>
      </div>
    </Menu> -->
    <div class="layout-content">
      <Row>
        <i-col span="5">
          <Menu active-name="1-2" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                病例
              </template>
              <a v-link="{path:'name'}" @click="changecolor" :class={"toblue":toblue}><Menu-item name="1-1">按姓名</Menu-item></a>
              <a v-link="{path:'disease'}"><Menu-item name="1-2">按病症/有无CT</Menu-item></a>
              <Menu-item name="1-3">添加</Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                CT
              </template>
              <Menu-item name="2-1">原始CT</Menu-item>
              <Menu-item name="2-2">CT</Menu-item>
              <Menu-item name="2-3">添加</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                电导率
              </template>
              <Menu-item name="3-1">按姓名</Menu-item>
              <Menu-item name="3-2">按病症</Menu-item>
              <Menu-item name="3-3">添加</Menu-item>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                空气质量
              </template>
              <Menu-item name="4-1">xxx观测站</Menu-item>
              <Menu-item name="4-2">xxx观测站</Menu-item>
              <Menu-item name="4-3">xxx观测站</Menu-item>
              <Menu-item name="4-4">xxx观测站</Menu-item>
              <Menu-item name="4-5">xxx观测站</Menu-item>
              <Menu-item name="4-6">xxx观测站</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="19">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </i-col>
      </Row>
    </div>
    <div class="layout-copy">
        小兔和小咪 &copy; summer2017
    </div>    
  </div>
</div>
</template>

<script>
const ERR_OK = 0;

export default {
  data() {
    return{
      toblue: false
    }
  },
  methods:{
    changecolor(){
      this.toblue = true;
      alert("bianse");
    }
  }
  }
</script>


<style scoped>
  a{
    color:#657180;
  }
  a:active {
    color:blue;
  }
  .layout{
    /*border: 1px solid #d7dde4;*/
    background: #f5f7f9;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }
  .layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
    position: fixed;
    bottom: 0;
    left: 43%;
  }
  .toblue{
    color: red;
  }
</style>
