<template>
  <div class="s-nav scroller">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>搜索列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <JobGrid></JobGrid>
    </div>
  </div>
</template>

<script>
import JobGrid from '@/components/JobGrid.vue'
export default {
  components: {
    JobGrid
  }
}
</script>

<style scoped>
.search {
  margin-top: 15px;
  width: 100%;
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
  background-color: yellow;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
</style>
