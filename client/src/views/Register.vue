<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="10">
            <v-card id="loginContainer" flat>
              <v-toolbar id="toolbar" flat>
                <v-spacer></v-spacer>
                <v-toolbar-title id="title">Hackathon</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form class="loginInputs">
                  <v-text-field dark label="Username" name="username" type="text" v-model="username" :disabled="userRegistered"/>
                  <v-spacer></v-spacer>
                  <v-text-field dark label="Email" name="email" type="text" v-model="email" :disabled="userRegistered"/>
                </v-form>
                <v-form class="loginInputs">
                  <v-text-field dark id="password" label="Password" name="password" type="password" v-model="password" :disabled="userRegistered" :rules="[passwordConfirmationRule]"/>
                  <v-spacer></v-spacer>
                  <v-text-field dark id="confirmPassword" label="Confirm password" name="confirmPassword" type="password" v-model="confirmPassword" :disabled="userRegistered" :rules="[passwordConfirmationRule]"/>
                </v-form>
                <v-form class="loginInputs">
                  <v-file-input dark accept="image/*" label="Upload your avatar" v-model="avatar" :disabled="userRegistered"></v-file-input>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn id="registerBtn" @click="registerUser" v-if="!userRegistered" depressed>
                  <v-img src="@/public/Register_button.png" width="200px"></v-img>
                </v-btn>
                <v-btn id="backButton" v-if="userRegistered" to="/">Back to login</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar v-model="showSnackbar">Registration complete!
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
    email: '',
    password: '',
    confirmPassword: '',
    userRegistered: false,
    avatar: null,
    showSnackbar: false
  }),
  computed: {
    passwordConfirmationRule () {
      return this.password === this.confirmPassword || 'Password must match'
    }
  },
  methods: {
    async registerUser () {
      try {
        const response = await authenication.register({
          username: this.username,
          email: this.email,
          password: this.password,
          avatar: await this.toBase64(this.avatar)
        })

        if (response.status === 201) {
          this.userRegistered = true
          this.showSnackbar = true
        } else {
          console.error('Registration failed')
        }
      } catch (error) {
        console.error(error)
      }
    },
    toBase64 (file) {
      return new Promise((resolve, reject) => {
        if (file === null || file === undefined) {
          resolve('')
        } else {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#app .theme--light.v-card {
  background-color: transparent;
  border: none;
}

#title {
  font-size: 3em;
  color: white;
}

.loginInputs {
  margin-top: 10%;
  display: flex;
}

#registerBtn {
  margin-top: 10%;
  background: none;
}

#backButton {
  background: #ffe65e;
  color: white;
}

#loginContainer {
  background: none;

  #toolbar {
    background: none;
  }
}
</style>
