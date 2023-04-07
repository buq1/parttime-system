<template>
  <div class="c-nav">
    <div class="c-header">
      <span @click="$router.go(-1)">&lt;返回</span>
    </div>
    <div class="c-middle">
      <el-button type="primary" round @click="dialogVisible = true">添加简历</el-button>
    </div>
    <div class="c-bottom">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="简历编号" min-width="80"> </el-table-column>
        <el-table-column prop="alias" label="简历名称" min-width="100"> </el-table-column>
        <el-table-column prop="name" label="姓名" min-width="60"> </el-table-column>
        <el-table-column prop="phone" label="联系方式" min-width="60"> </el-table-column>
        <el-table-column prop="sex" label="性别" min-width="30"> </el-table-column>
        <el-table-column prop="birthday" label="出生年月" min-width="100"> </el-table-column>
        <el-table-column prop="school" label="就读学校" min-width="80"> </el-table-column>
        <el-table-column prop="major" label="就读专业" min-width="80"> </el-table-column>
        <el-table-column prop="introduce" label="个人介绍" min-width="300"> </el-table-column>
        <el-table-column prop="status" label="简历状态" min-width="40"> </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="success" size="small">编辑</el-button>
            <el-button @click="onDelete(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="ctitle" center :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="from" label-width="80px">
        <el-form-item label="简历名称">
          <el-input v-model="from.alias"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="from.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="from.phone"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="from.sex"></el-input>
        </el-form-item>
        <el-form-item label="出生年月">
          <el-input v-model="from.birthday"></el-input>
        </el-form-item>
        <el-form-item label="就读学校">
          <el-input v-model="from.school"></el-input>
        </el-form-item>
        <el-form-item label="就读专业">
          <el-input v-model="from.major"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍">
          <el-input v-model="from.introduce"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交审批</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      this.dialogVisible = true
      this.from = row
    },
    onSubmit() {
      console.log('submit!')
      this.$notify({
        title: '成功',
        message: '成功提交申请，我们将第一时间审批',
        offset: 100
      })
      this.dialogVisible = false
      this.from = {
        alias: '',
        name: '',
        phone: '',
        sex: '',
        birthday: '',
        school: '',
        major: '',
        introduce: ''
      }
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
  },

  data() {
    return {
      tableData: [
        {
          id: 1,
          alias: '第一份简历',
          name: '张三',
          phone: '1008611',
          sex: '男',
          birthday: '',
          school: 'xxxxxxxx',
          major: '.......',
          introduce: 'asdsadsadaxxzxcxzcxzcxzcxzcxzczxcxzc          zxcczczxczxczxczczczxczxczczxczxxzcxzcxzcxzcxzczxcxzcxzcxzcxzczxcccccc',
          status: '待审批中'
        }
      ],
      ctitle: '',
      dialogVisible: false,
      from: {
        alias: '',
        name: '',
        phone: '',
        sex: '',
        birthday: '',
        school: '',
        major: '',
        introduce: ''
      }
    }
  }
}
</script>

<style scoped>
.c-bottom {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.c-middle {
  width: 100%;
  margin: 15px 0;
  box-sizing: border-box;
  padding: 0 30px;
}
.c-nav {
  width: 100%;
  height: inherit;
  overflow-y: auto;
}
.c-header {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #aaa;
}
.c-header > span {
  cursor: pointer;
}
.c-header > span:hover {
  color: blue;
}
</style>
