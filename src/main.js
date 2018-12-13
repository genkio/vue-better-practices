import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'
import api from './api'

api.init(process.env.API_BASE_URL)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
