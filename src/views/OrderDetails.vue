<template>
  <div class="order-details">
    <div class="order-details-head">
      <img :src="imgUrl1" alt="" @click='back'>
      <span>订单详情</span>
      <img :src="imgUrl2" alt="">
    </div>
    <div class="order-details-content">
      <div class="order-details-title">{{orderMessage.orderName}}</div>
      <div class="order-details-message" v-html='orderMessage.orderMessage'></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'OrderDetails',
data(){
  return{
    imgUrl1:require('../assets/images/pre.png'),
    imgUrl2:require('../assets/images/right.png')
  }
},
computed:{
  ...mapState({
    order:state=>state.orderModule.order
  }),
  orderMessage(){
    return this.order.find(item=>
      (item.id).toString()===this.$route.params.id
    )
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
.order-details{
  width: 100%;
  .order-details-head{
  width: 100%;
  box-sizing: border-box;
  background-color: #50bbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  span{
    color: #fff;
  }
  }
  .order-details-content{
  box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    div{
      border-bottom: 1px solid #ccc;
    }
    h4{
      margin: 0;
      padding-left: 15px;
      background: url('../assets/images/order-detail-bgc.png') no-repeat left center;
    }
    .order-details-title{
      font-size: 1rem;
    }
    .order-details-message{
    padding: 0px 15px;
      div{
        display: flex;flex-direction: column;
        padding: 10px 0;
        span{
          font-size: .8rem;
          padding: 8px 0;
          color:#000;
          // margin-right: 10px;
        }
        p {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>