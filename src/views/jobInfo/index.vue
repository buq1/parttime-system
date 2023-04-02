<template>
  <div class="j-nav">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>岗位详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="header-nav">
        <div class="job-title">需电脑/学剪辑在家做19-35岁</div>
        <div class="gs-name">杭州鲸辉科技有限公司</div>
        <div class="job-base"><span>800元/天</span>&nbsp;|&nbsp;<span>摄影剪辑</span>&nbsp;|&nbsp;<span>发布时间：刚刚</span></div>
        <div class="enroll-button">报名兼职</div>
      </div>
      <div class="job-content">
        <ul class="job-list">
          <li><span>上班地点:</span>&nbsp;<sapn>全国</sapn>&nbsp;<span>不限城市</span>&nbsp;<span>不限地区</span></li>
          <li><span>工作种类:</span>&nbsp;<span>长期兼职</span></li>
          <li><span>工作时间:</span>&nbsp;<span>00:00-00:00</span></li>
          <li><span>结算方式:</span>&nbsp;<span>日结</span></li>
          <li><span>基本工资:</span>&nbsp;<span>800元/天</span></li>
        </ul>
        <div class="box">
          <div class="detail-title">岗位详情</div>
          <div class="detail">【温馨提示】 报名后请第一时间点击右下方“立即报名”，报名后留意“消息”窗口联系企业，然后主动复制添加老师，才算报名成功。</div>
        </div>
      </div>
      <div class="map-box"></div>
      <div class="box">
        <span class="warning-text">提示: 凡收取费用，需缴纳押金的企业均有欺诈嫌疑，请您警惕！</span>
      </div>
      <div class="bottom-nav">
        <div class="tab-tit"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tab-tit {
  width: 100%;
  height: 50px;
  border-bottom: #ddd solid 1px;
}
.bottom-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0px;
}
.warning-text {
  color: #ee531d;
}
.map-box {
  overflow: hidden;
  position: relative;
  z-index: 0;
  background-color: rgb(243, 241, 236);
  color: black;
  text-align: left;
  width: 100%;
  height: 170px;
}
.detail {
  word-break: break-all;
  word-wrap: break-word;
  color: #646464;
  line-height: 26px;
}
.detail-title {
  font-size: 20px;
  color: #646464;
  padding-left: 12px;
  font-weight: bold;
  border-left: 4px solid #ff923a;
  line-height: 20px;
  margin-bottom: 30px;
}
.box {
  padding: 20px 0;
  color: #323232;
}
.job-list {
  font-size: 15px;
  line-height: 2;
  margin: 10px 0 !important;
  list-style: none;
  padding: 0 !important;
}
.job-list > li {
  color: #333;
  text-align: -webkit-match-parent;
}

.job-list > li > span:first-child {
  color: #aaaaaa !important;
}
.job-content {
  padding: 10px 30px;
  width: 100%;
  box-sizing: border-box;
}
.enroll-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: #ff923a;
  border-bottom: 3px solid #ff7d2b;
  padding: 0 30px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.enroll-button:hover {
  background-color: #ff7d2b;
}
.j-nav /deep/ .el-breadcrumb {
  font-size: 20px;
  margin: 10px 0px;
}
.job-base {
  font-size: 20px;
  line-height: 1.5;
  color: #8b8b8c;
}
.job-base > span:first-child {
  color: #ff9844;
}
.job-base > span:nth-child(2) {
  color: #3a89e2;
}
.job-title {
  color: #333;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
}
.j-nav {
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
}
.j-nav > div {
  width: 1200px;
  padding: 10px;
  box-sizing: border-box;
}
.gs-name {
  color: #aaaaaa;
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 10px;
}
.header-nav {
  width: 100%;
  background-color: rgb(248, 248, 250);
  height: 140px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
}
</style>
