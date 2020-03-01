<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" to="">
      <v-card-title class="justify-center">Sport</v-card-title>
    </v-card>
  </v-container>
</template>

<script>

import fetchData from '../services/fetchData'
import Papa from 'papaparse'

export default {
  computed: {
    sportsData: {
      get () {
        return this.$store.state.sportsData
      },
      set (sportsData) {
        this.$store.commit('updateSportsData', sportsData)
      }
    }
  },
  methods: {
    async fetchSportsData () {
      try {
        const response = await fetchData.fetchSportsData()

        if (response.status === 200) {
          this.sportsData = Papa.parse(response.data).data
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
