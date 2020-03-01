<template>
  <v-toolbar single-line>
    <v-img :src="avatar" height="80%" width="1%"></v-img>
    <v-spacer></v-spacer>
    <v-toolbar-title>Good day {{ username }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$store.state.user.username
    },
    avatar () {
      return this.$store.state.user.avatar
    }
  }
}
</script>
