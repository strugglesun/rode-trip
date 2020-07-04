<template>
  <div>
    <h3><slot>线路信息</slot></h3>
  <slot name='travel'></slot>
  </div>
</template>

<script>
export default {
name:'OrderHead'
}
</script>

<style lang="scss" scoped>
h3{
        line-height: 50px;
        padding: 0 20px;
      font-size: 1rem;
        border-bottom: 1px solid #ccc;
        background: url('../assets/images/order-detail-bgc.png') no-repeat 10px center;
        display: flex;
        justify-content: space-between;
        a{
          color:#50bbdb;
          text-decoration: none;
          font-size: .8rem;
        }
      }
</style>