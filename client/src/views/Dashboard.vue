<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
        </v-card>
      </v-col>
      <v-col sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
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

export default {
  data: () => ({}),
  components: {
    ClothesModule,
    PhotosThumbnail
  }
}
</script>
