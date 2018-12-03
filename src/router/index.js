import Vue from 'vue'

// 路由
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('../views/login.vue')
const error404 = () => import('../components/error_404.vue')

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
