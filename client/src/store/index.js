import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    newsArticle: {},
    clothesData: {}
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    },
    updateNewsArticle (state, newsArticle) {
      state.newsArticle = newsArticle
    },
    updateClothesData (state, clothesData) {
      state.clothesData = clothesData
    }
  },
  getters: {
    getClothesData (state) {
      return [state.clothesData.filter((obj) => obj.clothe === 'jumper').length, state.clothesData.filter((obj) => obj.clothe === 'hoodie').length, state.clothesData.filter((obj) => obj.clothe === 'jacket').length, state.clothesData.filter((obj) => obj.clothe === 'sweater').length, state.clothesData.filter((obj) => obj.clothe === 'blazer').length, state.clothesData.filter((obj) => obj.clothe === 'raincoat').length]
    }
  }
})
