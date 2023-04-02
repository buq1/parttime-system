<template>
  <div id="app">
    <div class="header">
      <div>
        <Location></Location>
      </div>
      <div>
        <el-input v-show="s_show" :placeholder="searchDefaultText" prefix-icon="el-icon-search" v-model="searchText" @input="sendSearch($event)"></el-input>
      </div>
      <div>
        <p
          v-if="!loginStatus"
          class="loginbutton"
          @click="
            DialogVisible = true
            dialogTitle = '登录'
          "
        >
          登录
        </p>
        <div v-else>
          <el-dropdown :show-timeout="150" @command="exitLogin($event)">
            <el-avatar class="el-dropdown-link" :size="45" :src="hLogo" @error="errorHandler">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
            <el-dropdown-menu>
              <el-dropdown-item command="exit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="left-bar">
          <div :class="isIndex == 1 ? 'leftBarChecked' : 'uncheck-bar'" @click="switchTab(1)">
            <i class="el-icon-house"></i>
            <p>首页</p>
          </div>
          <div :class="isIndex == 2 ? 'leftBarChecked' : 'uncheck-bar'" @click="switchTab(2)">
            <i class="el-icon-circle-plus-outline"></i>
            <p>发布兼职</p>
          </div>
          <div :class="isIndex == 3 ? 'leftBarChecked' : 'uncheck-bar'" @click="switchTab(3)">
            <i class="el-icon-place"></i>
            <p>逛一逛</p>
          </div>
          <div :class="isIndex == 4 ? 'leftBarChecked' : 'uncheck-bar'" @click="switchTab(4)">
            <i class="el-icon-message"></i>
            <p>消息</p>
          </div>
          <div :class="isIndex == 5 ? 'leftBarChecked' : 'uncheck-bar'" @click="switchTab(5)">
            <i class="el-icon-user"></i>
            <p>我的</p>
          </div>
        </div>
      </div>
      <div><router-view /></div>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="DialogVisible" :close-on-click-modal="false" width="30%">
      <login
        @loginsuccess="
          DialogVisible = false
          hLogo = $store.state.user.avator
        "
      ></login>
    </el-dialog>
  </div>
</template>
<script>
import login from './components/login.vue'
import Location from './components/location.vue'
export default {
  data() {
    return {
      isIndex: 1,
      searchDefaultText: '大家都在搜索：',
      searchText: '', //搜索内容
      dialogTitle: '',
      DialogVisible: false,
      s_show: true, //搜索框显示与隐藏
      hLogo: '', //头像
      initTime: null
    }
  },
  components: {
    Location,
    login
  },
  computed: {
    loginStatus() {
      return this.$store.state.loginStatus
    }
  },
  created() {
    if (this.Cookies.get('user')) {
      console.log(JSON.parse(this.Cookies.get('user')))
      this.$store.commit('CHANGE_LOGINSTATUS')
      this.$store.commit('ADD_USER', JSON.parse(this.Cookies.get('user')))
      this.hLogo = this.$store.state.user.avator
    } else {
      if (sessionStorage.getItem('user')) {
        this.$store.commit('CHANGE_LOGINSTATUS')
        this.$store.commit('ADD_USER', JSON.parse(sessionStorage.getItem('user')))
        this.hLogo = this.$store.state.user.avator
      }
    }
  },
  methods: {
    switchTab(val) {
      this.isIndex = val
      switch (val) {
        case 1:
          this.$router.push({ path: '/' })
          break
        case 2:
          this.$router.push({ path: '/postjob' })
          break
        case 3:
          this.$router.push({ path: '/map' })
          break
        case 4:
          this.$router.push({ path: '/info' })
          break
        default:
          this.$router.push({ path: '/personal' })
          break
      }
    },
    sendSearch(v) {
      if (this.$route.path != '/map') {
        if (this.initTime != null) clearTimeout(this.initTime)
        this.initTime = setTimeout(() => {
          this.$router.replace({ path: `/search/${v}` })
        }, 1000)
      }
      // let now = new Date()
      // if (this.initTime == null) {
      //   this.initTime = now
      //   this.$router.replace({ path: `/search/${v}` })
      // } else {
      //   console.log(now - this.initTime)
      //   if (now - this.initTime > 3000) {
      //     this.initTime = now
      //     this.$router.replace({ path: `/search/${v}` })
      //   }
      // }
    },
    errorHandler() {
      return true
    },
    exitLogin(e) {
      if (e == 'exit') {
        this.Cookies.remove('user')
        sessionStorage.removeItem('user')
        this.$store.commit('CHANGE_LOGINSTATUS')
        this.$store.commit('ADD_USER', null)
        this.hLogo = null
      }
    }
  },
  watch: {
    $route(to) {
      switch (to.path) {
        case '/':
          this.isIndex = 1
          this.s_show = true
          break
        case '/map':
          this.isIndex = 3
          this.s_show = true
          break
        case '/postjob':
          this.isIndex = 2
          this.s_show = false
          break
        case '/info':
          this.isIndex = 4
          this.s_show = false
          break
        case '/personal':
          this.isIndex = 5
          this.s_show = false
          break
        default:
          this.s_show = true
      }
    }
  }
}
</script>

<style>
.loginbutton {
  cursor: pointer;
}
.loginbutton:hover {
  color: cadetblue;
}
html,
body {
  margin: 0;
  padding: 0;
}
.el-dropdown-link {
  cursor: pointer;
}
.leftBarChecked {
  pointer-events: none;
  background: #f9dd32;
}
.header {
  width: 100%;
  height: 70px;
  background-color: #f9dd32;
  box-shadow: 0px -3px 2px 1px #f4eeda inset;
  display: flex;
  justify-content: space-around;
}
.header > div > .el-input {
  padding: 0px 20px;
  background-color: #fff;
  border-radius: 20px;
}
.header > div > div > .el-input__inner {
  width: 300px;
  border: none;
}
.header > div {
  display: flex;
  align-items: center;
}
.header > div:first-child {
  width: 100px;
}
.content {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
}
.content > div:first-child {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  box-shadow: 3px 0px 2px 1px #f3f3f3;
}
.content > div:nth-child(2) {
  width: calc(100vw - 100px);
  height: inherit;
}
.left-bar > div {
  width: 100px;
  margin-top: 10px;
  padding-top: 10px;
  text-align: center;
  height: 90px;
  cursor: pointer;
}
.uncheck-bar:hover {
  background: radial-gradient(closest-corner at 85%, #f9dd32, #fff);
}

.left-bar > div > i {
  font-size: 40px;
  font-weight: bold;
}
.left-bar > div > p {
  margin: 10px 0;
}
</style>
