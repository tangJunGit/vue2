import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Guard from "@/components/Guard"
const Lazy = () => import('@/components/Lazy')   // 懒加载

Vue.use(Router)

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
      path: '/lazy',
      name: 'Lazy',
      component: Lazy
    }
  ]
})
