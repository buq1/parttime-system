<template>
  <div class="s-nav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>公告</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <div>
        <h2>1111111111111111111111</h2>
        <p>公告编码：{{ notice.id }}</p>
        <div class="img-style"><el-image :src="notice.photo" fit="fill"> </el-image></div>
        <div class="nav-style">{{ notice.nav }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: {
        id: '1',
        title: '11111111111111111111111111111111111',
        photo: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        nav: '222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'
      }
    }
  }
}
</script>

<style scoped>
.nav-style {
  box-sizing: border-box;
  padding: 20px 40px;
  width: 100%;
  table-layout: fixed;
  word-break: break-all;
  overflow: hidden;
  line-height: 30px;
  font-size: 24x;
}
h2 {
  text-align: center;
}
p {
  color: darkgrey;
}
.search {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.img-style {
  width: 100%;
  display: flex;
  justify-content: center;
}
.img-style /deep/ .el-image {
  width: 80%;
  height: 450px;
}
.search > div {
  width: 1000px;
}
.s-nav {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px 15px 0px 15px;
  box-sizing: border-box;
}
.s-nav /deep/ .el-breadcrumb {
  font-size: 18px;
}
</style>
