import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// common
const login = () => import('../views/common/login.vue')
const container = () => import('../views/common/container.vue')
const error404 = () => import('../views/common/error_404.vue')

// 在此导入vue文件
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
      component: container,
      children: [
        {
          path: '/',
          redirect: '/error/404'
        },

        // ====  在此添加路由
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
