// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import componentsList from './components'
import urlAddress from '../config/remote.js'

// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'application/x-www-form-urlencoded'
// Vue.http.headers.common['Authorization'] = 'basic'

Vue.http.options.root = urlAddress.baseUrl + '/api/'
Vue.prototype.$remoteAddress = urlAddress.baseUrl
Vue.config.productionTip = false

// router.beforeEnter((to, from, next) => {
//   function func () {
//     console.log('Привет')
//     next()
//   }
//   setTimeout(func, 500)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  componentsList,
  template: '<App/>',
  components: { App }
})
