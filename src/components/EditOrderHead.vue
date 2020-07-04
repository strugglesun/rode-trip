<template>
  <div class="edit-order-head">
    <Back>
        <slot name='order'></slot>
    </Back>
    <div class="order-head">
      <h3>{{currentDetail.title}}</h3>
    </div>
  </div>
</template>

<script>
import Back from './Back'
export default {
name:'EditOrderHead',
props:['currentDetail'],
components:{
  Back
}
}
</script>

<style lang='scss'>
.edit-order-head{
  width: 100%;
  .order-head{
    width: 100%;
    background-color: #fff;
    padding: 10px 20px;
    margin-bottom: 10px;
    h3{
      font-size: 1rem;
    }
  }
}
</style>