import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import { Panle } from './components'

Vue.use(VCharts)

/* 注册大量使用公共组件 */
Vue.component('DPanel', Panle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
