<template>
  <v-container class="grey lighten-5">
  </v-container>
</template>

<script>

import fetchData from '@/services/fetchData'

export default {
  data: () => ({
    clothesData: null
  }),
  methods: {
    async fetchClothesData () {
      try {
        const response = await fetchData.fetchClothesData()

        if (response.status === 200) {
          this.clothesData = response.data
        } else {
          console.error('Failed to get clothes data')
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted () {
    this.fetchClothesData()
  }
}
</script>
