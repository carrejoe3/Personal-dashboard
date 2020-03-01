import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    newsArticle: {}
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    },
    updateNewsArticle (state, newsArticle) {
      state.newsArticle = newsArticle
    }
  }
})
