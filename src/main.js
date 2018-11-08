// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vuex
import Vuex from 'vuex'

// store
import Store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: Store
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// 守卫
// router.beforeEach((to, from, next) => {
//   if (to.name === 'HelloWorld') {
//     next(false)
//     return
//   }
//   next()
// })
