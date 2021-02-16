<template>
  <div class="page-container">
    <h1 class="page-title text-center">Contact</h1>
    <v-divider class="mb-7"></v-divider>

    <v-row>
      <v-col lg="6" md="6" sm="12" cols="12">
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
              :loading="sending"
              :disabled="!valid || sending"
              color="success"
              class="mr-4"
              @click="validate">
            Submit
            <v-icon right>mdi-send</v-icon>
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
    sending: false,
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
        this.PostMessage()
      }
    },
    PostMessage() {
      this.sending = true;
      const that = this;
      console.log(this.form);
      axios
          .post('/post-message', that.form, {})
          .then(response => {
            EventBus.$emit('snackbar', true, 'success', 'Message sent!')
          })
          .catch(error => {
            EventBus.$emit('snackbar', true, 'error', error)
          })
          .finally(() => {
            that.sending = false
          })
    },
    showToast(message, type) {

    },
  },
});
</script>

<style></style>