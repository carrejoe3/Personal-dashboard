<template>
  <v-container>
    <v-list>
      <v-list-item v-for="(todo, index) in toDos" :key="index">
        <v-list-item-content>
          <v-list-item-title v-text="todo.title"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon @click="toggleComplete(todo)">
          <v-icon>{{ todo.complete ? 'mdi-check-box-outline' : 'mdi-checkbox-blank-outline' }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <v-btn depressed id="addToDosBtn">
      <v-img src="@/public/Plus_button_small.png"></v-img>
    </v-btn>
    <HomeButton />
  </v-container>
</template>

<script>

import HomeButton from '@/components/HomeButton'

export default {
  components: {
    HomeButton
  },
  computed: {
    toDos () {
      return this.$store.state.user.todos
    }
  },
  methods: {
    toggleComplete (todo) {
      todo.complete = !todo.complete
    }
  }
}
</script>

<style lang="scss">
#addToDosBtn {
  background-color: transparent;
}
</style>
