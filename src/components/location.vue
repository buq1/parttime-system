<template>
  <div>
    <div class="l-nav">
      <el-cascader @blur="showChange($event)" :show-all-levels="false" ref="checkInput" v-show="isShow" placeholder="试试搜索城市" :options="options" @change="checkCity($event)" filterable> </el-cascader>
      <span v-show="!isShow" @click="checkShow()">{{ checkedCity }}</span>
      <i v-show="!isShow" class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import oData from '../utils/cityData.js'
export default {
  data() {
    return {
      isShow: false,
      options: []
    }
  },
  created() {
    this.options = oData.provinceCityDataLabel
    this.getCurrentCity()
  },
  computed: {
    checkedCity() {
      return this.$store.state.currentCity.city
    }
  },
  methods: {
    checkShow() {
      this.isShow = true
      this.$nextTick(() => {
        this.$refs.checkInput.$refs.input.focus()
      })
    },
    checkCity(city) {
      let pc = { province: city[0], city: city[1] }
      this.$store.commit('ADD_TO_CITY', pc)
      this.isShow = false
    },
    showChange(v) {
      const dom = document.getElementsByClassName('el-cascader__dropdown')
      if (dom[0].style.display == 'none' && this.isShow) {
        this.isShow = false
      }
    },
    getCurrentCity() {
      console.log(navigator.geolocation)
    }
  }
}
</script>

<style scoped>
.l-nav {
  font-size: 20px;
}
.l-nav > span {
  cursor: pointer;
}
</style>
