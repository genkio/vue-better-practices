const state = getDefaultState()

const getters = {}

const actions = {
  getActiveShopItem ({ commit, state }, id) {
  }
}

const mutations = {
  SET_ACTIVE_SHOP_ITEM (state, item) {
    state.activeItem = item
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
    activeItem: null,
    shopItems: []
  }
}
