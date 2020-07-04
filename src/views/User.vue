<template>
  <div class="user">
    <Back>
        <h3>订单列表</h3>
    </Back>
    <div class="type">
      <p @click='changeSort'>全部分类<i class="el-icon-caret-bottom"></i></p>
      <p @click='changeTime'>按时间排序<i class="el-icon-caret-bottom"></i></p>
    </div>
    <div class="sort" v-show='showSort'>
      <ul>
        <li @click="filterOrder('全部')">全部分类</li>
        <li @click="filterOrder('待出行')">待出行</li>
        <li @click="filterOrder('待支付')">待支付</li>
        <li @click="filterOrder('待评价')">待评价</li>
        <li @click="filterOrder('已取消')">已取消</li>
      </ul>
    </div>
    <div class="time" v-show='showTime'>
      <ul>
        <li>按下单时间排序</li>
        <li>按出行时间排序</li>
      </ul>
    </div>
    <OrderList></OrderList>
    <div :class="{active:showDrawer}" class="drawer" @click='drawerClick'></div>
  </div>
</template>

<script>
import OrderList from '../components/OrderList'
import Back from '../components/Back'
import { mapMutations,mapState } from 'vuex'
export default {
name:'User',
components:{
  Back,
  OrderList
},
computed:{
  ...mapState({
    order:state=>state.orderModule.order
  })
},
data(){
  return{
    showSort:false,
    showTime:false,
    showDrawer:false
  }
},
methods: {
  ...mapMutations(['filterType']),
  filterOrder(orderType){
    console.log(orderType)
    this.filterType(orderType)
    this.showSort=false
    this.showTime=false
    this.showDrawer=false
  },
  back(){
    this.$router.back()
  },
  changeSort(){
    this.showSort=!this.showSort
    this.showDrawer=(this.showSort?true:false)
    this.showTime=false
    this.isMove()
  },
  changeTime(){
    this.showTime=!this.showTime
    this.showDrawer=(this.showTime?true:false)
    this.showSort=false
    this.isMove()
  },
  mo(e){
    e.preventDefault();
  },
  stop(){
    document.body.style.overflow='hidden';       
    document.addEventListener("touchmove",this.mo,{passive:false});//禁止页面滑动
  },
  move(){
    document.body.style.overflow='';//出现滚动条
    document.removeEventListener("touchmove",this.mo,{passive:false});       
  },
  isMove(){
    if(this.showDrawer===true){
      this.stop()
    }else{
      this.move()
    }
  },
  drawerClick(){
    this.showSort=false
    this.showTime=false
    this.showDrawer=false
    this.move()
  }
}
}
</script>

<style lang='scss'>
.user{
  width: 100%;
  .active{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: .5);
    z-index: 1;
  }
  header{
    width: 100%;
    padding: 0 10px;
    position: relative;
    z-index: 4;
    box-sizing: border-box;
    display: flex;
    background-color: #50bbdb;
    h3{
      flex-grow: 1;
      text-align: center;
      color: #fff;
      font-size: 1rem;
      margin: 20px 0;

    }
    span{
     padding:0 20px;
     background-image: url('../assets/images/userBgc.png');
     background-position: 0 center;
     background-repeat: no-repeat;
    }
  }
  .type{
    display: flex;
    background-color: #fff;
    position: relative;
    z-index: 4;
    p{
      flex-grow: 0.5;
      text-align: center;
      color:#000;
      margin: 0;
      padding: 14px 0;
      border-right: #d2d2d2 1px solid;
    }
    p:nth-child(2){
      border: 0;
    }
  }
  .sort,.time{
    width: 100%;
    position: absolute;
    z-index: 2;
    background-color: #fff;
    
    ul{
      margin: 0;
      list-style: none;
      padding: 0;
      width: 100%;
      li{
      font-size: .8rem;
      padding: 10px;
      border-top: 1px solid #d2d2d2;
      }
    }
  }
}
</style>