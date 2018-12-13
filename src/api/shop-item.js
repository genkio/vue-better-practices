import api from '.'

export default {
  fetchItemsByCategory (categoryId) {
    return api.get('shop-items', { params: { categoryId } })
      .then(res => {
        if (!res.data) {
          return Promise.reject('error with fetching shop items data')
        }
        return res.data
      })
  },
  fetchItemById (shopItemId) {
    return api.get(`shop-items/${shopItemId}`)
      .then(res => {
        if (!res.data) {
          return Promise.reject('error with fetching shop item data')
        }
        return res.data
      })
  }
}
