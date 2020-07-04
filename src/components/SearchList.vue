<template>
  <div class="search-list">
    <SearchItem v-for='item in search' :key='item.id' :search='item'/>
  </div>
</template>

<script>
import SearchItem from './SearchItem'
import { mapState } from 'vuex'
export default {
name:'SearchList',
computed:{
...mapState({
  search:state=>state.searchModule.search
})
},
components:{
  SearchItem
}
}
</script>

<style>
.search-list{
  background-color: #f1f1f1;

}
</style>