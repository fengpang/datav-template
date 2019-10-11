import Vue from 'vue'
import Vuex from 'vuex'
import echartTheme from './theme/echartTheme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    echartsTheme: echartTheme,
    animates: ['bounceInDown', 'bounceInRight', 'bounceInUp', 'bounceInLeft', 'zoomIn', 'flipInY', 'lightSpeedIn', 'rotateIn']
  },
  mutations: {
    CHANGE_ANIMATES (state, payload) { // 根据enter切换动画为进场或离场动画
      let inAnima = ['bounceInDown', 'bounceInRight', 'bounceInUp', 'bounceInLeft', 'zoomIn', 'flipInY', 'lightSpeedIn', 'rotateIn']
      let leaveAnima = ['bounceOutUp', 'bounceOutRight', 'bounceOutDown', 'bounceOutLeft', 'zoomOut', 'flipOutY', 'lightSpeedOut', 'rotateOut']
      state.animates = payload === 'enter' ? inAnima : leaveAnima
    },
  },
  actions: {

  }
})
