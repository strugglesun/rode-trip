<template>
  <div class="order">
    <div class="order-top">
      <div class="order-top-head">
        <span>订单号: {{order.orderNumber}} | {{order.orderType}}</span>
        <span>预定时间: {{order.orderTime}}</span>
      </div>
      <div class="order-top-down">
        <router-link :to='`/user/${order.id}`'>
        <h3>{{order.orderName}}</h3>
        <div class="content">
          <span>自驾游</span>
        <span>{{order.orderDate}}</span>
        <p>￥{{order.orderPrice}}</p>
        </div>
        </router-link>
      </div>
    </div>
    <div class="order-footer">
      <p>{{order.orderType}}</p>
      <el-button type='primary' size='small' plain>{{order.orderStatus}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
name:'order',
props:['order']
}
</script>

<style lang='scss'>
.order{
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
  span{
    color:#999999;
    font-size: 0.6rem;
  }
  p{
    color:#ea561d;
    margin: 0;
    line-height: 40px;
  }
  .order-top{
    padding: 0 10px;
    overflow: hidden;
    .order-top-head{
      display: flex;justify-content: space-between;
      margin-top: 10px;
    }
    .order-top-down{
      a{
        text-decoration: none;
      }
      .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        margin: 0;
      }
      }
      h3{
        font-size: .8rem;
        color:#000;
        margin: 10px 0;
      }
    }
  }
  .order-footer{
    border-top: 1px #b5b5b5 solid;
    padding: 0 10px;
    display: flex;justify-content: space-between;
    align-items: center;
    span{
      color:#000;
    }
  }
}
</style>