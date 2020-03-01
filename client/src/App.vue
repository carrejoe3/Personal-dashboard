<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  .theme--light.v-card {
    background-color: rgba(197, 218, 251, 0.8);
    border: 2px solid #ffe65e;

    .v-card__title {
      background-color: #ffe65e;
    }
  }
}
</style>
