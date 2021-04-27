<template>
  <div v-if="vohContent.general" class="page-container">
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

          <v-tabs v-model="tab" background-color="blue" grow>
            <v-tab key="General"></v-tab>
            <v-tab key="Home"></v-tab>
            <v-tab key="Who We Are"></v-tab>
            <v-tab key="Why We Sing"></v-tab>
            <v-tab key="Join Our Song"></v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
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
      <v-row>
        <v-col>
          <v-btn block
                 class="mb-7 mt-7"
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
import axios from "axios";

export default Vue.extend({
  name: 'Admin',
  data: () => ({
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
  }),
  mounted: function () {
    this.CheckSession();
  },
  methods: {
    CheckSession: function () {
      const that = this;
      axios.get('/check-session', {headers: {token: sessionStorage.getItem('token')}})
          .then(response => {
            if (response.data.authenticated) {
              that.showEditSections = true;
            } else {
              console.log('Invalid token')
            }
          })
          .catch(error => console.log('Invalid token'))
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
      this.vohContent = JSON.parse(JSON.stringify(this.vohContentTemp));
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

<style scoped>
h2 {
  margin-bottom: 15px;
}
</style>
