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
    categories: [
      {
        'id': '1',
        'name': 'すべて'
      },
      {
        'id': '2',
        'name': 'レディース'
      },
      {
        'id': '3',
        'name': 'ベビー・キッズ'
      },
      {
        'id': '4',
        'name': 'エンタメ'
      },
      {
        'id': '5',
        'name': 'メンズ'
      },
      {
        'id': '6',
        'name': 'すべて'
      },
      {
        'id': '7',
        'name': 'レディース'
      },
      {
        'id': '8',
        'name': 'ベビー・キッズ'
      },
      {
        'id': '9',
        'name': 'エンタメ'
      },
      {
        'id': '10',
        'name': 'メンズ'
      }
    ]
  }
}
