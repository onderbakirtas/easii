import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import Vuelidate from 'vuelidate'
import Axios from 'axios'

import 'bulma/bulma.sass'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element).use(Vuelidate)

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.prototype.$axios = axiosInstance

Vue.prototype.$responseMessage = function(code) {
  if (code === 1) {
    return 'Connection refused, siktir git.'
  } else {
    return 'Bilinmeyen hata, uzayli olabilir.'
  }
}

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('easiiUser') !== null
  console.log('to: ', to)
  console.log('auth: ', isAuthenticated)
  if (to.name !== 'AppLogin' && !isAuthenticated) {
    console.log('not auth')
    next({ name: 'AppLogin' })
  } else if (to.name === 'AppLogin' && isAuthenticated) {
    next({ name: 'AppIndex' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
