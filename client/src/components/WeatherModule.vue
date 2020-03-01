<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344">
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    geoLocation: {}
  }),
  methods: {
    setLocation (position) {
      this.geoLocation.latitude = position.coords.latitude
      this.geoLocation.longitude = position.coords.longitude
    }
  },
  mounted () {
    navigator.geolocation.getCurrentPosition(this.setLocation)
  }
}
</script>
