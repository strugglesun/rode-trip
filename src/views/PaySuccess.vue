<template>
  <div class="pay-success">
    <BackHead>
      <h3>支付详情</h3>
      <h3 @click='backIndex'>关闭</h3>
    </BackHead>
    <div class="success">
      <span>支付成功</span>
    </div>
    <div class="success-detail">
      <div class="detail-top">
        <p><span class="des">游客姓名</span><span>{{currentDetail.travelName}}</span></p>
        <p><span class="des">自驾团名称</span><span>{{currentDetail.title}}</span></p>
      </div>
      <div class="detail-main">
        <p><span class="des">支付方式</span><span>{{currentDetail.payMethod}}</span></p>
        <p><span class="des">交易订单</span><span>{{currentDetail.orderNum}}</span></p>
        <p><span class="des">交易时间</span><span>{{showTime}}</span></p>
      </div>
      <div class="detail-footer">
        <p><span class="des">支付金额</span><span>{{totalPrice}}.00元</span></p>
      </div>
    </div>
    <div class="pay-footer">
      <p class='wish'>感谢您订购爱自驾{{currentDetail.title}},爱自驾祝您旅途愉快!</p>
      <button @click='backIndex'>返回继续订票</button>
    </div>
  </div>
</template>

<script>
import BackHead from '../components/BackHead'
import moment from 'moment'
import {mapState} from 'vuex'
export default {
name:'PaySuccess',
components:{
  BackHead
},
data(){
  return {
    currentTime:new Date()
  }
},
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
showTime(){
  return moment(this.currentTime).format('YYYY-MM-DD h:mm:ss')
}
},
methods: {
  backIndex(){
    this.$router.push('/')
  }
}

}
</script>

<style lang='scss' scoped>
.pay-success{
  width: 100%;
 
  
  .success{
    padding: 5px 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
    span{
      display: inline-block;
      background: url('../assets/images/paysuccess.jpg') no-repeat left center;
      padding:10px 0;
      padding-left: 40px;
      color:#50bbdb;
      font-size: .8rem;
    }
  }
  .success-detail{
    padding: 10px 20px;
    span{
        font-size: .9rem;
    
    }
    p{
      display: flex;
      justify-content: space-between;
      line-height: 40px;
      span:last-child{
        font-weight: bold;
      }
    }
    .des{
      color:#4c4c4c;
    }
    .detail-top{
      border-bottom: 1px solid #ccc;
    }
    .detail-main{
      border-bottom: 1px solid #ccc;
    }
  }
  .pay-footer{
    background-color: #f6f6f6;
    padding: 0 20px;
    .wish{
    color:#50bbdb;
    padding: 20px;
  }
  button{
    width: 100%;
    padding: 10px 0;
    color:#50bbdb;
    font-size: 1.2rem;
    outline: 0;
    background-color: #fff;
    border: 0;
    border:1px solid #ccc
  }
  }
}
</style>