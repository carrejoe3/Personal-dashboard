<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344" to="/photos">
      <v-card-title>Photos</v-card-title>
      <v-row>
        <v-col cols="12" sm="3" md="4" v-for="(photo, index) in userPhotos" :key="index">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    clothesData: null
  }),
  computed: {
    userPhotos () {
      return this.$store.state.user.photos
    }
  },
  methods: {},
  mounted () {}
}
</script>
