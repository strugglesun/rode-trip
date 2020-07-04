<template>
  <div class="agreement">
    <el-checkbox :value='agreementChecked' @change='change'>已阅读并同意爱自驾旅游协议</el-checkbox>
  </div>
</template>

<script>
import { mapState ,mapMutations} from 'vuex'
export default {
name:'Agreement',
computed: {
  ...mapState({
    agreementChecked:state=>state.checkedModule.agreementChecked
  })
},
methods: {
  ...mapMutations(['handleAgreement']),
  change(e){
    this.handleAgreement(e)
  }
},
}
</script>

<style lang='scss'>
.agreement{
    margin: 10px 0;
    text-align: center;
  }
</style>