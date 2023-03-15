<template>
  <div class="component-wrap">
    <el-form ref="form" :model="form" label-width="80px">
      <section style="display: flex; align-items: center; margin-bottom: 20px">
        <label for="form.bank" style="width: 170px">收款账号开户银行查询:</label>
        <el-dropdown trigger="click" placement="bottom-start">
          <el-input placeholder="请选择收款账号开户银行" v-model="form.bank">
            <i slot="suffix" class="el-icon-arrow-down"></i>
          </el-input>
          <el-dropdown-menu slot="dropdown" class="dropdown-container">
            <el-dropdown-item>
              <span type="info" style="background: #f2f3f8; border-radius: 32px; color: #3171f6; padding: 6px 10px" @click="handleItem">热门银行</span>
            </el-dropdown-item>
            <el-dropdown-item class="li-title">ABCDEF</el-dropdown-item>
            <el-dropdown-item class="li-title">GHIJ</el-dropdown-item>
            <el-dropdown-item class="li-title">KLMNO</el-dropdown-item>
            <el-dropdown-item class="li-title">PQRST</el-dropdown-item>
            <el-dropdown-item class="li-title">WXYZ</el-dropdown-item>
            <el-radio-group v-model="radio" class="radio-container" @change="setBank">
              <el-dropdown-item v-for="(item, i) in bankList" :key="i">
                <el-radio :label="item.value">
                  <img :src="item.imgUrl" alt="" /><span>{{ item.name }}</span></el-radio
                >
              </el-dropdown-item>
            </el-radio-group>
          </el-dropdown-menu>
        </el-dropdown>
      </section>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AccountBank',
  props: {},
  data() {
    return {
      radio: '',
      form: {
        bank: ''
      },
      bankList: [
        {
          imgUrl: require('@/assets/logo.png'),
          name: '中国工商银行',
          value: '1'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '中国农业银行',
          value: '2'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '中国银行',
          value: '3'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '兴业银行',
          value: '4'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '广发银行',
          value: '5'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '中国建设银行',
          value: '6'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '浦发银行',
          value: '7'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '招商银行',
          value: '8'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '中国民生银行',
          value: '9'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '中国邮政储蓄银行',
          value: '10'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '中信银行',
          value: '11'
        },
        {
          imgUrl: require('@/assets/logo.png'),
          name: '浙商银行',
          value: '12'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleItem() {
      console.log(111)
    },
    setBank(e) {
      console.log(e, 1111)
      this.form.bank = this.bankList[Number(e) - 1].name
    }
  }
}
</script>

<style scoped lang="scss">
.component-wrap {
  /deep/.el-dropdown {
    width: calc(100% - 170px);
  }
}
.dropdown-container {
  display: flex;
  flex-wrap: wrap;
  width: 558px;

  /deep/.el-radio {
    display: flex;
    align-items: center;
    .el-radio__label {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding-left: 4px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
.radio-container {
  display: flex;
  flex-wrap: wrap;
  /deep/.el-dropdown-menu__item {
    margin: 10px;
    padding: 0;
    width: 160px;
  }
}

/deep/.el-input__suffix-inner {
  line-height: 40px;
}
</style>
