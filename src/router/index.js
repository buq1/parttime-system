import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'test',
    //component:()=>import('../views/test.vue')
  },
  {
    path:'/map',
    name:'gyg',
    component:()=>import('../views/strollMap/index.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
