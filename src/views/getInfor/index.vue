<template>
  <div class="i-nav">
    <div>
      <el-col class="left-bar" :span="6">
        <div :class="sShow ? 'showSearch' : 'tit'">
          <div v-show="!sShow">
            <el-avatar :size="55" class="tlogo" :src="headerLogo">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
          </div>
          <div class="search-tt">
            <i v-show="!sShow" @click.stop="changeShow" class="el-icon-search"></i>
            <el-input v-show="sShow" class="input-style" v-model="searchText" placeholder="请输入内容" @input="sendString" @blur="changeShow">
              <template slot="prepend"><i class="el-icon-search"></i></template>
            </el-input>
          </div>
        </div>
        <div class="bar scroller">
          <div v-if="this.user.role == 1">
            <div v-if="zpltList.length == 0">抱歉，没有聊天历史</div>
            <div class="nav" v-for="item in zpltList" @click="showLtInfo(item)">
              <div class="bar-header">
                <el-avatar :size="45" class="tlogo" :src="headerLogo">
                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                  <div class="txdp">{{ item }}</div>
                </el-avatar>
              </div>
              <div class="jjl">
                <span>21313 22222222222222222</span><span>1231231</span>
                <br />
                <div>2132132131231312312</div>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-if="yhltList.length == 0">抱歉，没有聊天历史</div>
            <div class="nav" v-for="item in yhltList">
              <div class="bar-header">
                <el-avatar :size="45" class="tlogo" :src="headerLogo">
                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                  <div class="txdp">{{ item }}</div>
                </el-avatar>
              </div>
              <div class="jjl">
                <span>21313 22222222222222222</span><span>1231231</span>
                <br />
                <div>2132132131231312312</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div v-if="this.user.role == 1" class="right-top-bar">
          <div class="tit-header">
            <p class="i-name">{{ jianliinfo.name }}</p>
            <p class="i-jobname">{{ jianliinfo.gwname }}</p>
            <p class="i-sex">{{ jianliinfo.sex }}</p>
            <p class="i-age">{{ jianliinfo.age }}</p>
            <br />
            <p class="i-school">{{ jianliinfo.xx }}</p>
            <p class="i-zy">{{ jianliinfo.zy }}</p>
            <br />
            <p class="i-jj" :title="jianliinfo.grjj">{{ jianliinfo.grjj }}</p>
          </div>
          <div class="aniu-s">
            <el-button type="success">接受</el-button>
            <el-button type="danger">拒绝</el-button>
          </div>
        </div>
        <div v-else class="right-top-bar">
          <div class="tit-header"></div>
          <div class="aniu-s">
            <el-button type="danger">拒绝</el-button>
          </div>
        </div>
        <div class="ltk scroller">
          <div v-for="(item, index) in ltjl" :key="index">
            <div class="time-bar">{{ item.shijian }}</div>
            <div :class="user.id == item.sendid ? 'floatright' : 'floatleft'">
              <el-avatar>
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
              </el-avatar>
            </div>
            <div class="kk-style" :class="user.id == item.sendid ? 'floatright right-ltbar' : 'floatleft left-ltbar'">
              {{ item.neirong }}
            </div>
          </div>
        </div>
        <div>
          <el-input type="textarea" @keydown.native.enter="sendText" placeholder="请输入内容,按Enter键发送" v-model.trim="messageText" maxlength="45" show-word-limit resize="none"></el-input>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerLogo: '',
      sShow: false,
      searchText: '',
      messageText: '',
      jianliinfo: {
        name: '1',
        gwname: '1',
        sex: '1',
        age: '1',
        xx: '1',
        zy: '1',
        jlid: '1',
        gwid: '1',
        grjj: 'flex-direction的值有:row：横向从左到右排列（左对齐），默认的排列方式。row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。column：纵向排列。column-reverse： '
      },
      user: {},
      ltjl: [],
      zpltList: [{ sid: '1111', jid: '1111', gid: '1111' }], //用户id，简历id，岗位id
      yhltList: ['1', '2', '3'],
      lsname: ''
    }
  },
  created() {
    this.user = this.$store.state.user
    this.lsname = 'jllist' + this.user.id
    let qq = setInterval(() => {
      console.log('获取数据')

      // 连接服务器，需要按user.role来划分返回zpltList或yhltList的数据
      if (this.user.role == 1) {
        this.zpltList.push('')
      } else {
        this.yhltList.push('')
      }
    }, 2000)
    this.$once('hook:beforeDestroy', () => {
      clearInterval(qq)
      qq = null
      if (this.user.role == 1) {
        let obj = JSON.stringify(this.zpltList)
        localStorage.setItem(this.lsname, obj)
      } else {
        let obj = JSON.stringify(this.yhltList)
        localStorage.setItem(this.lsname, obj)
      }
    })

    this.initLtlist()
  },

  methods: {
    initLtlist() {
      if (localStorage.getItem(this.lsname)) {
        if (this.user.role == 1) {
          this.zpltList = JSON.parse(localStorage.getItem(this.lsname))
        } else {
          this.yhltList = JSON.parse(localStorage.getItem(this.lsname))
        }
      }
    },
    changeShow() {
      this.sShow = !this.sShow
    },
    sendString(e) {
      console.log(e)
    },
    sendText() {
      if (this.messageText == '') return false
      if (this.user.role == 1) {
        const jlid = this.jianliinfo.jlid
        const gwid = this.jianliinfo.gwid
      } else {
        const jlid = ''
        const gwid = ''
      }
      const nr = this.messageText
      const sendid = this.user.id
      const shijian = new Date()
      const year = shijian.getFullYear()
      const month = shijian.getMonth() + 1
      const date = shijian.getDate()
      const time = shijian.getHours()
      const minuth = shijian.getMinutes()
      const seconds = shijian.getSeconds()
      const sj = `${year}年${month}月${date}日 ${time}:${minuth}:${seconds}`
      const jsid = ''
      const message = { sendid, jsid, neirong: nr, shijian: sj, jlid: jlid }
      this.ltjl.push(message)
      const bs = `${sendid}${jsid}${gwid}${jlid}`
      sessionStorage.setItem(bs, JSON.stringify(this.ltjl))
      this.messageText = ''
    },
    showLtk() {},
    showLtInfo(item) {
      let bs = `${this.user.id}${item.sid}${item.jid}${item.gwid}`
      if (localStorage.getItem(bs)) {
        this.ltjl = JSON.parse(localStorage.getItem(bs))
      }
      // this.jianliinfo
    }
  }
}
</script>

