<template>
  <div v-if="vohContent && vohContent.general" class="page-container">

    <v-row>
      <v-col cols="auto">
        <h1 class="page-title">Admin</h1>
      </v-col>
      <v-col v-if="showEditSections" cols="auto" class="ml-auto">
        <v-btn @click="Logout()">
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-col>
    </v-row>

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
        <br>
        <br>
        <br>
        <br>
      </v-col>
      <v-col cols="0" sm="0" md="3" lg="3"></v-col>
    </v-row>
    <div v-else>
      <v-row>
        <v-col>

          <v-tabs v-model="tab"
                  background-color="transparent"
                  color="blue" grow>
            <v-tab key="Subscriptions">Subscriptions</v-tab>
            <v-tab key="General">General</v-tab>
            <v-tab key="Home">Home</v-tab>
            <v-tab key="Who We Are">Who We Are</v-tab>
            <v-tab key="Why We Sing">Why We Sing</v-tab>
            <v-tab key="Join Our Song">Join Our Song</v-tab>
          </v-tabs>

          <br>
          <br>

          <v-tabs-items v-model="tab">
            <v-tab-item key="Subscriptions">
              <v-data-table
                  sort-by="epoch_dateSubmitted"
                  :sort-desc="true"
                  :headers="subscriptionsHeaders"
                  :items="subscriptions"
                  :search="search"
                  item-key="id"
                  :loading="loading"
                  :items-per-page="15"
                  :footer-props="{
                      showFirstLastPage: true,
                      firstIcon: 'mdi-arrow-collapse-left',
                      lastIcon: 'mdi-arrow-collapse-right'
                    }"
                  class="elevation-3">
                <template v-slot:item.address="{ item }">
                  <span v-html="item.address.street + '<br>' + item.address.city + ', ' + item.address.state + ' ' + item.address.zipCode"></span>
                </template>
                <template v-slot:item.phoneNumber="{ item }">
                  {{ formatPhoneNumber(item.phoneNumber) }}
                </template>
                <template v-slot:item.epoch_dateSubmitted="{ item }">
                  {{ moment(item.dateSubmitted).format('MM/DD/YYYY HH:mm A') }}
                </template>
                <template v-slot:top>
                  <v-row class="pl-5 pr-5">
                    <v-col cols="auto" class="mr-auto">
                      <h2>Subscriptions</h2>
                    </v-col>
                    <v-col cols="auto">
                      <v-text-field
                          class="mr-4"
                          style="display: inline-flex"
                          v-model="search"
                          v-on:keyup.esc="search = ''"
                          prepend-icon="mdi-magnify"
                          label="Search Subscriptions">
                        <v-icon v-if="search.length" @click="search = ''" slot="append">mdi-close</v-icon>
                        <v-icon v-else slot="append" color="transparent">mdi-close</v-icon>
                      </v-text-field>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs"
                                  v-on="on"
                                  @click="GetSubscriptions()"
                                  :loading="loading">
                            mdi-refresh
                          </v-icon>
                        </template>
                        <span>Refresh Data</span>
                      </v-tooltip>
                    </v-col>
                  </v-row>
                </template>
              </v-data-table>
            </v-tab-item>
            <v-tab-item key="General">
              <v-text-field
                  v-model="vohContentTemp.general.organizationName"
                  label="Organization Name"/>
              <v-text-field
                  v-model="vohContentTemp.general.email"
                  label="Email"/>
              <v-text-field
                  v-model="vohContentTemp.general.facebookLink"
                  label="Facebook Link"/>
              <v-text-field
                  v-model="vohContentTemp.general.donateLink"
                  label="Donate Link"/>
              <h3>Address</h3>
              <v-text-field
                  v-model="vohContentTemp.general.address.street"
                  label="Street"/>
              <v-text-field
                  v-model="vohContentTemp.general.address.city"
                  label="City"/>
              <v-text-field
                  v-model="vohContentTemp.general.address.state"
                  label="State"/>
              <v-text-field
                  v-model="vohContentTemp.general.address.zipCode"
                  label="Zip Code"/>
              <h3>Footer</h3>
              <v-text-field
                  v-model="vohContentTemp.general.footer.leftTitle"
                  label="Left Title"/>
              <v-textarea
                  v-model="vohContentTemp.general.footer.leftText"
                  label="Left Text"/>
              <v-text-field
                  v-model="vohContentTemp.general.footer.rightTitle"
                  label="Right Title"/>
            </v-tab-item>
            <v-tab-item key="Home">
              <v-textarea
                  v-model="vohContentTemp.home.mainQuote"
                  label="Main Quote"/>
              <v-textarea
                  v-model="vohContentTemp.home.aboutBlockText"
                  label="About Block Text"/>
              <v-textarea
                  v-model="vohContentTemp.home.testimonialBlockQuote"
                  label="Testimonial Block Quote"/>
              <v-text-field
                  v-model="vohContentTemp.home.testimonialBlockAuthor"
                  label="Testimonial Block Author"/>
              <v-textarea
                  v-model="vohContentTemp.home.collaborateBlockText"
                  label="Collaborate Block Text"/>
            </v-tab-item>
            <v-tab-item key="Who We Are">
              <v-text-field
                  v-model="vohContentTemp.whoWeAre.pageTitle"
                  label="Page Title"/>
              <v-text-field
                  v-model="vohContentTemp.whoWeAre.aboutTitle"
                  label="About Title"/>
              <v-textarea
                  v-model="vohContentTemp.whoWeAre.aboutText"
                  label="About Text"/>
              <v-text-field
                  v-model="vohContentTemp.whoWeAre.hopesBlockTitle"
                  label="Hopes Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whoWeAre.hopesBlockContent"
                  label="Hopes Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.whoWeAre.historyBlockTitle"
                  label="History Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whoWeAre.historyBlockContent"
                  label="History Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.whoWeAre.choirsBlockTitle"
                  label="Choirs Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whoWeAre.choirsBlockContent"
                  label="Choirs Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.whoWeAre.volunteerBlockTitle"
                  label="Volunteer Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whoWeAre.volunteerBlockContent"
                  label="Volunteer Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.whoWeAre.advisoryTitle"
                  label="Advisory Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whoWeAre.advisoryContent"
                  label="Advisory Block Content"/>
              <div v-for="person of vohContentTemp.whoWeAre.staff">
                <v-text-field
                    v-model="person.name"
                    label="Name"/>
                <v-text-field
                    v-model="person.title"
                    label="Title"/>
                <v-text-field
                    v-model="person.bio"
                    label="Short Bio"/>
                <v-text-field
                    v-model="person.imageURL"
                    label="Image URL"/>
              </div>
            </v-tab-item>
            <v-tab-item key="Why We Sing">
              <v-text-field
                  v-model="vohContentTemp.whyWeSing.pageTitle"
                  label="Page Title"/>
              <v-textarea
                  v-model="vohContentTemp.whyWeSing.testimonialBlockQuote"
                  label="Testimonial Block Quote"/>
              <v-text-field
                  v-model="vohContentTemp.whyWeSing.testimonialBlockAuthor"
                  label="Testimonial Block Author"/>
              <v-text-field
                  v-model="vohContentTemp.whyWeSing.benefitsTitle"
                  label="Benefits Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whyWeSing.benefitsContent"
                  label="Benefits Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.whyWeSing.incarcerationTitle"
                  label="Incarceration Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whyWeSing.incarcerationContent"
                  label="Incarceration Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.whyWeSing.testimonialsTitle"
                  label="Testimonials Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.whyWeSing.testimonialsContentOne"
                  label="Testimonials Block Content One"/>
              <v-textarea
                  v-model="vohContentTemp.whyWeSing.testimonialsContentTwo"
                  label="Testimonials Block Content Two"/>
            </v-tab-item>
            <v-tab-item key="Join Our Song">
              <v-text-field
                  v-model="vohContentTemp.joinOurSong.pageTitle"
                  label="Page Title"/>
              <v-text-field
                  v-model="vohContentTemp.joinOurSong.supportBlockTitle"
                  label="Support Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.joinOurSong.supportBlockContent"
                  label="Support Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.joinOurSong.singBlockTitle"
                  label="Sing Block Title"/>
              <v-textarea
                  v-model="vohContentTemp.joinOurSong.singBlockContent"
                  label="Sing Block Content"/>
              <v-text-field
                  v-model="vohContentTemp.joinOurSong.learnAdvocateTitle"
                  label="Learn & Advocate Title"/>
              <v-textarea
                  v-model="vohContentTemp.joinOurSong.learnAdvocateContent"
                  label="Learn & Advocate Content"/>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row v-if="tab !== 'Subscriptions'">
        <v-col>
          <v-btn block
                 class="mb-7 mt-7"
                 color="success"
                 :disabled="loading || saving"
                 :loading="saving"
                 @click="PostVOHContent()">
            <v-icon left>mdi-content-save</v-icon>
            Save
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import axios from "axios";
import {EventBus} from "../event-bus";
const moment = require('moment');

