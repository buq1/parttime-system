<template>
  <div class="s_nav">
    <div v-show="sshow">{{ title }}</div>
    <div v-show="sshow" class="icon" @click="showSearch">
      <i class="el-icon-search"></i>
    </div>
    <div v-show="!sshow" class="i-nav">
      <el-input class="input-style" placeholder="请输入内容" @input="sendString" @blur="changeShow">
        <template slot="prepend"><i class="el-icon-search"></i></template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '1'
    },
    sshow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    showSearch() {
      this.sshow = false
    },
    sendString(e) {
      console.log(e)
    },
    changeShow() {
      this.sshow = true
    }
  }
}
</script>

<style scoped>
input {
  border: none;
}
.el-input-group__append {
  border: none !important;
}
.input-style {
  border-radius: 17px;
  overflow: hidden;
}
.i-nav {
  width: 100%;
  height: 44px;
}
.s_nav {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 3px 5px;
  box-sizing: border-box;
  justify-content: space-around;
  background-color: #fff;
}
.s_nav > div {
  line-height: 44px;
}
.icon {
  font-size: 22px;
  font-weight: bold;
  color: #b08484;
  cursor: pointer;
}
</style>
