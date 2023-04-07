import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/indexView/index'
import SearchView from '../views/resultList/searchList'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'index',
    component:IndexView
  },
  {
    path:'/map',
    name:'gyg',
    component:()=>import('../views/strollMap/index.vue')
  },
  {
    path:'/postjob',
    name:'postjob',
    component:()=>import('../views/postJob/index')
  },
  {
    path:'/info',
    name:'message',
    component:()=>import('../views/getInfor/index')
  },
  {
    path:'/personal',
    name:'myinfo',
    component:()=>import('../views/personalCenter/index')
  },{
    path:'/tobezpf',
    name:'cwzpf',
    component:()=>import('../views/postJob/tobezp.vue')
  },
  {
    path:'/newmechanism',
    name:'mecha',
    component:()=>import('../views/postJob/newmecha.vue')
  },
  {
    path:'/search/:text',
    name:'search',
    component:SearchView
  },{
    path:'/shortterm',
    name:'shortTerm',
    component:()=>import('../views/resultList/shortTerm')
  },{
    path:'/longterm',
    name:'longTerm',
    component:()=>import('../views/resultList/longTerm')
  },{
    path:'/network',
    name:'network',
    component:()=>import('../views/resultList/network')
  },{
    path:'/vacation',
    name:'vacation',
    component:()=>import('../views/resultList/vacation')
  },
  {
    path:'/notice/:nid',
  name:'notice',
  component:()=>import('../views/notice/index')
},{
  path:'/job/:jid',
  name:'job',
  component:()=>import('../views/jobInfo/index')
},
{
  path:'/cv',
  name:'cv',
  component:()=>import('../views/personalCenter/cvManage')
},
{
  path:'/sphistory',
  name:'sphistory',
  component:()=>import('../views/spHistory/index')
},
{
  path:'/personalinfo',
name:'pinfo',
component:()=>import('../views/personalCenter/personalInfo')
}
,{
  path:'/company',
  name:'company',
  component:()=>import('../views/personalCenter/company')
}
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
