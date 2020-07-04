<template>
  <div class="add-tourist">
    <BackHead>
      <h3>添加常用游客</h3>
      <h3 @click='back'>保存</h3>
    </BackHead>
    <ul>
      <li><span>姓名</span><input type="text" placeholder="必填" v-model="name"></li>
      <li><span>手机</span><input type="text" placeholder="选填"></li>
    </ul>
  </div>
</template>

<script>
import BackHead from '../components/BackHead'
import { mapMutations } from 'vuex'
export default {
name:'AddTourist',
components:{
  BackHead
},
data(){
  return{
    name:''
  }
},
methods: {
  ...mapMutations(['addTourist']),
  back(){
    this.$router.back()
    this.addTourist(this.name)
  }
},
}
</script>

<style lang='scss'>
.add-tourist{
  width: 100%;
  ul{
    margin: 0 10px;
    li{
      border-bottom: 1px solid #ccc;
      padding: 10px 20px;
      input{
        border: 0;
        outline: none;
        margin-left: 20px;
        font-size: .8rem;
      }
    }
  }
}
</style>