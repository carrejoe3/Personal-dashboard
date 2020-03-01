<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-card-title class="justify-center">Clothes</v-card-title>
      <div id="chartContainer"></div>
    </v-card>
  </v-container>
</template>

<script>

import fetchData from '@/services/fetchData'
import Highcharts from 'highcharts'

export default {
  computed: {
    clothesData: {
      get () {
        return this.$store.getters.getClothesData
      },
      set (clothesData) {
        this.$store.commit('updateClothesData', clothesData)
      }
    }
  },
  methods: {
    async fetchClothesData () {
      try {
        const response = await fetchData.fetchClothesData()

        if (response.status === 200) {
          this.clothesData = response.data.payload
          this.createChart()
        } else {
          console.error('Failed to get clothes data')
        }
      } catch (error) {
        console.error(error)
      }
    },
    createChart () {
      Highcharts.chart('chartContainer', {
        chart: {
          type: 'pie',
          backgroundColor: 'rgba(197, 218, 251, 0.8)',
          height: '200px'
        },
        title: {
          text: ''
        },
        plotOptions: {
          series: {
            depth: 25,
            colorByPoint: true
          }
        },
        series: [{
          data: this.clothesData,
          name: 'Days worn',
          showInLegend: false
        }]
      })
    }
  },
  mounted () {
    this.fetchClothesData()
  }
}
</script>

<style lang="scss" scoped>

</style>
