import api from '.'

export default {
  fetchAll () {
    return api.get('categories')
      .then(res => {
        if (!res.data) {
          return Promise.reject('error with fetching categories data')
        }
        return res.data
      })
  }
}
