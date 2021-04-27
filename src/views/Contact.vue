<template>
  <div class="page-container">
    <h1 class="page-title text-center">Contact</h1>
    <v-divider class="mb-7"></v-divider>

    <v-row>
      <v-col lg="6" md="6" sm="12" cols="12">

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.6425945019528!2d-93.27821073408852!3d44.971255729098274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332be0570719f%3A0xc70ecff93fa30d47!2s1200%20S%20Marquette%20Ave%2C%20Minneapolis%2C%20MN%2055403!5e0!3m2!1sen!2sus!4v1618511143781!5m2!1sen!2sus"
            width="100%"
            height="350"
            style="border:0;"
            class="pr-3 mb-5"
            allowfullscreen=""
            loading="lazy"></iframe>

        <h4>Address:</h4>
        <p>
          {{ vohContent.general.organizationName }}<br>
          {{ vohContent.general.address.street }}<br>
          {{ vohContent.general.address.city }}, {{ vohContent.general.address.state }}
          {{ vohContent.general.address.zipCode }}
        </p>
        <h4>Email:</h4>
        <p><a :href="'mailto:' + vohContent.general.email">{{ vohContent.general.email }}</a></p>
      </v-col>
      <v-col lg="6" md="6" sm="12" cols="12">
        <h2 class="mb-3">Subscribe to Our Newsletter!</h2>
        <v-form ref="form"
                v-model="valid"
                lazy-validation>

          <v-row>
            <v-col>
              <h4 class="mt-3 mb-3">Contact:</h4>

              <v-text-field
                  v-model="form.fullName"
                  :rules="nameRules"
                  label="Full Name"/>

              <v-text-field
                  v-model="form.email"
                  label="E-mail"
                  :rules="emailRules"/>

              <v-text-field
                  v-model="form.phoneNumber"
                  label="Phone Number"
                  type="number"
                  :rules="phoneRules"/>

              <v-text-field
                  v-model="form.howDidYouHearAboutUs"
                  label="How Did You Hear About Us?"
                  :rules="required"/>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <h4 class="mt-3 mb-3">Address <i>(optional)</i>:</h4>
              <v-text-field
                  v-model="form.address.street"
                  label="Street"/>

              <v-text-field
                  v-model="form.address.city"
                  label="City"/>

              <v-row>
                <v-col>
                  <v-select
                      v-model="form.address.state"
                      label="State"
                      :items="states"/>
                </v-col>
                <v-col>
                  <v-text-field
                      v-model="form.address.zipCode"
                      label="Zip Code"
                      type="number"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-btn
              :loading="sending"
              :disabled="!valid || sending"
              color="success"
              class="mr-4"
              @click="validate">
            Subscribe
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
    vohContent: JSON.parse(sessionStorage.getItem('vohContent')),
    valid: true,
    sending: false,
    states: [
      'AZ', 'AL', 'AK', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
      'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
      'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 100) || 'Name must be less than 100 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    required: [
      v => !!v || 'Field is required',
      v => (v && v.length <= 100) || 'Field must be less than 100 characters',
    ],
    phoneRules: [
      v => !!v || 'Phone number is required',
      v => (v && v.length === 10) || 'Phone number must be exactly 10 numbers',
    ],
    form: {
      fullName: '',
      email: '',
      phoneNumber: undefined,
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: undefined
      },
      howDidYouHearAboutUs: ''
    }
  }),
  methods: {
    SetFormToDefaults() {
      this.form = {
        fullName: '',
        email: '',
        phoneNumber: undefined,
        address: {
          street: '',
          city: '',
          state: '',
          zipCode: undefined
        },
        howDidYouHearAboutUs: ''
      }
      this.$refs.form.reset();
    },
    validate() {
      if (this.$refs.form.validate()) this.PostMessage();
    },
    PostMessage() {
      this.sending = true;
      const that = this;
      axios.post('/post-message', that.form, {})
          .then(response => {
            EventBus.$emit('snackbar', true, 'success', 'Subscribed!');
            that.SetFormToDefaults();
          })
          .catch(error => EventBus.$emit('snackbar', true, 'error', error))
          .finally(() => that.sending = false)
    }
  },
});
</script>

<style></style>