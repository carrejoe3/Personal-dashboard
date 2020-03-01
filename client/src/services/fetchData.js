import api from '@/services/api'

export default {
  fetchNews () {
    return api().get('/fetchNews')
  }
}
