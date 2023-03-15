<template>
  <div class="j-nav">
    <el-row type="flex" justify="space-between">
      <el-col :xs="12" :md="8" :xl="4">
        <el-card shadow="hover">
          <div>
            <img />
            <p>250元/天</p>
            <span>网站精选</span>
          </div>
          <div>图图工作室</div>
          <div><i class="el-icon-guide"></i>翻斗路250号翻斗花园1号楼1104室</div>
          <div>
            <span><i class="el-icon-coin"></i>日结</span><span><i class="el-icon-timer"></i>00:00-08:00</span>
          </div>
          <div>
            <span><i class="el-icon-s-custom"></i>李总·人事主管</span><span>距离<5km</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.j-nav {
  width: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  .el-row {
    width: inherit;
  }
}
</style>
