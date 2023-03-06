import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import map from './map/map.js';

Vue.prototype.$map = map

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
