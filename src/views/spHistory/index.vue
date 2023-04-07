<template>
  <div class="s-nav">
    <div class="s-bar">
      <el-card>
        <el-steps :active="1" finish-status="success" slot="header">
          <el-step title="提交审批"></el-step>
          <el-step title="审批中"></el-step>
          <el-step title="完成审批"></el-step>
        </el-steps>
        <div class="sp-item">
          <span>审批类型:</span><span class="spone">简历</span><span class="sptwo">审批提交时间:</span><span class="spone">简历</span>
          <br />
          <span>审批内容名称:</span><span class="spone">简历</span><span class="sptwo">审批内容ID:</span><span class="spone">简历</span>
          <br />
          <span>审批结束时间:</span><span class="spone">简历</span>
        </div>
        <el-button type="danger">撤销</el-button>
      </el-card>
    </div>
    <div class="s-bar">
      <el-card>
        <el-steps :active="2" finish-status="success" slot="header">
          <el-step title="提交审批"></el-step>
          <el-step title="审批中"></el-step>
          <el-step title="完成审批"></el-step>
        </el-steps>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.spone {
  color: #aaa;
  margin-left: 10px;
}
.sptwo {
  margin-left: 20px;
}
.sp-item > span {
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
}
.s-bar {
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
}
.s-nav {
  width: 100%;
  height: inherit;
  box-sizing: border-box;
  padding: 10px 10px 0px 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}
</style>