<style scoped>
.txdp {
  position: absolute;
  right: -5px;
  top: 12px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  color: white;
  line-height: 20px;
  text-align: center;
}
.bar-header {
  position: relative;
}
.jjl {
  width: 248px;
  text-align: left;
}
.jjl > span:first-child,
.jjl > span:nth-child(2) {
  font-size: 20px;
  color: white;
  display: inline-block;
  line-height: 40px;
  max-width: 124px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.jjl > div {
  max-width: 248px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(153, 153, 153);
}
.kk-style {
  max-width: 50%;
  border-radius: 6px;
  height: auto;
  padding: 6px;
  margin: 0 8px;
  line-height: 26px;
}
.left-ltbar {
  position: relative;
  background-color: #f5f6f7;
}
.right-ltbar {
  position: relative;
  background-color: greenyellow;
}
.left-ltbar::after {
  content: ' ';
  position: absolute;
  top: 13px;
  right: 100%;
  border-right: 5px solid #f5f6f7;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
  width: 0;
  height: 0;
}
.right-ltbar::after {
  content: ' ';
  position: absolute;
  top: 11px;
  left: 100%;
  border-left: 5px solid greenyellow;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  width: 0;
  height: 0;
}
.floatleft {
  float: left;
}
.floatright {
  float: right;
}
.time-bar {
  width: 100% !important;
  height: 30px !important;
  display: flex;
  line-height: 30px;
  color: darkcyan;
  justify-content: center;
}
.ltk {
  width: 100%;
  height: 530px;
  overflow-y: auto;
  padding: 0px 10px;
  box-sizing: border-box;
  clear: both;
}

.i-name {
  font-size: 24px;
  height: auto;
  color: darkgray;
}
.i-jobname {
  font-size: 20px;
  font-weight: bold;
  color: red;
  margin-left: 15px !important;
}
.i-sex {
  color: darkcyan;
  margin-left: 15px !important;
}
.i-age {
  color: darkcyan;
  margin-left: 15px !important;
}
.i-school {
  font-size: 18px;
  margin-top: 5px !important;
  color: darkcyan;
}
.i-zy {
  font-size: 18px;
  margin: 5px 0px 0px 15px !important;
  color: darkcyan;
}
.i-jj {
  margin-top: 5px !important;
  font-size: 18px;
  color: darkcyan;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tit-header {
  width: 950px;
  height: 90px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0px 10px;
}
.tit-header > p {
  display: inline-block;
  margin: 0;
}
.aniu-s {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.aniu-s /deep/ .el-button {
  margin-left: 0px !important;
  margin-right: 10px;
}
.right-top-bar {
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: #dcdfe6 1px solid;
}
.i-nav /deep/ textarea {
  min-height: 160px !important;
}
.input-style {
  margin: 0px 0px 0px 12.5px;
}
.search-tt {
  color: #f6f6f6;
  font-weight: bold;
  font-size: 36px;
  margin: 12.5px 12.5px 0 0;
}
.tlogo {
  margin: 12.5px 0 0 12.5px;
}
.left-bar {
  position: relative;
  box-sizing: border-box;
  height: 100%;
}
.left-bar > div {
  padding-top: 0px !important;
  margin-top: 0px !important;
}
.bar {
  width: 100%;
  height: 90.5%;
  overflow-y: auto;
}
.showSearch {
  width: 100%;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: rgb(46, 46, 46);
  border-bottom: rgb(102, 102, 102) 1px solid;
}
.tit {
  width: 100%;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: rgb(46, 46, 46);
  border-bottom: rgb(102, 102, 102) 1px solid;
}
.nav {
  width: 100%;
  height: 80px;
  background-color: rgb(61, 61, 61);
  border-bottom: rgb(46, 46, 46) 1px solid;
  display: flex;
  justify-content: space-between;
}
.left-bar > div:nth-child(2) {
  margin-top: 81px !important;
}
.i-nav {
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
}
.i-nav > div {
  width: 1400px;
  height: 95%;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
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
  background-color: black;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
</style>
