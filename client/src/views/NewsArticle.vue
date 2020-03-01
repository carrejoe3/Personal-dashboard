<template>
  <v-container>
    <v-card class="mx-auto" flat>
      <v-img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/10C8D/production/_111094786_hi060304309.jpg" height="400px"></v-img>
      <v-card-title class="justify-center" id="title">{{ this.newsArticle.rss.channel.item[0].title._cdata }}</v-card-title>
      <v-card-text>
        <div id="content" class="my-4 subtitle-1">{{ this.newsArticle.rss.channel.item[0].description._cdata }}</div>
      </v-card-text>
    </v-card>
    <HomeButton />
  </v-container>
</template>

<script>

import HomeButton from '@/components/HomeButton'

export default {
  components: {
    HomeButton
  },
  computed: {
    newsArticle () {
      return this.$store.state.newsArticle
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  .theme--light.v-card {
    background-color: transparent;
    border: none;

    .v-card__title {
      background: transparent;
      color: white;
      font-size: 2.2em;
      margin-top: 10%;
    }
  }
}

#content {
  color: white;
}
</style>
