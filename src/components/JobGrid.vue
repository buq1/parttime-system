<template>
  <div class="j-nav">
    <el-row type="flex" justify="flex-start">
      <el-col :xs="12" :md="8" :xl="4" v-for="i in 100">
        <div class="card-box">
          <el-card shadow="hover"  @click.native="switchJob(i)">
            <div>
              <el-image :src="imgUrl" lazy></el-image>
              <div>
                <p>250元/天</p>
                <span class="jx-title">网站精选</span>
                <span class="jl-title">距离&lt;5km </span>
              </div>
            </div>
            <div class="job-name">京东分拣员</div>
            <div class="employer-name">图图工作室</div>
            <div class="address-bar"><i class="el-icon-guide"></i>翻斗路250号翻斗花园1号楼1104室</div>
            <div class="info-bar">
              <span><i class="el-icon-coin"></i>日结</span><span><i class="el-icon-timer"></i>00:00-08:00</span>
            </div>
            <div class="publisher-info">
              <span><i class="el-icon-s-custom"></i>李总·人事主管</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require('@/assets/jobimg/jingdong.png')
    }
  },
  props:{
    JobList:{
      type:Object,
      require
    }
  },
  methods: {
    switchJob(e) {
      this.$router.push({path:`/job/${e}`})
    }
  }
}
</script>

<style lang="scss" scoped>
.j-nav {
  width: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  .el-row {
    width: inherit;
    flex-wrap: wrap;
    .el-col {
      .card-box {
        width: 100%;
        height: 100%;
        padding: 10px 15px;
        box-sizing: border-box;
        .el-card {
          cursor: pointer;
          .el-card__body {
            width: 100%;
            > div:first-child {
              width: 100%;
              display: flex;
              /deep/ .el-image {
                width: 50%;
                height: 0;
                margin: 0;
                padding-top: 50%;
                position: relative;
                img {
                  position: absolute;
                  top: 0;
                  left: 0;
                }
              }
              > div:nth-child(2) {
                width: 50%;
                clear: both;
                p {
                  width: 100%;
                  text-align: right;
                  font-size: 20px;
                  font-weight: bold;
                  color: red;
                  margin: 10px 0;
                }
                .jx-title {
                  display: block;
                  width: auto;
                  float: right;
                  font-size: 14px;
                  padding: 2px 5px;
                  background-color: yellow;
                  color: red;
                  font-weight: 400;
                }
                .jl-title {
                  display: block;
                  width: auto;
                  text-align: right;
                  width: 100%;
                  margin-top: 58px;
                  font-size: 12px;
                  color: cadetblue;
                }
              }
            }
            .job-name {
              width: 100%;
              line-height: 40px;
              font-size: 22px;
              color: rgb(124, 175, 238);
            }
            .employer-name {
              width: 100%;
              line-height: 22px;
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .address-bar {
              width: 100%;
              margin-top: 6px;
              color: rgb(171, 171, 171);
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
            .info-bar {
              margin-top: 10px;
              width: 100%;
              display: flex;
              justify-content: space-between;
              color: rgb(171, 171, 171);
            }
            .publisher-info {
              margin-top: 10px;
              color: rgb(171, 171, 171);
            }
            i {
              font-size: 20px;
              font-weight: bold;
              margin-right: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
