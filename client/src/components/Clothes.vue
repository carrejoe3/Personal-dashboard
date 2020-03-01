<template>
  <v-container class="grey lighten-5">
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
    clothesData: null
  }),
  methods: {
    fetchClothesData () {
      axios.get('https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil', {
        crossdomain: true,
        crossorigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        proxy: {
          host: '104.236.174.88',
          port: 3128
        },
        responseType: 'json'
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  mounted () {
    // this.fetchClothesData()
  }
}
</script>
