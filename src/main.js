import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Panle } from './components'
import chartWraper from './plugins/chartWraper' // 包装v-charts处理一些公共逻辑

Vue.use(chartWraper)

/* 注册大量使用公共组件 */
Vue.component('DPanel', Panle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
