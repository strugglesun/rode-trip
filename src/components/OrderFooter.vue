<template>
  <div class="edit-order-footer">
      <span>总费用:￥{{totalPrice}}</span>
      <slot></slot>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name:'OrderFooter',
computed: {
  ...mapState({
    insuranceChecked:state=>state.checkedModule.insuranceChecked
  }),
  currentDetail(){
    return this.$store.getters.currentDetail(this.$route.params.id)
  },
 totalPrice(){
  return this.insuranceChecked?this.currentDetail.price+177:this.currentDetail.price
 }
}
}
</script>

<style lang='scss' scoped>
.edit-order-footer{
    background-color: #fff;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
       background-color: #50bbdb;
      padding: 10px 20px;
      font-size: .9rem;
      color:#fff;
      border: 0;
      border-radius: 5px;
    }
    .active{
      color:#ccc;
    }
    // p{
    //   background-color: #50bbdb;
    //   padding: 10px 20px;
    //   a{
    //   color:#fff;
    //   text-decoration: none;
    //   }
    // }
    span{
      color:#f98d0d;
    }
  }
</style>