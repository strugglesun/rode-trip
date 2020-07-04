<template>
  <div class="search">
    <el-input v-model="input" placeholder="搜索目的地 如南京"></el-input>
    <div class="icon" @click='submit'></div>
  </div>
</template>

<script>
export default {
name:'search',
data(){
  return {
input:''
  }
},
methods: {
  
  submit(){

    if(this.input==='南京'){
      // console.log(this.$router)
      this.$router.push('/search')

    }
  }
},
}
</script>

<style lang='scss'>
.search{
  position: relative;
  width: 100%;
  height: 60px;
  background-image: url('../assets/images/search.png');
  background-repeat: no-repeat;
  background-position: center center;
  input{
    width: 250px;
    height: 40px;
    margin:10px 0 0 50px;
    outline: 0;
    border: 0;
  }
  .icon{
    width: 40px;
    height: 40px;
    position: absolute;
    top:10px;
    right: 45px;
  }
}
</style>