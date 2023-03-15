<template>
  <div class="i-nav scroller">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in imageList" :key="item.id">
        <router-link :to="item.url">
          <el-image :src="item.src" class="img"></el-image>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="middle-col">
      <div>
        <div class="col-style">
          <div>
            <i class="el-icon-time"></i>
          </div>
          <p>短期兼职</p>
        </div>
        <div class="col-style">
          <div>
            <i class="el-icon-suitcase"></i>
          </div>
          <p>长期兼职</p>
        </div>
        <div class="col-style">
          <div>
            <i class="el-icon-monitor"></i>
          </div>
          <p>网络兼职</p>
        </div>
        <div class="col-style">
          <div>
            <i class="el-icon-date"></i>
          </div>
          <p>假期兼职</p>
        </div>
      </div>
    </div>
    <div class="check-col">
      <div class="check-col-left">
        <i class="el-icon-postcard"></i>
        <div class="left-bar-logo"></div>
        <div class="left-bar-tit">
          <h3>设置求职意向</h3>
          <span>根据您的选择，更好地为您推荐岗位</span>
        </div>
        <div class="split-line"></div>
      </div>
      <div class="check-col-middle">
        <div>
          <div class="check-button">不限</div>
          <div class="check-button" v-for="item in category" :key="item.cid">
            {{ item.cname }}
          </div>
          <el-dropdown placement="bottom-end" trigger="click">
            <div class="check-button" @click.stop="showCa()" v-if="category.length >= 14">更多</div>
            <el-dropdown-menu :append-to-body="false" class="dropdown-container">
              <el-dropdown-item v-for="item in surplusCa" :key="item.cid">
                <div class="check-button">
                  {{ item.cname }}
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="split-line"></div>
      </div>
      <div class="check-col-right">
        <div class="check-button">不限</div>
        <div class="check-button" v-for="item in countyList" :key="item.value">
          {{ item.label }}
        </div>
        <el-dropdown placement="bottom-end" trigger="click" v-if="countyList.length >= 10">
          <div class="check-button" @click.stop="showCounty()">更多</div>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in surplusCy" :key="item.value">
              {{ item.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="job-grid">
      <JobGrid></JobGrid>
    </div>
  </div>
</template>
<script>
import JobGrid from '@/components/JobGrid.vue'
export default {
  data() {
    return {
      imageList: [
        {
          id: 1,
          src: require('../../assets/banner1.png'),
          url: ''
        },
        {
          id: 2,
          src: require('../../assets/banner2.png'),
          url: ''
        },
        {
          id: 3,
          src: require('../../assets/banner3.jpg'),
          url: ''
        },
        {
          id: 4,
          src: require('../../assets/banner4.jpg'),
          url: ''
        },
        {
          id: 5,
          src: require('../../assets/banner5.jpg'),
          url: ''
        },
        {
          id: 6,
          src: require('../../assets/banner6.png'),
          url: ''
        }
      ],
      surplusCa: [],
      surplusCy: []
    }
  },
  components: {
    JobGrid
  },
  computed: {
    category() {
      if (this.$store.state.category.length < 15) return this.$store.state.category
      else return this.$store.state.category.slice(0, 14)
    },
    countyList() {
      if (this.$store.state.countyList.length > 10) {
        return this.$store.state.countyList.slice(0, 10)
      }
      return this.$store.state.countyList
    }
  },
  methods: {
    showCa() {
      if (!this.surplusCa.length > 0) {
        this.surplusCa = this.$store.state.category.slice(14, this.$store.state.category.length)
      }
    },
    showCounty() {
      this.surplusCy = this.$store.state.countyList.slice(10, this.$store.state.countyList.length)
    }
  }
}
</script>

<style scoped>
.job-grid {
  margin-top: 15px;
  width: 100%;
  height: auto;
}
.check-col-right {
  display: flex;
  flex-wrap: wrap;
}
.dropdown-container {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 735px;
  top: 30px !important;
}
.el-dropdown {
  position: relative;
}
.dropdown-container /deep/ .el-dropdown-menu__item {
  padding: 0;
  margin: 0;
  width: 90px;
  height: 40px;
}
.check-button {
  width: 70px;
  height: 30px;
  margin: 5px 10px;
  background-color: #fcf7e3;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
}
.check-col-middle {
  position: relative;
  padding: 0 15px 0 0;
  box-sizing: border-box;
}
.check-col-middle > div:first-child {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
}
.split-line {
  position: absolute;
  width: 2px;
  top: 5px;
  right: 10px;
  height: 70px;
  background-color: #eddfaf;
}
.left-bar-tit {
  margin-left: 10px;
}
.left-bar-tit > h3 {
  color: black;
  font-size: 24px;
  margin: 8px 0px;
}
.left-bar-tit > span {
  color: #6d6751;
}
.check-col-left {
  padding: 0px 20px;
  position: relative;
}
.check-col-left > i {
  color: #dfa64d;
  font-size: 80px;
  z-index: 1;
}
.left-bar-logo {
  width: 65px;
  height: 52px;
  top: 14px;
  left: 27px;
  position: absolute;
  background-color: #f5c75a;
  z-index: 0;
}
.check-col {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: #f7eab6;
}
.check-col > div {
  margin: 10px 0px;
  height: 80px;
  display: flex;
}
.check-col > div:first-child {
  width: 390px;
}
.check-col > div:nth-child(2) {
  width: 800px;
}
.check-col > div:nth-child(3) {
  width: 540px;
}
.col-style {
  padding: 16px 16px 0px 16px;
  cursor: pointer;
}
.col-style > div {
  width: 64px;
  height: 64px;
  border-radius: 32px;

  text-align: center;
  color: white;
  line-height: 64px;
  font-size: 42px;
}
.col-style:first-child > div {
  background-color: #fea485;
}
.col-style:nth-child(2) > div {
  background-color: #27a6e0;
}
.col-style:nth-child(3) > div {
  background-color: #93cd4e;
}
.col-style:nth-child(4) > div {
  background-color: #e72b29;
}
.middle-col {
  width: 100%;
  display: flex;
  justify-content: center;
}
.middle-col > div {
  width: 1200px;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.i-nav {
  padding: 20px 0px;
  width: 100%;
  height: inherit;
  box-sizing: border-box;
  background-color: #f6f6f8;
  overflow-y: scroll;
}
.scroller::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scroller::-webkit-scrollbar-track {
  background-color: transparent;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
.scroller::-webkit-scrollbar-thumb {
  background-color: rgb(147, 147, 153, 0.5);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

.img {
  width: 100%;
  height: 100%;
}
.i-nav /deep/ .el-carousel {
  overflow-y: hidden;
}
.i-nav /deep/ .el-carousel__container {
  z-index: 0;
  overflow: hidden;
}
.i-nav /deep/ .el-carousel__indicators {
  transform: translateY(-34px);
  z-index: 1;
}
.i-nav /deep/ .el-carousel__button {
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: #fff !important;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.i-nav /deep/ .el-carousel {
  box-sizing: border-box;
  height: 400px !important;
}
</style>
