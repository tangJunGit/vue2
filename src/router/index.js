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
          // title 表示菜单位置层级，需要自定义
          // title第一个为模块名      title最后一个为菜单名
          // 会根据菜单名去查询到菜单的index
          meta: {title: ['学校管理', '学生管理', '学生信息']} 
        },
        { 
          path: '/demo/add', name: 'demoAdd', component: _import('demo/add'), 
          meta: {title: ['学校管理', '学生管理', '添加学生']} 
        },
        { 
          path: '/demo/test_1', name: 'test_1', component: _import('demo/test_1'), 
          meta: {title: ['学校管理', '班级管理']} 
        },
        { 
          path: '/demo/test_2', name: 'test_2', component: _import('demo/test_2'), 
          meta: {title: ['教务管理', '学年学期']}
        },
      ]
    },
    { path: '/error/404', name: 'error404', component: _import('common/error_404') },
    { path: '*', redirect: '/error/404' }
  ]
})
