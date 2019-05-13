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
        { 
          path: '/demo/list', name: 'demoList', component: _import('demo/list'), 
          meta: {title: '学校信息', location: ['教务管理', '学校管理', '学校信息']}      // title 为路由tab的标题，location表示位置
        },
        { 
          path: '/demo/test_1', name: 'test_1', component: _import('demo/test_1'), 
          meta: {title: '测试1', location: ['测试1', '测试2']} 
        },
        { 
          path: '/demo/test_2', name: 'test_2', component: _import('demo/test_2'), 
          meta: {title: '测试2', location: ['测试1', '测试2']}
        },
      ]
    },
    { path: '/error/404', name: 'error404', component: _import('common/error_404') },
    { path: '*', redirect: '/error/404' }
  ]
})
