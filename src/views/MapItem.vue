<template>
  <div class="map-item">
    <Back>
      <h3>我的地图</h3>
    </Back>
    <baidu-map class="map" center="北京">
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true">
    </bm-geolocation>
    <bm-panorama></bm-panorama>
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT">
    </bm-map-type>
  </baidu-map>
  </div>
</template>

<script>
import Back from '../components/Back'
export default {
name:'MapItem',
components:{
  Back
}
}

</script>

<style lang='scss'>
.map-item{
  height:100vh;
  width: 100%;
  .map {
  width: 100%;
  height:100%;
}
}

</style>