// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vuex store filter
import Vuex from 'vuex'
import Store from './store'
import filters from './utils/filter'

// css
import './assets/css/normalize.css'
import './assets/less/common.less'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.use(ElementUI)
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
