<template>
  <div class="order-line">
    <span class="line"></span>
    <slot name='txt'></slot>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
name:'Linea'
}
</script>

<style lang='scss'>
.order-line {
  //  height: 60px;
  width: 100%;
   line-height: 40px;
  //  text-align: center;d
  display: flex;
  align-items: center;
   background-color: #f5f5f5;
   .line {
   display: inline-block;
   width: 35%;
   border-top: 1px solid #ccc ;
  }
.txt {
     text-align: center;
  width: 30%;
   vertical-align: middle;
   font-size: .8rem;

  }
}
</style>