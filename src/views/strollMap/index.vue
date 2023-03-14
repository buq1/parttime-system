<template>
  <baidu-map class="bm-view" ak="G0aKdQDzyPcgtGMwvBcnv0G28tGl5zyn" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-scale>
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import { BmGeolocation, BmScale } from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmGeolocation,
    BmScale
  },
  data() {
    return {
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style scoped>
.bm-view {
  width: calc(100vw - 100px);
  height: calc(100vh - 70px);
}

.bm-view /deep/ .BMap_cpyCtrl {
  display: none;
}

.bm-view /deep/ .anchorBL {
  display: none;
}
</style>
