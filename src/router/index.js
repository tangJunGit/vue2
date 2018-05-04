import Vue from 'vue'

// 路由
import Router from 'vue-router'
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld'
import Guard from "@/components/Guard"
import VuexCount from "@/components/Vuex-count"
const Lazy = () => import('@/components/Lazy')   // 懒加载



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/guard',
      name: 'Guard',
      component: Guard
    },
    {
      path: '/Vuex-count',
      name: 'VuexCount',
      component: VuexCount
    },
    {
      path: '/lazy',
      name: 'Lazy',
      component: Lazy
    }
  ]
})
