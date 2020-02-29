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
                  <v-text-field label="Email" name="email" type="text" v-model="email"/>
                  <v-text-field id="password" label="Password" name="password" type="password" v-model="password"/>
                  <v-text-field id="confirmPassword" label="Confirm password" name="confirmPassword" type="password" v-model="confirmPassword"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="registerUser">Register</v-btn>
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
    email: '',
    password: '',
    confirmPassword: ''
  }),
  methods: {
    async registerUser () {
      const response = authenication.register({
        username: this.username,
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>
