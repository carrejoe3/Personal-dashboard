<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344">
    </v-card>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
    apiKey: 'd0a10211ea3d36b0a6423a104782130e',
    weatherData: null
  }),
  methods: {
    fetchWeatherData (position) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${this.apiKey}`)
        .then((response) => {
          this.weatherData = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  mounted () {
    navigator.geolocation.getCurrentPosition(this.fetchWeatherData)
  }
}
</script>
