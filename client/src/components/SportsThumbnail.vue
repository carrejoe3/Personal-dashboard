<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344" to="">
      <v-card-title>Sport</v-card-title>
    </v-card>
  </v-container>
</template>

<script>

import fetchData from '../services/fetchData'

export default {
  data: () => ({
    sportsData: null
  }),
  computed: {
    userPhotos () {
      return this.$store.state.user.photos
    }
  },
  methods: {
    async fetchSportsData () {
      try {
        const response = await fetchData.fetchSportsData()

        if (response.status === 200) {
          this.sportsData = response.data
        } else {
          console.error('Failed to get sports data')
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted () {
    this.fetchSportsData()
  }
}
</script>
