<template>
  <v-banner single-line>
    <v-icon slot="icon" color="warning" size="36">mdi-wifi-strength-alert-outline</v-icon>
    Good day {{ username }}
  </v-banner>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$store.state.user.username
    }
  }
}
</script>
