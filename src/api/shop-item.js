import api from '.'

class ShopItem {
  constructor (data) {
    Object.assign(this, data)
  }

  like () {
    console.debug(`Liking ${this.id}`)
  }
}

export default {
  fetchItemsByCategory (categoryId) {
    return api.get('shop-items', { params: { categoryId } })
  },

  fetchItemById (shopItemId) {
    return api.get(`shop-items/${shopItemId}`)
      .then(({ data }) => {
        return new ShopItem(data)
      })
      .catch(err => Promise.reject(err.message))
  }
}
