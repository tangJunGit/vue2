import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from "./routes"
import store from './store/'
import components from './components' // 加载公共组件

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})

/**
 * 路由
 */
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


// 守卫
router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(store.state.user.id) // true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login') {
      return next({ path: '/login' })
  }
  next()
})

new Vue({ store, router }).$mount('#app')