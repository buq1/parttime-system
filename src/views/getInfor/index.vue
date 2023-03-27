<template>
  <div class="i-nav">
    <div>
      <el-col class="left-bar" :span="6">
        <div class="tit">
          <div></div>
        </div>
        <div class="bar scroller">
          <div class="nav" v-for="item in 20">{{ item }}</div>
        </div>
      </el-col>
      <el-col :span="18"></el-col>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.left-bar {
  position: relative;
  box-sizing: border-box;
  height: 100%;
}
.left-bar > div {
  padding-top: 0px !important;
  margin-top: 0px !important;
}
.bar {
  width: 100%;
  height: 90.5%;
  overflow-y: auto;
}
.tit {
  width: 100%;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(46, 46, 46);
  border-bottom: rgb(102, 102, 102) 1px solid;
}
.nav {
  width: 100%;
  height: 80px;
  background-color: rgb(61, 61, 61);
  border-bottom: rgb(46, 46, 46) 1px solid;
}
.left-bar > div:nth-child(2) {
  margin-top: 81px !important;
}
.i-nav {
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
}
.i-nav > div {
  width: 1400px;
  height: 95%;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
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
  background-color: black;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
</style>
