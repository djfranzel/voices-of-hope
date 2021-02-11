<template>
  <div class="page-container">
    <h1 class="page-title text-center">Contact</h1>
    <v-divider class="mb-7"></v-divider>

    <v-row>
      <v-col cols="6">
        <v-form ref="form"
                v-model="valid"
                lazy-validation>

          <v-text-field
              v-model="form.fullName"
              :rules="nameRules"
              label="Full Name"
              required/>

          <v-text-field
              v-model="form.email"
              label="E-mail"
              :rules="emailRules"
              required/>

          <v-textarea
              v-model="form.message"
              label="Message"
              :rules="messageRules"
              required/>
          <br>
          <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate">
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <br>
    <br>
    <br>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {EventBus} from '../event-bus';
import axios from "axios";

export default Vue.extend({
  name: 'Contact',
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 100) || 'Name must be less than 100 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 1000) || 'Message must be less than 1000 characters',
    ],
    form: {
      fullName: '',
      email: '',
      message: ''
    }
  }),
  created: function () {

  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        // make the post to the backend here
        alert(JSON.stringify(this.form))
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
});
</script>

<style></style>