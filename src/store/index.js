import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCity:{
      province:'福建省',
      city:'厦门市'
    },
    category:[
      {
        cid:'jzzl001',
        cname:'装卸搬运'
      },
      {
        cid:'jzzl002',
        cname:'礼仪'
      },{
        cid:'jzzl003',
        cname:'模特'
      },
      {
        cid:'jzzl004',
        cname:'快递配送'
      },
      {
        cid:'jzzl005',
        cname:'仓库管理'
      },
      {
        cid:'jzzl006',
        cname:'助教'
      },
      {
        cid:'jzzl007',
        cname:'机构教师'
      },
      {
        cid:'jzzl008',
        cname:'才艺教师'
      },
      {
        cid:'jzzl009',
        cname:'课程顾问'
      },
      {
        cid:'jzzl010',
        cname:'运营'
      },
      {
        cid:'jzzl011',
        cname:'资料录入'
      },
      {
        cid:'jzzl012',
        cname:'司机'
      },
      {
        cid:'jzzl013',
        cname:'录音配音'
      },
      {
        cid:'jzzl014',
        cname:'演员'
      },
      {
        cid:'jzzl015',
        cname:'店员'
      },
      {
        cid:'jzzl016',
        cname:'厨师'
      },
      {
        cid:'jzzl017',
        cname:'美容美甲'
      },
      {
        cid:'jzzl018',
        cname:'网店'
      },
      {
        cid:'jzzl019',
        cname:'短视频'
      },
      {
        cid:'jzzl020',
        cname:'电商'
      }

    ]
  },
  getters: {
  },
  mutations: {
    ADD_TO_CITY(state,payload){

      state.currentCity = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
