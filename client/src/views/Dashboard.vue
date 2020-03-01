<template>
  <v-container>
    <WelcomeMessage />
    <v-row>
      <v-col sm="4">
        <Weather />
      </v-col>
      <v-col sm="4">
        <NewsPreview />
      </v-col>
      <v-col sm="4">
        <SportsThumbnail />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4">
        <PhotosThumbnail />
      </v-col>
      <v-col sm="4">
        <TodosThumbnail />
      </v-col>
      <v-col sm="4">
        <Clothes />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Clothes from '@/components/Clothes'
import PhotosThumbnail from '@/components/PhotosThumbnail'
import WelcomeMessage from '@/components/WelcomeMessage'
import Weather from '@/components/Weather'
import NewsPreview from '@/components/NewsPreview'
import SportsThumbnail from '@/components/SportsThumbnail'
import TodosThumbnail from '@/components/TodosPreview'

export default {
  data: () => ({}),
  components: {
    Clothes,
    PhotosThumbnail,
    WelcomeMessage,
    Weather,
    NewsPreview,
    SportsThumbnail,
    TodosThumbnail
  }
}
</script>

<style lang="scss" scoped>

</style>
