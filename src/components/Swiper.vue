<template>
  <div class="swiper">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in swiper" :key="index"><img :src="item" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div> 
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
name:'swiper',
data(){
  return{
    swiper:[
      require('../assets/images/swiper1.jpg'),
      require('../assets/images/travel1.jpg'),
      require('../assets/images/travel2.jpg')
      ]
  }
},
mounted() {
 new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })        
},
}
</script>

<style lang='scss'>
.swiper{
  width: 100%;
  img{
    width:100%;
  }
}

</style>