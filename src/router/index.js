import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/indexView/index'

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
    path:'/test',
    name:'test',
    component:()=>import('../views/indexView/test.vue')
  },{
    path:'/tobezpf',
    name:'cwzpf',
    component:()=>import('../views/postJob/tobezp.vue')
  },
  {
    path:'/newmechanism',
    name:'mecha',
    component:()=>import('../views/postJob/newmecha.vue')
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
