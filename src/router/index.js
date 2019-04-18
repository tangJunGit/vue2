import Vue from 'vue'

// 路由
import Router from 'vue-router'
Vue.use(Router)

// common
const login = () => import('../views/common/login.vue')
const container = () => import('../views/common/container.vue')
const error404 = () => import('../views/common/error_404.vue')

// demo
const demoBase = () => import('../views/demo/base.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/container',
      name: 'container',
      component: container,
      children: [
        {
          path: '/demo/base',
          name: 'demoBase',
          component: demoBase
        }
      ]
    },
    {
      path: '/error/404',
      name: 'error404',
      component: error404
    },
    {
      path: '*',
      redirect: '/error/404'
    }
  ]
})
