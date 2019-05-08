import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: _import('common/login') },
    { path: '/container', component: _import('common/container'), children: [
        { path: '/', redirect: '/error/404' },
        { path: '/demo/list', name: 'demoList', component: _import('demo/list') }  // demo
      ]
    },
    { path: '/error/404', name: 'error404', component: _import('common/error_404') },
    { path: '*', redirect: '/error/404' }
  ]
})
