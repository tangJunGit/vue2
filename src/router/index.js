import Vue from 'vue'

// 路由
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('../views/login.vue')
const error_404 = () => import('../components/404.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/404',
      name: 'error_404',
      component: error_404
    },
    { 
      path: '*',
      component: error_404 
    }
  ]
})
