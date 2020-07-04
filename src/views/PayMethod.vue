<template>
  <div class="pay-method">
    <div class="pay-head">
      <Back>
        <h3>选择支付方式</h3>
      </Back>
      <div class="pay-head-content">
        <p>订单总额:￥{{totalPrice}}</p>
      </div>
    </div>
    <div class="pay-main">
      <ul>
        <li><span>支付宝支付</span><el-radio v-model="currentDetail.payMethod" label='支付宝'></el-radio></li>
        <li><span>微信支付</span><el-radio v-model="currentDetail.payMethod" label='微信'></el-radio></li>
        <li><span>银联支付</span><el-radio v-model="currentDetail.payMethod" label='银联'></el-radio></li>
      </ul>
    </div>
    <div class="pay-footer">
      <div>
        <p><span>支付:</span><span>￥{{totalPrice}}</span></p>
        <p>剩余 {{countDown}} 请尽快付款</p>
      </div>
      <button><router-link :to='`/paySuccess/${currentDetail.id}`'>付款</router-link></button>
    </div>
  </div>
</template>

<script>
import Back from '../components/Back'
import {mapState} from 'vuex'
export default {
name:'PayMethod',
components:{
  Back
},
data(){
  return{
    time:1200
  }
},
mounted(){
  const that=this
  setInterval(function(){
    that.time--
  },1000)
},
// updated() {
//     // this.time--
  
// },
computed: {
  ...mapState({
    insuranceChecked:state=>state.checkedModule.insuranceChecked
  }),
  currentDetail(){
    return this.$store.getters.currentDetail(this.$route.params.id)
  },
 totalPrice(){
  return this.insuranceChecked?this.currentDetail.price+177:this.currentDetail.price
 },
 countDown(){
   return this.time%60>9?`00:${Math.floor(this.time/60)}:${this.time%60}`:`00:${Math.floor(this.time/60)}:0${this.time%60}`
 }
}
}
</script>

<style lang='scss' >
// body{
//   background-color: #ebebeb;

// }
.pay-method{
  width: 100%;
  background-color: #ebebeb;
  .pay-head{
    width: 100%;
    margin-bottom: 20px;
    .pay-head-content{
    padding: 10px 20px;
    background-color: #fff;
      p{
        color:#f29846;
        font-size: 1rem;
      }
    }
  }
  .pay-main{
    width: 100%;
    ul{
    padding: 10px 20px;
    background: url('../assets/images/jian.png') no-repeat right top;
    background-color: #fff;
    li{
      padding: 10px;
      padding-left: 80px;
      line-height: 60px;
      border-bottom: 1px solid #ccc;
      color:#333333;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-radio__label{
        display: none;
      }
    }
    li:first-child{
      background: url('../assets/images/zhi.png') no-repeat left center;
    }
    li:nth-child(2){
      background: url('../assets/images/wx.png') no-repeat left center;
    }
    li:nth-child(3){
      border: 0;
      background: url('../assets/images/bank.jpg') no-repeat left center;
    }
    }
  }
  .pay-footer{
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      display: flex;flex-direction: column;
      p:first-child{
        display: flex;
        color:#f29846;
        justify-content: space-between;
      }
      p:nth-child(2){
        font-size: .8rem;
        font-weight: bold;
      }
    }
    button{
      border: 0;
      outline: 0;
      padding: 10px 40px;
      background-color: rgb(80, 187, 219);
      font-size: 1rem;
      border-radius: 5px;
      a{
      color:#fff;
      }
    }
  }
}
</style>