export default Vue.extend({
  name: 'Admin',
  data: () => ({
    moment: moment,
    tab: 'General',
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
    vohContentTemp: {
      general: {
        organizationName: '',
        email: '',
        facebookLink: '',
        donateLink: '',
        address: {
          street: '',
          city: '',
          state: '',
          zipCode: null
        },
        footer: {
          leftTitle: '',
          leftText: '',
          rightTitle: 'Contact Us'
        }
      },
      home: {
        mainQuote: '',
        aboutBlockText: '',
        testimonialBlockQuote: '',
        testimonialBlockAuthor: '',
        collaborateBlockText: ''
      },
      whoWeAre: {
        pageTitle: '',
        aboutTitle: '',
        aboutText: '',
        hopesBlockTitle: '',
        hopesBlockContent: '',
        historyBlockTitle: '',
        historyBlockContent: '',
        choirsBlockTitle: '',
        choirsBlockContent: '',
        staff: [
          {
            name: '',
            title: '',
            bio: '',
            imageURL: ''
          },
          {
            name: '',
            title: '',
            bio: '',
            imageURL: ''
          },
          {
            name: '',
            title: '',
            bio: '',
            imageURL: ''
          },
          {
            name: '',
            title: '',
            bio: '',
            imageURL: ''
          },
          {
            name: '',
            title: '',
            bio: '',
            imageURL: ''
          },
        ],
        volunteerBlockTitle: '',
        volunteerBlockContent: '',
        advisoryTitle: '',
        advisoryContent: '',
      },
      whyWeSing: {
        pageTitle: '',
        testimonialBlockQuote: '',
        testimonialBlockAuthor: '',
        benefitsTitle: '',
        benefitsContent: '',
        incarcerationTitle: '',
        incarcerationContent: '',
        testimonialsTitle: '',
        testimonialsContentOne: '',
        testimonialsContentTwo: ''
      },
      joinOurSong: {
        pageTitle: '',
        supportBlockTitle: '',
        supportBlockContent: '',
        singBlockTitle: '',
        singBlockContent: '',
        learnAdvocateTitle: '',
        learnAdvocateContent: ''
      }
    },
    vohContent: JSON.parse(sessionStorage.getItem('vohContent')),
    saving: false,
    subscriptions: [],
    search: '',
    subscriptionsHeaders: [
      {text: 'Full Name', value: 'fullName', sortable: true},
      {text: 'Email', value: 'email', sortable: true},
      {text: 'Phone Number', value: 'phoneNumber', sortable: true},
      {text: 'Address', value: 'address', sortable: false},
      {text: 'How Did You Hear About Us', value: 'howDidYouHearAboutUs', sortable: true},
      {text: 'Date Submitted', value: 'epoch_dateSubmitted', sortable: true},
    ]
  }),
  mounted: function () {
    this.CheckSession();
    EventBus.$on('vohContent', () => {
      this.vohContent = JSON.parse(sessionStorage.getItem('vohContent'));
      this.CheckSession();
    });
  },
  methods: {
    GetSubscriptions: function () {
      this.loading = true;
      const that = this;
      axios.get('/get-subscribers', {headers: {token: sessionStorage.getItem('token')}})
          .then(response => that.subscriptions = response.data)
          .catch(error => alert('Could not get subscribers!'))
          .finally(() => that.loading = false);
    },
    CheckSession: function () {
      const that = this;
      axios.get('/check-session', {headers: {token: sessionStorage.getItem('token')}})
          .then(response => {
            if (response.data.authenticated) {
              that.showEditSections = true;
              that.GetVOHContent();
              that.GetSubscriptions();
            } else {
              console.log('Invalid token')
            }
          })
          .catch(error => {
            console.log('Invalid token')
            sessionStorage.removeItem('token')
          })
          .finally(() => that.loading = false);
    },
    Login: function () {
      if (!this.valid) return this.$refs.form.validate();
      const that = this;
      this.loading = true;
      axios.post('/authenticate', that.credentials)
          .then(response => {
            if (response.data.token) {
              sessionStorage.setItem('token', response.data.token);
              that.showEditSections = true;
              that.GetVOHContent();
              that.GetSubscriptions();
            } else {
              that.InvalidCredentials()
            }
          })
          .catch(error => that.InvalidCredentials())
          .finally(() => that.loading = false);
    },
    GetVOHContent: function () {
      this.loading = true;
      const that = this;
      axios.get('/get-voh-content')
          .then(response => {
            that.vohContent = response.data;
            sessionStorage.setItem('vohContent', JSON.stringify(that.vohContent));
            that.vohContentTemp = JSON.parse(JSON.stringify(that.vohContent));
          })
          .catch(error => alert('Could not get content!'))
          .finally(() => that.loading = false);
    },
    PostVOHContent: function () {
      const that = this;
      this.saving = true;
      this.vohContent = JSON.parse(JSON.stringify(this.vohContentTemp));
      axios.post('/post-voh-content', that.vohContent, {headers: {token: sessionStorage.getItem('token')}})
          .then(response => {
            that.vohContent = response.data;
            EventBus.$emit('snackbar', true, 'success', 'Updated!');
            sessionStorage.setItem('vohContent', JSON.stringify(that.vohContent));
          })
          .catch(error => alert('Error saving content!'))
          .finally(() => that.saving = false);
    },
    InvalidCredentials: function () {
      this.credentials.password = '';
      this.$refs.form.validate();
      sessionStorage.removeItem('token')
      alert('Incorrect password!');
    },
    Logout: function () {
      const that = this;
      axios.post('/logout', {})
          .finally(() => that.$router.push({name: 'Home'}));
    },
    formatPhoneNumber: function (phone) {
      const cleaned = ('' + phone).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      return match ? '(' + match[1] + ') ' + match[2] + '-' + match[3] : phone;
    }
  }
});
</script>

<style scoped>
h2 {
  margin-bottom: 15px;
}
</style>
