<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-card-title class="justify-center">Weather</v-card-title>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{ this.weatherData.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ this.weatherData.main.temp | toCelsius}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80">
          <v-img :src="weatherIcon"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
    apiKey: 'd0a10211ea3d36b0a6423a104782130e',
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    weatherData: {
      name: 'Loading...',
      main: {
        temp: 'Loading...'
      }
    }
  }),
  methods: {
    fetchWeatherData (position) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${this.apiKey}`
        )
        .then(response => {
          this.weatherData = response.data
          this.setWeatherIcon()
        })
        .catch(error => {
          console.error(error)
        })
    },
    setWeatherIcon () {
      this.weatherIcon = 'http://openweathermap.org/img/wn/' + this.weatherData.weather[0].icon + '@2x.png'
    }
  },
  filters: {
    toCelsius: function (value) {
      return Math.round(value - 273.15) + ' degrees'
    }
  },
  mounted () {
    navigator.geolocation.getCurrentPosition(this.fetchWeatherData)
  }
}
</script>
