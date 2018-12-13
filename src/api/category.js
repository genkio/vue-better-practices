import api from '.'

export default {
  fetchCategories () {
    return api.get('categories')
  }
}
