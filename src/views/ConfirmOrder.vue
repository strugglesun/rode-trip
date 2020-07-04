<template>
  <div class="confirm-order">
    <EditOrderHead :currentDetail='currentDetail'>
      <template v-slot:order>
        <h3>确认订单</h3>
      </template>
    </EditOrderHead>
    <div class="confirm-order-content">
      <RouteMessage :currentDetail='currentDetail'>
        <template v-slot:agree>
          <div>
            <span>房间:2人间,同意拼房</span>
          </div>
        </template>
      </RouteMessage>
      <div class="contact-message">
        <OrderHead>联系人信息</OrderHead>
        <div class="contact-message-content">
          <p><span>姓名: {{currentDetail.travelName}}</span></p>
          <p><span>性别: {{currentDetail.sex}}</span></p>
          <p><span>手机号码: {{currentDetail.travelPhone}}</span></p>
          <p><span>邮箱: {{currentDetail.travelEmail}}</span></p>
        </div>
      </div>
      <TouristMessage/>
      <Insurance/>
      <Agreement/>
      <OrderFooter>
        <button :disabled='!agreementChecked' @click='jupm' :class='{active:!agreementChecked}'>确认,去支付</button>
      </OrderFooter>
    </div>
  </div>
</template>

<script>
import EditOrderHead from '../components/EditOrderHead'
import RouteMessage from '../components/RouteMessage'
import OrderHead from '../components/OrderHead'
import TouristMessage from '../components/TouristMessage'
import Insurance from '../components/Insurance'
import Agreement from '../components/Agreement'
import OrderFooter from '../components/OrderFooter'
import {mapState} from 'vuex'
export default {
name:"ConfirmOrder",
components:{
  OrderHead,
  EditOrderHead,
  RouteMessage,
  TouristMessage,
  Insurance,
  Agreement,
  OrderFooter
},
computed: {
  ...mapState({
    agreementChecked:state=>state.checkedModule.agreementChecked
  }),
  currentDetail(){
    return this.$store.getters.currentDetail(this.$route.params.id)
  }
},
methods: {
  jupm(){
    this.$router.push(`/payMethod/${this.currentDetail.id}`)
  }
}
}
</script>

<style lang='scss'>
.confirm-order{
  width: 100%;
  background-color: #ededed;
  span{
  font-size: .8rem;
  color:#333333;
 }
  .confirm-order-content{
    margin:0 10px;
    .contact-message{
      margin-bottom: 10px;
      background-color: #fff;
      border-radius: 10px;
      .contact-message-content{
        padding: 10px 20px;
      width: 100%;
      P{
        border-bottom: 1px solid #ccc;
        line-height: 40px;
      }
      }
    }
  }
}
</style>