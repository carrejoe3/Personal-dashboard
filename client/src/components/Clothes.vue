<template>
  <v-container id="chartContainer"></v-container>
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
          type: 'pie'
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
          name: ['Clothe'],
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
