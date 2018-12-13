import api from '.'

export default {
  fetchItemsByCategory (categoryId) {
    return api.get('shop-items', { params: { categoryId } })
  },

  fetchItemById (shopItemId) {
    return api.get(`shop-items/${shopItemId}`)
  }
}
