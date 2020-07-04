<template>
  <div class="edit-order">
    <EditOrderHead :currentDetail='currentDetail'>
      <template v-slot:order>
        <h3>填写订单</h3>
      </template>
    </EditOrderHead>
    <div class="edit-order-content">
      <RouteMessage :currentDetail='currentDetail'>
        <template v-slot:room>
          <div class="room">
            <span>房间:</span>
            <div class="room-content">
              <el-button :disabled='currentDetail.roomValue<=0' @click='currentDetail.roomValue--'>-</el-button><el-input v-model="currentDetail.roomValue"></el-input><el-button @click='currentDetail.roomValue++'>+</el-button>
            </div>
            <span>(2人间)</span>
          </div>
          <div class="agree-room">
            <span>是否同意拼房:</span>
            <div class="agree-room-content">
               <el-radio v-model="radio" label="1">同意</el-radio>
               <el-radio v-model="radio" label="2">不同意拼房</el-radio>
            </div>
          </div>
        </template>
      </RouteMessage>
      <div class="order-explain">
        <OrderHead>费用说明</OrderHead>
        <div class="order-explain-content">
          <p>费用包含：</p>
          <span>*+7x24小时优秀中/英双语自驾向导服务（国内出发，全程陪同）；</span>
          <span>*+国内往返美国经济舱机票、燃油附加税、机票税；</span>
          <span>*+包含好莱坞环球影城+17英里海岸门票；</span>
          <span>*+美国当地钻酒店住宿；</span>
          <span>*+美国当地钻酒店住宿1；</span>
        </div>
      </div>
      <div class="phone-message">
        <OrderHead>联系人信息</OrderHead>
        <div class="phone-message-content">
          <div class="message-name">
            <span class="star">*</span>
            <span>姓名:</span>
            <input type="text" placeholder="必填" v-model='currentDetail.travelName'>
          </div>
          <div class="sex">
              <div>
                <span class="star">*</span>
                <span>性别</span>
              </div>
              <div :style="{marginLeft:'20px'}">
                <el-radio v-model="currentDetail.sex" label="男">男</el-radio>
                <el-radio v-model="currentDetail.sex" label="女">女</el-radio>
              </div>
            </div>
            <div class="phone-number">
              <span class="star">*</span>
              <span>手机号码:</span>
              <input type="text" v-model='currentDetail.travelPhone'>
            </div>
            <div class="e-mail">
              <span class="star">*</span>
              <span>邮箱</span>
              <input type="text" placeholder="必填,接受合同信息" v-model='currentDetail.travelEmail'>
          </div>
        </div>
      </div>
      <TouristMessage/>
      <Insurance/>
      <Agreement/>
    </div>
    <OrderFooter>
      <button :disabled='!agreementChecked' @click='jupm' :class='{active:!agreementChecked}'>提交订单</button>
    </OrderFooter>
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
import { mapState } from 'vuex'
export default {
name:'EditOrder',
components:{
  OrderHead,
  EditOrderHead,
  RouteMessage,
  TouristMessage,
  Insurance,
  Agreement,
  OrderFooter
},
data(){
  return{
    radio:'1',
  }
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
    this.$router.push(`/confirmOrder/${this.currentDetail.id}`)
  }
},
}
</script>

<style lang='scss'>
.edit-order{
  width: 100%;
  background-color: #ededed;
  span{
  font-size: .8rem;
  color:#333333;
 }
  
  .edit-order-content{
    margin:0 10px;
    
    .order-explain{
      background-color: #fff;
    border-radius: 10px;
      margin-bottom: 10px;
      .order-explain-content{
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        P{
          margin-bottom: 10px;
        }
        span{
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 10px;
        }
      }
    }
  .phone-message{
      margin-bottom: 10px;
    border-radius: 10px;
    background-color: #fff;
    .phone-message-content{
      padding: 10px 20px;
      width: 100%;
      .star{
        color:#50bbdb;
      }
      input{
        border: 0;
        outline: 0;
        margin-left: 20px;
      }
      .message-name,.sex,.phone-number,.e-mail{
        border-bottom: 1px solid #ccc;
        width: 100%;
        padding: 5px 0;
      }
      .sex{
          display: flex;
      }
    }
  }

  .insurance{
    background-color: #fff;
    border-radius: 10px;
    .insurance-content{
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    .price{
      color:#f98d0d;
    }
    }
  }
  
  }
  
}
</style>