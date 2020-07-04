<template>
  <div class="insurance">
        <OrderHead>保险</OrderHead>
        <div class="insurance-content">
          <el-checkbox :value='insuranceChecked' @change='change'>平安爱自驾境外长线保险 经典型 </el-checkbox>
          <span><span class="price">￥177</span>/一份</span>
        </div>
      </div>
</template>

<script>
import OrderHead from './OrderHead'
import { mapState, mapMutations } from 'vuex'
export default {
name:'Insurance',
computed: {
  ...mapState({
    insuranceChecked:state=>state.checkedModule.insuranceChecked
  })
},
methods: {
  ...mapMutations(['handleInsurance']),
  change(e){
   this.handleInsurance(e)
  }
},
components:{
  OrderHead
}
}
</script>

<style lang='scss'>
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
</style>