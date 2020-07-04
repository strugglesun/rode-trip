<template>
  <div class="sign-up">
    <Back><h3>北京出发</h3></Back>
    <el-calendar v-model="currentDetail.calendarValue"></el-calendar>
    <div class="sign-up-detail">
      <div class="detail-top">
        <div class="top-left">
          <p><span>成人</span><span>￥{{currentDetail.price}}</span></p>
          <div class="change"><el-button :disabled='currentDetail.peopleValue<=0' @click='currentDetail.peopleValue--'>-</el-button><el-input v-model='currentDetail.peopleValue'></el-input><el-button @click='currentDetail.peopleValue++'>+</el-button></div>
        </div>
        <div class="top-right">
          <p class="warn"><span>儿童</span><span>￥{{currentDetail.price}}</span></p>
          <div class="change"><el-button :disabled='currentDetail.childValue<=0' @click='currentDetail.childValue--'>-</el-button><el-input v-model='currentDetail.childValue'></el-input><el-button @click='currentDetail.childValue++'>+</el-button></div>
        </div>
      </div>
      <div class="detail-down">
        <span>日历价格为起价,订单最终价格以确定出游方案为准</span>
      </div>
    </div>
    <div class="sign-up-footer">
      <p><span>{{currentDetail.peopleValue}}成人，{{currentDetail.childValue}}儿童</span><span>团期:{{date}}</span></p>
      <p><router-link :to='`/editOrder/${currentDetail.id}`'>下一步</router-link></p>
    </div>
  </div>
</template>

<script>
import Back from '../components/Back'
import moment from 'moment'
export default {
name:'SignUp',
computed: {
      currentDetail(){
        return this.$store.getters.currentDetail(this.$route.params.id)
      },
      date(){
        return moment(this.currentDetail.calendarValue).format('YYYY-MM-DD')
      }
    },
components:{
  Back
}
}
</script>

<style lang='scss'>
.sign-up{
  width: 100%;
  background-color: #ededed;
  .el-calendar-table .el-calendar-day{
    height:50px;
    text-align: center;
  }
  .sign-up-detail{
    background-color: #fff;
    width: 100%;
    .detail-top{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    input{
      width: 40px;
      height: 40px;
      background-color:#50bbdb ;
    }
    .change{
      display: flex;
    }
    p{
      display: flex;
      justify-content: space-between;
      span:first-child{
        color:#000;
        font-weight: bold;
      }
      span:last-child{
        color:#f0851a;
      }
    }
    .warn{
      background: url('../assets/images/warn.png') no-repeat 44px center ;
    }
    }
    .detail-down{
        text-align: center;
        line-height: 40px;
      span{
      background: url('../assets/images/warn.png') no-repeat left center;
        font-size: .7rem;
        padding:10px 0 10px 30px;
      }
    }
  }
  .sign-up-footer{
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 30px;
    background-color: #fff;
    p{
      display: flex;
      flex-direction: column;
      font-size: .8rem;
      font-weight: bold;
      border-radius: 5px;
    }
    p:last-child{
      background-color: #50bbdb;
      padding: 10px 30px;
      font-size: .8rem;
      a{
      color:#fff;
text-decoration: none;
      }
    }
  }
}
</style>