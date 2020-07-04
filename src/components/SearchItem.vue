<template>
  <div class="searchitem">
    <img :src="search.imgurl" alt="">
    <div class="content">
      <h3>{{search.title}}</h3>
      <p>{{search.route}}</p>
      <span class="slogan">{{search.slogan}}</span>
      <p class="p-guide">
        <span>{{search.guide}}</span>
        <span>{{search.price}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
name:'SearchItem',
props:['search']
}
</script>

<style lang='scss'>
.searchitem{
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  background-color: #fff;
  img{
  width: 150px;
  height: 150px;
  display: block;
  }
  .content{
    padding: 0 10px;
    flex-grow: 1;
    h3{
    font-size: .8rem;
    margin:0;
    font-weight: bold;
  }
  P{
    font-size: .6rem;
    margin: 10px 0;
    // overflow: hidden;
    // text-overflow: clip;
    // white-space: nowrap;
  }
  .slogan{
    color:#999999;
    font-size: .6rem;
  }
  .p-guide{
    display: flex;
    justify-content: space-between;
      margin: 0;
    align-items: center;
    span:first-child{
      color:#666666;
      padding-left: 30px;
      background: url('../assets/images/guide.png') no-repeat left center;
      line-height: 40px;
    }
    span:last-child{
      color:#ea561d;
      font-size: .8rem;
    }
  }
  }
}
</style>