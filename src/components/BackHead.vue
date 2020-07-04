<template>
  <div class="backHead">
      <img :src="imgurl" alt="" @click='back'>
      <slot></slot>
    </div>
</template>

<script>
export default {
name:'Back',
data(){
  return {
    imgurl:require('../assets/images/pre.png')
  }
},
methods: {
  back(){
    this.$router.back()
  }
}
}
</script>

<style lang='scss'>
.backHead{
  background-color: #50bbdb;
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
   h3{
  
    color:#fff;
    // margin: 60px 0;
    font-size: 1rem;
    line-height: 60px;
    // padding-right: 16%;
  }
  
  }
</style>