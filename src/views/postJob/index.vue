<template>
  <div class="p-nav">
    <div v-if="role" class="r-nav">
      <div>
        <el-button class="r-button" @click="switchToBe" round>成为招聘方</el-button>
      </div>
    </div>
    <div v-else class="nav">
      <el-row>
        <el-col :span="18">
          <div class="left-nav">
            <div>
              <div class="tit-header">新增兼职岗位</div>

              <div class="nav-middle">
                <el-form ref="form" :model="form" label-width="90px">
                  <el-form-item label="岗位名">
                    <el-input class="f-name" placeholder="输入岗位名" v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="薪资">
                    <el-input v-model="form.xz" class="f-name"></el-input>
                  </el-form-item>
                  <el-form-item label="类别">
                    <el-radio-group v-model="form.class">
                      <el-radio label="短期兼职"></el-radio>
                      <el-radio label="长期兼职"></el-radio>
                      <el-radio label="网络兼职"></el-radio>
                      <el-radio label="假期兼职"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="工作类型">
                    <el-select v-model="form.type">
                      <el-option v-for="item in typeList" :key="item.cid" :label="item.cname" :value="item.cid"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="工作时间">
                    <el-col :span="11">
                      <el-time-picker type="date" placeholder="选择开始时间" v-model="form.time1" style="width: 100%"></el-time-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-time-picker placeholder="选择结束时间" v-model="form.time2" style="width: 100%"></el-time-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="工作介绍">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                  <el-form-item label="工作地址">
                    <el-input class="idno-style" placeholder="输入工作地址" v-model="form.address"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交申请</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="right-top-nav">
            <search :title="tit1"></search>
            <div style="width: 100%; height: 55px"></div>
            <div class="right-bar" v-for="item in zpingList">
              <el-col :span="19">
                <div class="code-style">No:11111111111</div>
                <div class="zw-style">
                  <span>职位名</span>
                  <sapn>薪资</sapn>
                </div>
                <div class="address-style">工作地址：</div>
                <div class="time-style">发布时间</div>
              </el-col>
              <el-col :span="5">
                <div class="col-right-top">下线</div>
                <div class="col-right-bottom">编辑</div>
              </el-col>
            </div>
          </div>
          <div class="right-bottom-nav">
            <search :title="tit2"></search>
            <div style="width: 100%; height: 55px"></div>
            <div class="right-bar" v-for="item in history">
              <el-col :span="19">
                <div class="code-style">No:11111111111</div>
                <div class="zw-style">
                  <span>职位名</span>
                  <sapn>薪资</sapn>
                </div>
                <div class="address-style">工作地址：</div>
                <div class="time-style">发布时间</div>
              </el-col>
              <el-col :span="5">
                <div class="col-right-top">上线</div>
                <div class="col-right-bottom">编辑</div>
              </el-col>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import search from '@/components/search.vue'
export default {
  data() {
    return {
      role: true,
      form: {
        name: '',
        xz: '',
        type: '',
        address: '',
        desc: '',
        time1: '',
        time2: '',
        class: ''
      },
      typeList: [],
      tit1: '在招岗位',
      tit2: '历史岗位',
      zpingList: [],
      history: []
    }
  },
  components: {
    search
  },
  created() {
    this.typeList = this.$store.state.category
  },
  methods: {
    switchToBe() {
      this.$router.push({ name: 'cwzpf' })
    },
    onSubmit() {
      console.log('submit!')
      this.$notify({
        title: '成功',
        message: '成功提交申请，我们将第一时间审批',
        offset: 100
      })
      this.form = {
        name: '',
        xz: '',
        type: '',
        address: '',
        desc: '',
        time1: '',
        time2: '',
        class: ''
      }
    }
  }
}
</script>

<style scoped>
.address-style,
.time-style {
  margin-left: 3px;
  width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  overflow: hidden;
}
.code-style {
  color: darkgray;
  margin: 3px 0px 0px 3px;
}
.zw-style {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.zw-style > span {
  font-size: 24px;
  color: red;
}
.right-bar {
  width: 98%;
  height: 120px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 3px 3px;
}
.col-right-top {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: white;
  background-color: rgb(246, 83, 83);
}
.col-right-bottom {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: black;
  background-color: rgb(81, 79, 79);
}
.line {
  text-align: center;
}
.nav-middle {
  width: 100%;
  padding: 30px 20px;
}
.f-name {
  width: 250px;
}
.tit-header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  padding-bottom: 15px;
  border-bottom: black 1px solid;
}
.left-nav {
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  padding: 10px 20px;
  border-right: #f6f6f8 1px solid;
  overflow-y: auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
}
.left-nav > div {
  width: 1200px;
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
}
.right-top-nav {
  width: 100%;
  height: calc(50vh - 35px);
  box-sizing: border-box;
  overflow-y: auto;
  background-color: #f6f6f8;
}
.right-bottom-nav {
  width: 100%;
  height: calc(50vh - 35px);
  box-sizing: border-box;
  overflow-y: auto;
  background-color: #f6f6f8;
}
.right-top-nav,
.right-bottom-nav {
  position: relative;
}
.right-bottom-nav > div:first-child,
.right-top-nav > div:first-child {
  position: absolute;
  top: 0;
  left: 0;
}
.nav {
  width: 100%;
  height: 100%;
}
.p-nav {
  width: 100%;
  height: 100%;
  background-color: #f6f6f8;
}
.r-nav {
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
.r-nav > div {
  width: 300px;
  height: 100px;
}
.r-button {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 214, 54);
  border-radius: 50px;
  font-size: 28px;
}
</style>
