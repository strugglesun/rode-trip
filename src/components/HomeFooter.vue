<template>
  <div class="home-footer">
    <div class="home-footer-content">
      <div><i class="el-icon-s-home"></i><span>首页</span></div>
      <div><i class="el-icon-s-promotion"></i><span>我去</span></div>
      <router-link to='/mapItem'><div><i class="el-icon-s-platform"></i><span>地图</span></div></router-link>
      <router-link to='/user'><div><i class="el-icon-user-solid"></i><span>个人中心</span></div></router-link>
    </div>
  </div>
</template>
      
<script>
export default {
name:'HomeFooter'
}
</script>

<style lang='scss'>
.home-footer{
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .home-footer-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    a{
      color:#000;
text-decoration: none;
    }
    div{
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      align-items: center;
      i{
        font-size: 1.4rem;
      }
      span{
        font-size: 0.8rem;
      }
    }
    div:hover i ,div:hover span{
      color:#50bbdb;
    }
  }
}
</style>