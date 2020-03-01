<template>
  <v-container id="welcomeMessage">
    <v-img :src="avatar" height="100px" width="100px" id="avatar"></v-img>
    <div id="welcomeMessageText">Good day {{ username }}</div>
  </v-container>
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

<style lang="scss" scoped>
#welcomeMessage {
  margin-bottom: 5%;

  #welcomeMessageText {
    text-align: center;
    font-size: 4em;
    color: white;
  }
  #avatar {
    position: absolute;
    top: 5%;
    left: 5%;
  }
}
</style>
