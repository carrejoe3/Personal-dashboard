<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344">
      <v-img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/10C8D/production/_111094786_hi060304309.jpg" height="200px"></v-img>
      <v-card-title>{{ this.newsArticle.rss.channel.item[0].title._cdata }}</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <div class="my-4 subtitle-1">{{ this.newsArticle.rss.channel.item[0].description._cdata }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  computed: {
    newsArticle () {
      return this.$store.state.newsArticle
    }
  }
}
</script>
