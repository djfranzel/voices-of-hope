<template>
  <div class="page-container">
    <h1 class="page-title text-center">Admin</h1>
    <v-divider class="mb-7"></v-divider>

    <v-row v-if="!showEditSections">
      <v-col cols="0" sm="0" md="3" lg="3"></v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <v-form v-model="valid" ref="form">
          <v-list-item>
            <v-text-field
                v-on:keyup.enter="Login()"
                prepend-icon="mdi-account"
                v-model="credentials.username"
                :rules="required"
                label="Username"/>
          </v-list-item>
          <v-list-item>
            <v-text-field
                v-on:keyup.enter="Login()"
                prepend-icon="mdi-lock"
                v-model="credentials.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="required"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                @click:append="showPassword = !showPassword"/>
          </v-list-item>
          <v-card-subtitle class="text-center error--text" v-if="error.length">{{ error }}</v-card-subtitle>
          <v-card-actions class="mt-3">
            <v-btn class="ma-auto" @click="Login()" outlined tile :loading="loading" :disabled="loading">
              Login
              <v-icon class="ml-2">mdi-login-variant</v-icon>
            </v-btn>
          </v-card-actions>
          <v-spacer class="pb-1"></v-spacer>
        </v-form>
      </v-col>
      <v-col cols="0" sm="0" md="3" lg="3"></v-col>
    </v-row>
    <div v-else>
      <v-row>
        <v-col>
          <h1>Home</h1>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Who We Are</h1>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Why We Sing</h1>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Join Our Song</h1>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Contact</h1>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-btn block
                 color="success"
                 :disabled="loading || saving"
                 :loading="saving"
                 @click="PostVOHContent()">
            <v-icon left>mdi-save</v-icon>
            Save
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {EventBus} from '../event-bus';
import axios from "axios";

export default Vue.extend({
  name: 'Admin',
  data: () => ({
    showEditSections: false,
    loading: false,
    valid: false,
    credentials: {
      username: '',
      password: ''
    },
    required: [v => !!v || 'Required field'],
    showPassword: false,
    error: '',
    vohContent: JSON.parse(sessionStorage.getItem('vohContent')),
    saving: false,
  }),
  methods: {
    Login: function () {
      if (!this.valid) return this.$refs.form.validate();
      const that = this;
      axios.post('/authenticate', that.credentials)
          .then(response => {
            if (response.data.token) {
              that.showEditSections = true;
              sessionStorage.setItem('token', response.data.token);
            } else {
              that.InvalidCredentials()
            }
          })
          .catch(error => that.InvalidCredentials())
          .finally(() => that.loading = false);
    },
    GetVOHContent: function () {
      const that = this;
      axios.get('/get-voh-content')
          .then(response => {
            that.vohContent = response.data;
            sessionStorage.setItem('vohContent', JSON.stringify(that.vohContent));
          })
          .catch(error => alert('Could not get content!'))
          .finally(() => that.loading = false);
    },
    PostVOHContent: function () {
      const that = this;
      axios.post('/post-voh-content', that.vohContent, {headers: {token: sessionStorage.getItem('token')}})
          .then(response => that.vohContent = response.data)
          .catch(error => alert('Error saving content!'))
          .finally(() => that.saving = false);
    },
    InvalidCredentials: function () {
      this.credentials.password = '';
      this.$refs.form.validate();
      alert('Incorrect password!');
    }
  }
});
</script>

<style></style>
