<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344">
      <v-card-title>Photos</v-card-title>
      <v-row>
        <v-col cols="12" sm="3" md="4" v-for="(photo, index) in user.photos" :key="index">
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
    userData () {
      return this.$store.user
    }
  },
  methods: {},
  mounted () {}
}
</script>
