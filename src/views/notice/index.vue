<template>
  <div class="s-nav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>公告</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <div>
        <h2>{{ notice.n_title }}</h2>
        <p>公告编码：{{ notice.n_id }}</p>
        <div class="img-style"><el-image :src="notice.n_photo" fit="fill"> </el-image></div>
        <div class="nav-style" v-html="notice.n_nav"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRequest } from '@/axios/api';
export default {
  data() {
    return {
      notice: {
      }
    }
  },
  created(){
    this.getNoticeInfo(this.$route.params.nid)
  },
  methods:{
    getNoticeInfo(val){
       getRequest('/getnbyid?nid='+val).then(res=>{
        this.notice = res.data.data
       }).catch(err=>{
        console.log(err)
       })
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
