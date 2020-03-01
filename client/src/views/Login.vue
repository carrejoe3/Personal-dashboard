<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="10">
            <v-card id="loginContainer" flat>
              <v-toolbar id="toolbar" flat>
                <v-spacer></v-spacer>
                <v-toolbar-title id="title">Hackathon</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form id="loginInputs">
                  <v-text-field dark label="Username" name="username" type="text" v-model="username"/>
                  <v-spacer></v-spacer>
                  <v-text-field dark id="password" label="Password" name="password" type="password" v-model="password"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn id="loginBtn" @click="login" depressed>
                  <v-img src="@/public/Login_button.png" width="200px"></v-img>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
              <div id="bottomText">New to the hackothon? <span id="signUpText" @click="goToRegistrationPage">Sign up</span></div>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar v-model="showSnackbar">No user with that username or password was found
          <v-btn color="red" text @click="showSnackbar = false">Close</v-btn>
        </v-snackbar>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import authenication from '@/services/authenication'

export default {
  data: () => ({
    username: '',
    password: '',
    showSnackbar: false
  }),
  computed: {
    user: {
      get () {
        return this.$store.user
      },
      set (user) {
        this.$store.commit('updateUser', user)
      }
    }
  },
  methods: {
    async login () {
      try {
        const response = await authenication.login({
          username: this.username,
          password: this.password
        })

        if (response.status === 200) {
          if (response.data.length === 0) {
            this.showSnackbar = true
          } else {
            this.user = response.data[0]
            this.$router.push('Dashboard')
          }
        } else {
          console.error('Login failed')
        }
      } catch (error) {
        console.error(error)
      }
    },
    goToRegistrationPage () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
#title {
  font-size: 3em;
  color: white;
}

#loginContainer {
  background: none;

  #toolbar {
    background: none;
  }
}

#loginInputs {
  margin-top: 10%;
  display: flex;
}

#loginBtn {
  margin-top: 10%;
  background: none;
}

#bottomText {
  margin-top: 10%;
  text-align: center;
  font-size: 20px;
  color: white;

  #signUpText {
    color: yellow;
  }
}
</style>

<style lang="scss">
#app {
  background: url('~@/public/Background.png')
}
</style>
