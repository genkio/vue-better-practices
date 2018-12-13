import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import shopItem from './modules/shop-item'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    category,
    shopItem
  }
})

store.watch(
  () => store.getters['category/activeCategoryId'],
  categoryId => store.dispatch('shopItem/getShopItems', categoryId)
)

export default store
