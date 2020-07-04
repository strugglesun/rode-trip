<template>
  <div class="order-list">
    <Order v-for='item in showOrder' :key='item.id' :order='item'/>
  </div>
</template>

<script>
import Order from './Order'
import {mapState} from 'vuex'
export default {
name:"OrderList",
components:{
  Order
},
computed:{
  ...mapState({
    showOrder:state=>state.orderModule.showOrder
  })
}
}
</script>

<style lang='scss'>
.order-list{
  background-color: #f1f1f1;
  overflow: hidden;
}
</style>