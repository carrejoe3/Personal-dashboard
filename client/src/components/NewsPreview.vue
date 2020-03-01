<template>
  <v-container class="grey lighten-5">
    <v-card ripple>
      <!-- <v-img :src="article.urlToImage"></v-img>
      <v-card-title id="title">{{ article.title }}</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <div class="my-4 subtitle-1">{{ article.description }}</div>
      </v-card-text>-->
    </v-card>
  </v-container>
</template>

<script>

import fetchData from '@/services/fetchData'

export default {
  computed: {
    newsArticle: {
      get () {
        return this.$store.state.newsArticle
      },
      set (newsArticle) {
        this.$store.commit('updateNewsArticle', newsArticle)
      }
    }
  },
  methods: {
    async fetchNewsArticle () {
      try {
        const response = await fetchData.fetchNews()

        if (response.status === 200) {
          this.newsArticle = response.data
        } else {
          console.error('Failed to get news')
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted () {
    this.fetchNewsArticle()
  }
}
</script>
