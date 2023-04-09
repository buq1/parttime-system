<template>
  <div class="t-nav">
    <div>
      <div class="nav-header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item replace :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item replace :to="{ path: '/tobezpf' }">成为招聘方</el-breadcrumb-item>
          <el-breadcrumb-item>新增企业</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-divider></el-divider>
      <div class="nav-middle">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="公司名称">
            <el-input class="n-s" v-model="form.m_name"></el-input>
          </el-form-item>
          <el-form-item label="公司LOGO">
            <el-upload action="http://127.0.0.1:8088/up" :on-success="handleSuccess" :on-error="handleError" list-type="picture-card" name="f" :limit="1" :on-exceed="throwOver">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                  <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="公司统一社会信用码">
            <el-input class="n-s" v-model="form.m_shxydm"></el-input>
          </el-form-item>
          <el-form-item label="公司营业执照照片">
            <el-upload action="http://127.0.0.1:8088/up" name="f" list-type="picture-card" :on-success="handleSuccess1" :on-error="handleError" :limit="1" :on-exceed="throwOver">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                  <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="公司简介">
            <el-input type="textarea" v-model="form.m_infor"></el-input>
          </el-form-item>
          <el-form-item label="公司环境照片">
            <el-upload class="upload-demo" action="http://127.0.0.1:8088/up" :on-success="handleSuccess2" :limit="6" :on-exceed="throwOver" name="f" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :multiple="true" list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <div class="tit">*创建人为该公司在本平台的最高管理员*</div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交申请</el-button>
          </el-form-item>
          <div class="clearfloat"></div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { postRequest } from '@/axios/api'
export default {
  data() {
    return {
      form: {
        m_name: '',
       m_photo: [],
        m_shxydm: '',
        m_infor: '',
        m_logo: '',
        m_yyzz: ''
      },
      fileList: [],
      dialogVisible: false,
      disabled: false,
      dialogImageUrl: ''
    }
  },
  methods: {
    handleSuccess(res, file, fileList) {
      this.form.m_logo = res.data
    },
    handleSuccess1(res, file, fileList) {
      this.form.m_yyzz = res.data
    },
    handleSuccess2(res, file, fileList) {
      console.log(res)
      this.form.m_photo.push(res.data)
      console.log(this.form.m_photo)
      
    },
    handleError(err, file, fileList) {
      console.log(err)
    },
    handleRemove(file, fileList) {
      console.log(file)
    },
    handlePreview(file) {
      console.log(file)
    },
    throwOver(file, fileList) {
      this.$message.error('文件数量超出限制,限制为1个')
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    onSubmit() {
      this.form.m_creater = this.$store.state.user.id

      postRequest("/newMechanism",this.form).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      this.$notify({
        title: '成功',
        message: '成功提交申请，我们将第一时间审批',
        offset: 100
      })
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
.clearfloat {
  clear: both;
  height: 0;
  font-size: 1px;
  line-height: 0px;
}
.tit {
  color: red;
}
.n-s {
  width: 250px;
}
.nav-middle {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 80px;
}
.t-nav {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background-color: #f6f6f8;
}
.t-nav > div {
  width: 1200px;
  box-sizing: border-box;
  padding-bottom: 30px;
  background-color: #fff;
  height: auto !important;
  min-height: 860px;
}
.nav-header {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 15px;
}
.el-breadcrumb {
  font-size: 16px;
}
.el-breadcrumb > span:first-child > span {
  cursor: pointer;
}

.el-divider {
  margin: 0 0 15px 0 !important;
}
</style>
