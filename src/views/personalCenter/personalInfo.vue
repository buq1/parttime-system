<template>
  <div class="p-nav">
    <div>
      <div class="p-header">
        <span @click="$router.go(-1)">&lt;返回</span>
      </div>
      <div class="p-middle">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" action="#" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码">
            <el-input type="password" v-model="form.checkpass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">修改</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="role == 1" class="p-bottom">
        <div class="xxgl">招聘者信息</div>
        <div class="xx-bar">
          <el-form ref="roleform" :model="roleForm" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="roleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="roleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="职位">
              <el-input v-model="roleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="任职公司">
              <el-input disabled v-model="roleForm.gs"></el-input>
              <p>&nbsp;</p>
              <el-button type="danger" @click="onExit">退出公司</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        avator: '',
        pass: '',
        checkpass: ''
      },
      imageUrl: '',
      roleForm: {
        name: '',
        phone: '',
        position: '',
        gs: ''
      }
    }
  },
  computed: {
    role() {
      return this.$store.state.user.role
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onExit() {
      this.MessageBox.confirm('此操作将退出公司，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({ type: 'success', message: '退出成功！' })
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.xx-bar {
  width: 100%;
  margin-top: 20px;
}
.xxgl {
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #409eff;
}
.avatar-uploader .el-upload {
  border: 1px dashed #7c5d5dd4;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.p-middle {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
.p-header {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #aaa;
}
.p-nav {
  width: 100%;
  height: inherit;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  display: flex;
  justify-content: center;
}
.p-nav > div {
  width: 800px;
}
</style>
