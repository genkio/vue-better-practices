import shopItem from '../../api/shop-item'

const state = getDefaultState()

const getters = {}

const actions = {
  getShopItems ({ commit, rootState }) {
    const { activeCategoryId } = rootState['category']
    return shopItem.fetchItemsByCategory(activeCategoryId)
      .then(items => {
        commit('SET_SHOP_ITEMS', items)
      })
  },
  getShopItem ({ commit }, id) {
    return shopItem.fetchItemById(id)
      .then(item => {
        commit('SET_ACTIVE_SHOP_ITEM', item)
      })
  },
  clearActiveShopItem ({ commit }) {
    commit('SET_ACTIVE_SHOP_ITEM', null)
  }
}

const mutations = {
  SET_SHOP_ITEMS (state, items) {
    state.shopItems = items
  },
  SET_ACTIVE_SHOP_ITEM (state, item) {
    state.activeShopItem = item
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
    shopItems: []
  }
}
