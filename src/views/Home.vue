<template>
  <div class="home">
    <HeaderItem/>
    <Swiper/>
    <Search/>
    <TravelList/>
    <HomeFooter/>
  </div>
</template>

<script>
import HeaderItem from '../components/HeaderItem'
import Swiper from '../components/Swiper'
import Search from '../components/Search'
import TravelList from '../components/TravelList'
import HomeFooter from '../components/HomeFooter'
export default {
  name: 'Home',
  components:{
    HeaderItem,
    Swiper,
    Search,
    TravelList,
    HomeFooter
  }
}
</script>
