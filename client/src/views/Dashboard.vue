<template>
  <v-container class="grey lighten-5">
    <WelcomeMessage />
    <v-row>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          <WeatherModule />
        </v-card>
      </v-col>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          <NewsPreview />
        </v-card>
      </v-col>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
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
          <ClothesModule />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ClothesModule from '@/components/ClothesModule'
import PhotosThumbnail from '@/components/PhotosThumbnail'
import WelcomeMessage from '@/components/WelcomeMessage'
import WeatherModule from '@/components/WeatherModule'
import NewsPreview from '@/components/NewsPreview'

export default {
  data: () => ({}),
  components: {
    ClothesModule,
    PhotosThumbnail,
    WelcomeMessage,
    WeatherModule,
    NewsPreview
  }
}
</script>
