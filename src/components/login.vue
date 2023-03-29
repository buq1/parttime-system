<template>
  <div class="l-nav">
    <div v-if="zc">
      <div class="cancelbutton" @click="changeDl">&lt&nbsp;返回</div>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="account">
        <el-input v-model="ruleForm.account" placeholder="请输入账户名">
          <template v-slot:prepend><i class="el-icon-user-solid"></i></template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" autocomplete="off">
          <template v-slot:prepend><i class="el-icon-lock"></i></template>
        </el-input>
      </el-form-item>

      <el-form-item v-if="!zc">
        <div class="spacebewteen">
          <el-radio v-model="ruleForm.verify" :label="true" @click.native.prevent="changeStatus()">记住我</el-radio>
          <div class="zc">没有账号？点此<span @click="changeZc">注册</span></div>
        </div>
      </el-form-item>
      <el-button type="primary" @click="loginFn('ruleForm')"><span v-if="!zc">登录</span><span v-else>注册</span></el-button>
    </el-form>
  </div>
</template>

<script>
import { postRequest } from '@/axios/api'
export default {
  name: 'login',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        account: '',
        password: '',
        verify: false
      },
      rules: {
        account: [
          { required: true, message: '请输入账户', trigger: 'blur' },
          { min: 3, max: 12, message: '账户长度不符合标准', trigger: 'blur' }
        ],
        password: [{ validator: validatePass, trigger: 'blur' }]
      },
      zc: false
    }
  },
  methods: {
    loginFn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            adminId: this.ruleForm.account,
            adminPassword: this.ruleForm.password
          }
          if (!this.zc) {
            postRequest(url.login, data).then(
              res => {
                if (res.status >= 200 && res.status < 300) {
                  if (res.data.code == 400) {
                    this.$message.error(res.data.message)
                    return
                  } else {
                    sessionStorage.setItem('token', res.data.data.token)
                    sessionStorage.setItem('username', res.data.data.username)
                    this.$router.push({ name: 'home' })
                  }
                } else {
                  this.$message.error('网络或服务器错误！')
                }
                //   if (this.ruleForm.verify) {
                //     localStorage.setItem('token', res.data.token)
                //   } else {
                //     sessionStorage.setItem('token', res.data.token)
                //   }
                //   setTimeout(() => {
                //     this.$router.push('/')
                //   }, 2000)
              },
              error => {
                console.log(error)
              }
            )
          } else {
            postRequest(url.login, data)
              .then(res => {
                if (res.status >= 200 && res.status < 300) {
                  if (res.data.code == 400) {
                    this.$message.error(res.data.message)
                    return
                  } else {
                    this.$message.success('注册成功，请登录')
                    this.changeDl()
                  }
                } else {
                  this.$message.error('网络或服务器错误！')
                }
              })
              .catch(error => {
                console.log(error)
              })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    changeStatus() {
      this.ruleForm.verify = !this.ruleForm.verify
    },
    changeZc() {
      this.zc = true
    },
    changeDl() {
      this.zc = false
    }
  }
}
</script>

<style scoped>
.cancelbutton {
  transform: translate(-50px, -20px);
  cursor: pointer;
  font-size: 16px;
  color: #767677;
}
.zc {
  font-size: 14px;
  line-height: 1;
  font-family: 'Microsoft YaHei';
}
.zc > span {
  color: #0756e7;
  cursor: pointer;
}
.spacebewteen {
  display: flex;
  justify-content: space-between;
}
.l-nav /deep/ .el-form-item__content {
  margin: 0px !important;
}
p {
  color: #0756e7;
  font-size: 14px;
}
.l-nav > form > button {
  margin-top: 18px;
  width: 100%;
}
.demo-ruleForm {
  width: 350px;
  margin-top: 22px;
}
.el-input {
  margin-top: 9px;
}
.l-nav {
  color: #333333;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
