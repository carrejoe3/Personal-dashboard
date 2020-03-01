<template>
  <v-container class="grey lighten-5">
    <v-card class="mx-auto" max-width="344" to="/tasks">
      <v-card-title>Tasks</v-card-title>
      <v-list>
        <v-list-item v-for="(todo, index) in toDos" :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="todo.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ todo.complete ? 'mdi-check-box-outline' : 'mdi-checkbox-blank-outline' }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
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
