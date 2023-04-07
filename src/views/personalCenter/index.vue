<template>
  <div class="p-nav">
    <div>
      <div class="p-header">
        <el-image></el-image>
        <div class="p-title">!!!!!!!!!!!!</div>
      </div>
      <div class="p-bar">
        <div>
          <div class="bar-header" @click="$router.push({ name: 'cv' })">
            <i class="el-icon-document-add"></i>
          </div>
          <div class="bar-bottom">简历管理</div>
        </div>
        <div>
          <div class="bar-header" @click="$router.push({ name: 'sphistory' })">
            <i class="el-icon-receiving"></i>
          </div>
          <div class="bar-bottom">审批列表</div>
        </div>
        <div>
          <div class="bar-header" @click="$router.push({ name: 'pinfo' })">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="bar-bottom">个人信息</div>
        </div>
        <div>
          <div class="bar-header" @click="$router.push({ name: 'company' })">
            <i class="el-icon-set-up"></i>
          </div>
          <div class="bar-bottom">公司管理</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bar-header {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
.bar-bottom {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
.p-bar {
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
}
.p-bar > div {
  width: 200px;
  height: 250px;
  cursor: pointer;
}
.p-bar > div:hover {
  background-color: #f9dd32;
}
.p-header {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #aaa;
}
.p-title {
  margin-top: 15px;
  font-size: 28px;
  color: #aaa;
}
.p-header /deep/ .el-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.p-nav {
  width: 100%;
  height: inherit;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.p-nav > div:first-child {
  width: 1200px;
  margin: 20px 0;
}
</style>
