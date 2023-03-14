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
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
