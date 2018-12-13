import category from '../../api/category'

const state = getDefaultState()

const getters = {}

const actions = {
  getCategories ({ commit }) {
    return category.fetchCategories()
      .then(data => {
        const [ { id: defaultSelected } ] = data
        commit('SET_CATEGORIES', data)
        commit('SET_ACTIVE_ID', defaultSelected)
      })
  },
  selectCategory ({ commit }, id) {
    commit('SET_ACTIVE_ID', id)
  }
}

const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },
  SET_ACTIVE_ID (state, id) {
    state.activeId = id
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
    categories: [],
    activeId: null
  }
}
