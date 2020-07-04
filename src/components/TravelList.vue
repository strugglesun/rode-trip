<template>
  <div class="travel-list">
    <span>境内</span>
    <Travel v-for='item in domesticTravel' :key='item.id' :travel='item'/>
    <div class="more">
      <span>MORE</span>
    </div>
    <span>境外</span>
    <Travel v-for='item in noDomesticTravel' :key='item.id' :travel='item'/>
    <div class="more">
      <span>MORE</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Travel from './Travel'
export default {
name:'TravelList',
components:{
  Travel
},
computed:{
  ...mapGetters(['domesticTravel','noDomesticTravel'])
}
}
</script>

<style lang='scss'>
.travel-list{
  text-align: center;
  .more{
    background-color: #f1f1f1;
    margin-bottom: 10px;
    span{
      background-image: url('../assets/images/more.png');
      background-repeat: no-repeat;
    line-height: 40px;
      padding-left: 30px;
      background-position:  0 center;
      margin-bottom: 0;
      color:#eb6417;
    }
  }
  span{
    display: inline-block;
    margin-bottom: 10px;
  }
}
</style>