import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: () => import('./views/page1')
    },
    {
      path: '/Home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (Home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
    }
  ]
})

// 入场进场动画切换
router.beforeEach((to, from, next) => {
  store.commit('CHANGE_ANIMATES', 'leave')
  setTimeout(() => {
    next()
  }, 1100)
})
router.afterEach(() => {
  store.commit('CHANGE_ANIMATES', 'enter')
})

export default router