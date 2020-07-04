<template>
  <div class="back-head">
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
.back-head{
  position: relative;
    z-index: 4;
  background-color: #50bbdb;
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  div{
    width: 65%;
    display: flex;
    justify-content: space-between;
    h3{
      flex-grow: 0;
      // margin-left: 10%;
    }
    .ac{
      text-align: right;
    }
  }
  h3{
    // flex-grow: 1;
    width: 60%;
    // text-align: center;
    color:#fff;
    // margin: 60px 0;
    font-size: 1rem;
    line-height: 60px;
    // padding-right: 16%;
  }
  }
</style>