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
      options: [],
      checkedCity: '厦门'
    }
  },
  created() {
    this.options = oData.provinceCityDataLabel
  },
  methods: {
    checkShow() {
      this.isShow = true
      this.$nextTick(() => {
        this.$refs.checkInput.$refs.input.focus()
      })
    },
    checkCity(city) {
      this.checkedCity = city[1]
      this.isShow = false
    },
    showChange(v) {
      const dom = document.getElementsByClassName('el-cascader__dropdown')
      console.log(dom[0].style.display)
      console.log(dom[0].style.display == 'none')
      if (dom[0].style.display == 'none' && this.isShow) {
        this.isShow = false
      }
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
