<template>
  <div class="travel-message">
        <OrderHead>游客信息
          <template v-solt='travel'>
              <router-link to='/selectTourist'>常用游客</router-link>
          </template>
        </OrderHead>
        <div class="travel-message-content">
          <ul v-if='selectedTourist.length>0'>
            <li v-for='item in selectedTourist' :key='item.id'>{{item.name}}</li>
          </ul>
          <p><router-link to='/addTourist'>添加游客</router-link></p>
        </div>
      </div>
</template>

<script>
import OrderHead from './OrderHead'
import { mapGetters } from 'vuex'
export default {
name:'TouristMessage',
components:{
  OrderHead
},
computed: {
  ...mapGetters(['selectedTourist'])
},
}
</script>

<style lang='scss'>
.travel-message{
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 10px;
    .travel-message-content{
    padding: 10px 20px;
    width: 100%;
    p{
      // padding-left: 30px;
      line-height: 40px;
      background: url('../assets/images/addTravel.png') no-repeat right center;
      a{
        display: inline-block;
        width: 100%;
        color:#50bbdb;
      }
    }
    li{
      background: url('../assets/images/tourist.png') no-repeat left center;
      border-bottom: 1px solid #ccc;
      padding: 10px 0 10px 30px;
      font-size: .8rem;
    }
    }
  }
</style>