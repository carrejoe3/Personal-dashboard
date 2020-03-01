<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344" to="">
      <v-card-title>Tasks</v-card-title>
    </v-card>
  </v-container>
</template>

<script>

export default {
  computed: {
    toDos () {
      return this.$store.getters.getTopToDos
    }
  },
  methods: {}
}
</script>
