<template>
  <div class="content-route">
        <OrderHead/>
        <div class="name">
          <p>自驾团名称:{{currentDetail.title}}</p>
          <p><span>出游日期:{{date}}</span><el-button><router-link :to='`/signUp/${currentDetail.id}`'>修改</router-link></el-button></p>
          <p>出游人数:{{currentDetail.peopleValue+'成人，'+currentDetail.childValue+'儿童'}}</p>
          <slot name='room'></slot>
          <slot name='agree'></slot>
        </div>
      </div>
</template>

<script>
import moment from 'moment'
import OrderHead from './OrderHead'
export default {
name:'RouteMessage',
components:{
  OrderHead
},
props:['currentDetail'],
data(){
  return{
    radio:'1',
  }
},
computed:{
  date(){
        return moment(this.currentDetail.calendarValue).format('YYYY-MM-DD')
 }
}
}
</script>

<style lang='scss'>
.content-route{
      background-color: #fff;
      margin-bottom: 10px;
      border-radius: 10px;
      .name{
        padding: 10px 20px;
        .room{
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          
          .room-content{
            display: flex;
            margin: 0 10px;
          }
        }
        .agree-room{
          display: flex;
          // align-items: center;
          span{
            font-size: .8rem;
          }
          .agree-room-content{
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            .el-radio{
              margin-bottom: 10px;
            }
          }
        }
        p{
          margin-bottom: 10px;
          color:#333333;
          font-size: .8rem;
        }
        p:nth-child(2){
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        button{
          a{
      color:#007aff
          }
        }
        .el-input{
      width: 40px;
      height: 40px;
    }
      }
    }
</style>