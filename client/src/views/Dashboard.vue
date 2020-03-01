<template>
  <v-container class="grey lighten-5">
    <WelcomeMessage />
    <v-row>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          <Weather />
        </v-card>
      </v-col>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          <NewsPreview />
        </v-card>
      </v-col>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          <SportsThumbnail />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          <PhotosThumbnail />
        </v-card>
      </v-col>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
        </v-card>
      </v-col>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          <Clothes />
        </v-card>
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

export default {
  data: () => ({}),
  components: {
    Clothes,
    PhotosThumbnail,
    WelcomeMessage,
    Weather,
    NewsPreview,
    SportsThumbnail
  }
}
</script>
