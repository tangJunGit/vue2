import Vue from 'vue'

// 路由
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('../views/common/login.vue')
const error404 = () => import('../views/common/error_404.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/404',
      name: 'error404',
      component: error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
