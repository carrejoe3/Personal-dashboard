<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Username" name="username" type="text" v-model="username"/>
                  <v-text-field id="password" label="Password" name="password" type="password" v-model="password"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="login">Login</v-btn>
                <v-btn to="/register" color="primary">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import authenication from '@/services/authenication'

export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    async login () {
      try {
        const response = await authenication.login({
          username: this.username,
          password: this.password
        })

        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
