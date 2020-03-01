<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344" to="/photos" ripple>
      <v-card-title>News</v-card-title>
      <v-img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/10C8D/production/_111094786_hi060304309.jpg" height="112px"></v-img>
    </v-card>
  </v-container>
</template>

<script>

import fetchData from '@/services/fetchData'
import convertXML from 'xml-js'

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
          this.newsArticle = JSON.parse(convertXML.xml2json(response.data, { compact: true, spaces: 0 }))
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
