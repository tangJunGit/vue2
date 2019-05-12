// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Store from './store'
import filters from './utils/filter'

// css
import './assets/css/normalize.css'
import './assets/less/common.less'
import './assets/less/theme.less'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

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
