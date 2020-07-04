<template>
  <div class="leader">
    <div class="leader-head">
      <img :src="imgurl" alt="" @click='back'>
      <h3>领队介绍</h3>
    </div>
    <div class="leader-content">
      <p><img :src="imgur2" alt=""><span>中国自驾游联盟南京站</span></p>
      <article>
         自2005年开始，南京首家专业自驾车旅游公司--“中国自驾游联盟”，本着以城
         市为中心，以旅行社为龙头，自驾游自助游为纽带的发展宗旨，通过强劲发展，现
         已覆盖全国20多个省200多个城市，总部设在南京，在“专业保障，旅游保险，特色
         活动，媒体支撑”的指导思想指引下平均年组织车友实施自驾游旅游活动百余次，
         参加人员达数万人！近年来，我们策划与服务的自驾游车队达400余个参加车辆超过
         2000辆，参加的车友近十万多人次！我们的行程遍布华南、华中、华北、西北、西南
         20余省、区，并多次成功举办主题自驾活动，同时在尝试开辟国外自驾游市场，引导
         及推动着中国自驾游的方向与潮流，赢得了广大媒体与各路车会的关注与信任，成为
         本地区自驾最具活力、最具经验、最具规模、最具口碑的专业机构。</article>
    </div>
  </div>
</template>

<script>
export default {
name:'Leader',
data(){
  return{
    imgurl:require('../assets/images/pre.png'),
    imgur2:require('../assets/images/leader.jpg')
  }
},
methods: {
  back(){
    this.$router.back()
  }
},
}
</script>

<style lang="scss">
.leader{
  width: 100%;
  .leader-head{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #50bbdb;
    display: flex;
    justify-content: start;
    align-items: center;
    h3{
      color:#fff;
      flex-grow: 1;
      line-height: 60px;
      text-align: center;
      padding-right: 10%;
    }
  }
  .leader-content{
    padding: 20px;
    p{
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        border-bottom: 1px solid #ccc;
        flex-grow: .5;
        text-align: center;
        padding-bottom: 10px;
      }
    }
    article{
      padding: 10px 20px;
      border: 1px solid #ccc;
      font-size: .8rem;
      margin-top: 20px;
    }
  }
}
</style>