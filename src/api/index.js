import axios from 'axios'

class API {
  init (baseURL) {
    if (!baseURL) {
      throw new Error('base URL is required to initialize API')
    }
    this.client = axios.create({ baseURL })
  }

  get (node, options) {
    return this.client.get(node, options)
  }
}

export default new API()
