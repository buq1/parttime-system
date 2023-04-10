import Vue from 'vue'
import Vuex from 'vuex'
import cityData from '@/utils/cityData' 
import { postRequest } from '@/axios/api'
import vue from '@/main'


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
      },
      {cid:'jzzl021',
    cname:'地推'},
    {
      cid:'jzzl022',
      cname:'广告监测'
    },
    {
      cid:'jzzl023',
      cname:'家政'
    },
    {
      cid:'jzzl024',
      cname:'代理'
    },
    {
      cid:'jzzl025',
      cname:'主播'
    },
    {
      cid:'jzzl026',
      cname:'摄影剪辑'
    },
    {
      cid:'jzzl027',
      cname:'客服'
    },
    {
      cid:'jzzl028',
      cname:'线上教师'
    },
    {
      cid:'jzzl029',
      cname:'信息标注'
    },
    {
      cid:'jzzl030',
      cname:'会展活动'
    },
    {
      cid:'jzzl031',
      cname:'手机任务'
    },
    {
      cid:'jzzl032',
      cname:'快递分拣'
    },
    {
      cid:'jzzl033',
      cname:'文案编辑'
    },
    {
      cid:'jzzl034',
      cname:'送餐员'
    },
    {
      cid:'jzzl035',
      cname:'调研'
    },
    {
      cid:'jzzl036',
      cname:'实习'
    },
    {
      cid:'jzzl037',
      cname:'服务员'
    },
    {
      cid:'jzzl038',
      cname:'厂工'
    },
    {
      cid:'jzzl039',
      cname:'设计'
    },
    {
      cid:'jzzl040',
      cname:'文员'
    },
    {
      cid:'jzzl041',
      cname:'派单'
    },
    {
      cid:'jzzl042',
      cname:'家教'
    },
    {
      cid:'jzzl043',
      cname:'演出'
    },
    {
      cid:'jzzl044',
      cname:'翻译'
    },
    {
      cid:'jzzl045',
      cname:'促销'
    },
    {
      cid:'jzzl046',
      cname:'安保'
    },
    {
      cid:'jzzl047',
      cname:'销售导购'
    },
    {
      cid:'jzzl048',
      cname:'其他'
    }
                                
    ],
    countyList:[],
    loginStatus:false,

    user:{
      user_id:'1008611',
      user_role:'0',
      user_name:'',
      user_avator:'',
      user_star:''
    }
  },
  getters: {
  },
  mutations: {
    ADD_TO_CITY(state,payload){
      state.currentCity = payload
    },
    GET_COUNTY(state,payload){  
      state.countyList = cityData.getCounty(payload)
    },
    CHANGE_LOGINSTATUS(state){
        state.loginStatus = !state.loginStatus
    },
    ADD_USER(state,payload){
        state.user = payload
    },

  },
  actions: {
    // getCounty(context){
    //    const {commit}=context
    //    const {state} =context 
    //  commit('GET_COUNTY',cityData.getCounty(state.currentCity))
    // }
    loginUser({commit},payload){
      return new Promise((resolve,reject)=>{
      postRequest('/userlogin', payload).then(
        res => {  
          if (res.status >= 200 && res.status < 300) {
            if (res.data.code == 400) {
              vue.$message.error(res.data.message)
              reject(res.data.message)
            }else if(res.data.code ==20002){
             vue.$message.warning(res.data.message) 
             reject(res.data.message)  
            } else {
              commit('ADD_USER',res.data.data)
              commit('CHANGE_LOGINSTATUS')
              resolve(res.data.data)

            }
          } else {
            vue.$message.error('网络或服务器错误！')
            reject()
          }




        },
        error => {
          reject(error)
          console.log(error)
        }
      )
    })
    }

  },
  modules: {
  }
})
