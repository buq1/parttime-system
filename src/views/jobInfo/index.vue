<template>
  <div class="j-nav">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item  @click.native="$router.go(-1)" class="backbutton">返回</el-breadcrumb-item>
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
        <div class="tab-tit">
          <ul class="clearfix">
            <li :class="showBottom==1?'car':''" @click="switchTab(1)">公司介绍</li>
            <li :class="showBottom==2?'car':''" @click="switchTab(2)">工作环境</li>
            <li :class="showBottom==3?'car':''" @click="switchTab(3)">在招兼职</li>
            <li :class="showBottom==4?'car':''" @click="switchTab(4)">公司评价</li>
          </ul>
        </div>
        <div class="tab-con">
           <div class="company-wrap" v-show="showBottom==1?true:false">
            <div class="company-img">
              <el-imgage></el-imgage>
            </div>
            <div class="company-info">
              <span>厦门市信者1科技有限公司</span>
              <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
              <p>
                <span>公司介绍:</span>
                11111111111111
              </p>
              <p>
                <span>公司地址:</span>
                22222222222222222
              </p>
            </div>
           </div>
           <div v-show="showBottom==2?true:false">公司环境</div>
           <div v-show="showBottom==3?true:false">在招兼职</div>
           <div v-show="showBottom==4?true:false">公司评价</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showBottom:1,
      value:3.7
    }
  },
  methods:{
    switchTab(v){
       switch(v){
       case 1:
        this.showBottom = 1
        break;
        case 2:
          this.showBottom = 2
          break
        case 3: 
        this.showBottom = 3
        break
        case 4:
          this.showBottom = 4
          break
       }
    }
  }
}
</script>

<style scoped>
.company-info /deep/ .el-rate{
float: right;
}

.company-info{
  float: left;
}
.company-info>p{
  font-size: 16px;
  color: #aaa;
  line-height: 1.5;
  margin-top: 10px;
  width: 900px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
}
.company-info>p>span{
  color: #333 !important;
}
.company-img{
  width: 120px;
  height: 120px;
  border:1px solid #eee;
  float: left;
  margin-right: 20px;
}
.company-wrap{
  overflow-wrap: break-word;
  display: block;
  overflow: hidden;
  padding: 20px 4px;
  clear: both;
}
.tab-con{
  font-family: "微软雅黑","宋体";
  padding: 16px 36px;
  display: block;
}
.car{
  border-bottom: 3px solid #ff7701;
  color: #ff7701 !important;
  margin-bottom: -1px;
}
.clearfix{
  list-style: none;
  margin:0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  box-sizing: border-box;
}
.clearfix>li{
  float: left;
  padding: 12px 0;
  font-weight: 600;
  color: #646464;
  cursor: pointer;
  margin-right: 40px;
  display: list-item;
}
.clearfix::after{
  content: '\0020';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.backbutton{
  cursor: pointer;
}
.tab-tit {
  width: 100%;
  height: 50px;
  border-bottom: #ddd solid 1px;
  box-sizing: border-box;
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
