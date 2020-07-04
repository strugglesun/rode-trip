<template>
  <div class="select-tourist">
   <BackHead>
      <h3>选择常用游客</h3>
      <h3 @click='back'>确定</h3>
    </BackHead>
    <div class="tourist-content"><p>已选择{{selectTouristLength}}/{{touristLength}}旅客</p></div>
    <ul>
      <li v-for='item in tourist' :key='item.id'>
        <span class="tourist-name">{{item.name}}</span>
         <el-checkbox v-model="item.checked"></el-checkbox>
      </li>
    </ul>
    <footer>
      <span><router-link to='/addTourist'>添加常用游客</router-link></span>
    </footer>
  </div>
</template>

<script>
import BackHead from '../components/BackHead'
import { mapState, mapGetters } from 'vuex'
export default {
name:'SelectTourist',
components:{
  BackHead
},
computed:{
  ...mapState({
    tourist:state=>state.touristModule.tourist
  }),
  ...mapGetters(['touristLength','selectTouristLength']),
  
},
  methods: {
  back(){
    this.$router.back()
  }
}
}
</script>

<style lang='scss'>
.select-tourist{
  width: 100%;
  .tourist-content{
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  ul{
    li{
      display: flex;
      justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
      line-height: 50px;
      .tourist-name{
        background: url('../assets/images/touristBgc.png') no-repeat left center;
        padding-left: 50px;
      }
    }
  }
  footer{
    width: 100%;
    background-color: #50bbdb;
    text-align: center;
    // padding-left: 30px;;
    position: fixed;
    left: 0;
    bottom: 0;
    span{
    padding: 20px 50px;
    display: inline-block;
      background: url('../assets/images/addTourist.png') no-repeat left center;
      a{
    color:#fff;
       
      }
    }
  }
}
</style>