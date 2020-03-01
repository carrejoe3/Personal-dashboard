import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    newsArticle: {},
    clothesData: {},
    sportsData: {}
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
    },
    updateSportsData (state, sportsData) {
      state.sportsData = sportsData
    }
  },
  getters: {
    getClothesData (state) {
      return [
        {
          name: 'Jumper',
          y: state.clothesData.filter((obj) => obj.clothe === 'jumper').length
        },
        {
          name: 'Hoodie',
          y: state.clothesData.filter((obj) => obj.clothe === 'hoodie').length
        },
        {
          name: 'Jacket',
          y: state.clothesData.filter((obj) => obj.clothe === 'jacket').length
        },
        {
          name: 'Sweater',
          y: state.clothesData.filter((obj) => obj.clothe === 'sweater').length
        },
        {
          name: 'Blazer',
          y: state.clothesData.filter((obj) => obj.clothe === 'blazer').length
        },
        {
          name: 'Raincoat',
          y: state.clothesData.filter((obj) => obj.clothe === 'raincoat').length
        }
      ]
    }
  }
})
