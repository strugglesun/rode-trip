<template>
  <div class="travel">
    <router-link :to='`/travel/${travel.id}`'><img :src="travel.imgUrl" alt=""></router-link>
    <p>线路：{{travel.route}}</p>
  </div>
</template>

<script>
export default {
name:'Travel',
props:['travel']
}
</script>

<style lang='scss'>
.travel{
  width: 100%;
  text-align: start;
  img{
    width: 100%;
  }
  p{
    margin:0px 0 15px 10px;
    font-size: 0.8rem;
  }
}
</style>