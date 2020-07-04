<template>
  <div class="search-view">
    <div class="search-view-head">
      <img :src="imgUrl1" alt="" @click='back'>
      <h3> 南京 产品推荐</h3>
      <img :src="imgUrl2" alt="">
    </div>
    <SearchList/>
    <footer>
      <ul>
        <li>出发城市</li>
        <li>行程天数</li>
        <li>出发时间</li>
        <li>推荐排序</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import SearchList from '../components/SearchList'
export default {
name:"SearchView",
components:{
SearchList
},
data(){
  return{
    imgUrl1:require('../assets/images/pre.png'),
    imgUrl2:require('../assets/images/pointer.png')
  }
},
methods: {
  back(){
    this.$router.back()
  }
},
}
</script>

<style lang='scss'>
.search-view{
  width: 100%;
  .search-view-head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background-color: #50bbdb;
    h3{
      color:#fff;
      margin:20px 0;
    }
  }
  footer{
    width: 100%;
    position: fixed;
    bottom:0;
    left:0;
    background-color: #fff;
    padding: 5px 20px;
    box-sizing: border-box;
    border-top: 1px solid #d2d2d2;
    ul{
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: space-between;
      li{
        padding-top: 45px;
        font-size: .8rem;
        font-weight: bold;
      }
      li:first-child{
        background: url('../assets/images/searchbgc1.png') no-repeat top center;
        background-size: 40px 40px;
      }
      li:nth-child(2){
        background: url('../assets/images/searchbgc2.png') no-repeat top center;
        background-size: 40px 40px;
      }
      li:nth-child(3){
        background: url('../assets/images/searchbgc3.png') no-repeat top center;
        background-size: 40px 40px;
      }
      li:nth-child(4){
        background: url('../assets/images/searchbgc4.png') no-repeat top center;
        background-size: 40px 40px;
      }
    }
  }
}
</style>