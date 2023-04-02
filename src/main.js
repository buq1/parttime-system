import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/index.js'
import 'element-ui/lib/theme-chalk/index.css'

import Cookies from 'js-cookie'

Vue.config.productionTip = false

Vue.prototype.Cookies = Cookies

let vue = new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

export default vue;
