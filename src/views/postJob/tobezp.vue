<template>
  <div class="t-nav">
    <div>
      <div class="nav-header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item replace :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>成为招聘方</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-divider></el-divider>
      <div class="nav-middle">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="姓名">
            <el-input class="f-name" placeholder="输入姓名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="任职岗位">
            <el-input v-model="form.post"></el-input>
          </el-form-item>
          <el-form-item label="联系号码">
            <el-input class="idno-style" placeholder="输入手机号码" v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="身份证号码">
            <el-input class="idno-style" placeholder="输入身份证号码" v-model="form.idno"></el-input>
          </el-form-item>

          <el-form-item label="身份证正反面照片">
            <el-upload action="http://127.0.0.1:8088/oss/policy" :on-success="handleSuccess" list-type="picture-card" :limit="2" :on-exceed="throwOver">
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
              <div slot="tip" class="el-upload__tip">身份证正反面照片各一张，只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>

          <el-form-item label="个人招聘">
            <el-switch v-model="form.type"></el-switch>
          </el-form-item>
          <el-form-item v-show="!form.type" label="公司名称">
            <el-autocomplete v-model="form.mname" :trigger-on-focus="false" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"> </el-autocomplete>
            <span class="tit-newm">没有找到？点此<span class="font-color" @click="toNewM">新增招聘企业</span></span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交申请</el-button>
          </el-form-item>
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
        name: '',
        type: false,
        post: '',
        idno: '',
        mname: '',
        photo:[],
        jgid:'',
        phone:''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    handleSuccess(res,file,fileList){
        this.form.photo.push(res.data.imageurl)
        console.log(this.form.photo)
    },
    onSubmit() {
      let data={
         ri_id:this.$store.state.user.user_id,
         ri_jgid:this.form.jgid,
         ri_position:this.form.post,
         ri_phone:this.form.phone,
         ri_sfz:this.form.idno,
         ri_name:this.form.name,
         ri_sfzzp:JSON.stringify(this.form.phone)
      }
      console.log(data)
      postRequest("/newrinfor",data).then(
        res=>{
          this.$notify({
        title: '成功',
        message: '成功提交申请，我们将第一时间审批',
        offset: 100
      })
      this.$router.replace({ path: '/' })
        }
      ).catch(err=>console.log(err))

    },
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    throwOver(file, fileList) {
      this.$message.error('文件数量超出限制,限制为2个')
    },
    querySearchAsync(queryString, cb) {
      let results=[]
       let data={
          m_name:queryString
        }
        postRequest("/queryMechanism",data).then(res=>{
           
           results = res.data.data.map(item=>{
            return{ value:item.m_name,id:item.m_id}
           })
           console.log(results)
           cb(results)
        }).catch(err=>console.log(err))
    },
    handleSelect(item) {
      console.log(item)
      this.form.jgid = item.id
    },
    toNewM() {
      this.$router.push({ name: 'mecha' })
    }
  }
}
</script>

<style scoped>
.font-color {
  color: rgb(5, 127, 233);
  cursor: pointer;
}
.tit-newm {
  margin-left: 20px;
}
.idno-style {
  width: 300px;
}
.nav-middle {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 80px;
}
.f-name {
  width: 260px;
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
  height: auto;
  background-color: #fff;
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
