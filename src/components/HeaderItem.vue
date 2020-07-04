<template>
  <div class="header">
    <div class="header-left">
      <img :src="imgUrl1" alt="">
      <span>秦皇岛</span>
    </div>
      <div class="header-center">
        <span>爱自驾</span>
      <span>互动</span>
      </div>
    <div class="header-right">
      <img :src="imgUrl2" alt="">
    </div>
  </div>
</template>

<script>
export default {
name:'headerItem',
data(){
  return{
    imgUrl1:require('../assets/images/header2.png'),
    imgUrl2:require('../assets/images/header1.png'),
  }
}
}
</script>

<style lang='scss'>
.header{
  display: flex;
  align-items: center;
  background-color: #50bbdb;
  justify-content: space-between;
  padding:0 10px;
  line-height: 70px;
  img{
    width: 40px;
    height: 40px;
  }
  .header-left ,.header-right{
    display: flex;
    align-items: center;
    span{
      color:#fff;
      font-size: 0.8rem;
    }
  }
  .header-center{
    span{
padding:5px 20px;
border-radius: 3px 0 0 3px;
    }
    span:first-child{
      border:1px solid #fff;
      background-color: #fff;
      color:#50bbdb;
    }
    span:nth-child(2){
      background: #50bbdb;
      color:#fff;
      border:1px solid #fff;
border-radius:  0 3px  3px 0;

  box-sizing: content-box;

    }
    // // justify-content: center;
    // text-align: center;
  }
}
</style>