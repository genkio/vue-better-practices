const state = getDefaultState()

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

function getDefaultState () {
  return {
    categories: []
  }
}
