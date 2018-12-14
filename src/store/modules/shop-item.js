import api from '../../api/shop-item'

const state = getDefaultState()

const getters = {}

const actions = {
  getShopItems ({ commit, rootState }) {
    const { activeCategoryId } = rootState['category']
    return api.fetchItemsByCategory(activeCategoryId)
      .then(({ data: items }) => {
        commit('SET_SHOP_ITEMS', items)
      })
  },

  getShopItem ({ commit }, id) {
    return api.fetchItemById(id)
      .then(item => {
        commit('SET_ACTIVE_SHOP_ITEM', item)
      })
  },

  clearActiveShopItem ({ commit }) {
    commit('SET_ACTIVE_SHOP_ITEM', null)
  },

  searchShopItems ({ commit }, searchTerm) {
    commit('SET_SHOP_ITEM_SEARCH_TERM', searchTerm)
  },

  toggleLike ({ state }) {
    state.activeShopItem.like()
  }
}

const mutations = {
  SET_SHOP_ITEMS (state, items) {
    state.shopItems = items
  },

  SET_ACTIVE_SHOP_ITEM (state, item) {
    state.activeShopItem = item
  },

  SET_SHOP_ITEM_SEARCH_TERM (state, searchTerm) {
    state.shopItemSearchTerm = searchTerm
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

function getDefaultState () {
  return {
    activeShopItem: null,
    shopItems: [],
    shopItemSearchTerm: ''
  }
}
