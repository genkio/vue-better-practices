import api from '../../api/category'

const state = getDefaultState()

const getters = {
  activeCategoryId: state => state.activeCategoryId
}

const actions = {
  getCategories ({ commit, state }) {
    return api.fetchCategories()
      .then(({ data: categories }) => {
        const [ { id: defaultSelected } ] = categories
        commit('SET_CATEGORIES', categories)
        if (!state.activeCategoryId) {
          commit('SET_ACTIVE_CATEGORY_ID', defaultSelected)
        }
      })
  },

  selectCategory ({ commit }, id) {
    commit('SET_ACTIVE_CATEGORY_ID', id)
  }
}

const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },

  SET_ACTIVE_CATEGORY_ID (state, id) {
    state.activeCategoryId = id
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
    activeCategoryId: null
  }
}
