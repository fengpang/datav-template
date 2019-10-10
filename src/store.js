import Vue from 'vue'
import Vuex from 'vuex'
import echartTheme from './theme/echartTheme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    echartsTheme: echartTheme
  },
  mutations: {

  },
  actions: {

  }
})
