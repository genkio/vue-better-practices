import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import item from './modules/item'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    category,
    item
  }
})
