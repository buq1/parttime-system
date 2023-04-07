<template>
  <div class="c-nav">
    <div class="c-header">
      <span @click="$router.go(-1)">&lt;返回</span>
      <div class="right-header">
        <div :class="isIndex ? 'bgc' : ''" @click="changeTab">招聘人员管理</div>
        <div :class="!isIndex ? 'bgc' : ''" @click="changeTab">公司信息管理</div>
      </div>
    </div>
    <div v-show="isIndex">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" min-width="80"> </el-table-column>
        <el-table-column prop="alias" label="职工姓名" min-width="100"> </el-table-column>
        <el-table-column prop="name" label="职工岗位" min-width="100"> </el-table-column>
        <el-table-column prop="phone" label="职工联系方式" min-width="100"> </el-table-column>
        <el-table-column prop="sex" label="账户状态" min-width="60"> </el-table-column>
        <el-table-column prop="birthday" label="发布岗位数" min-width="100"> </el-table-column>
        <el-table-column prop="birthday" label="招聘人数" min-width="100"> </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="100">
          <template slot-scope="scope">
            <el-button type="primary" size="small">通过</el-button>
            <el-button @click="onDelete(scope.row)" type="danger" size="small">踢除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-show="!isIndex">
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="公司名称">
          <el-input class="n-s" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公司LOGO">
          <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1" :on-exceed="throwOver">
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

        <el-form-item label="公司简介">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="公司环境照片">
          <el-upload class="upload-demo" action="#" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :multiple="true" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交修改申请</el-button>
        </el-form-item>
        <div class="clearfloat"></div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIndex: true,
      tableData: [{}],
      form: {
        name: '',
        logo: '',
        desc: '',
        hjzp: ''
      }
    }
  },
  methods: {
    changeTab() {
      this.isIndex = !this.isIndex
    },
    onDelete(row) {
      this.MessageBox.confirm('此操作将永久删除该简历，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({ type: 'success', message: '删除成功！' })
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.bgc {
  background-color: yellow;
}
.right-header {
  display: flex;
}
.right-header > div {
  padding: 5px 10px;
  border-top: 1px solid #aaa;
  margin: 0px 5px;
  border-left: 1px solid #aaa;
  border-right: 1px solid #aaa;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
}
.c-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.c-header > span {
  cursor: pointer;
}
.c-nav {
  width: 100%;
  height: inherit;
  box-sizing: border-box;
  padding: 10px 20px 0px 20px;
  overflow-y: auto;
}
</style>
