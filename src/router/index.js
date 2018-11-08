import Vue from 'vue'

// 路由
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
// const HelloWorld = () => import('@/components/HelloWorld') // 懒加载
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
