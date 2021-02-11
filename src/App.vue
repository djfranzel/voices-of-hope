<template>
  <v-app>
    <v-app-bar fixed
               height="128px"
               color="white">
      <v-spacer></v-spacer>
      <v-row no-gutters>
        <v-col cols="5" class="logo-container">
          <v-img src="./assets/voh-logo.png"
                 style="float:left"
                 max-height="95"
                 max-width="95"
                 class="ma-3 ml-0"
                 alt="Voices of Hope Logo"/>
          <h2 class="mt-7">Voices of Hope</h2>
          <h3>Minnesota Prison Music Initiative</h3>
        </v-col>
        <v-col cols="7">
          <v-row class="mb-2 mt-1">
            <v-btn @click="NavigateToUrl('https://www.facebook.com/wearevoicesofhope/')" icon class="ml-auto">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-btn :class="{'mr-2': true, 'mt-2': true, 'ml-auto': true, 'white': !CurrentPage('Home')}" depressed
                   @click="Navigate('Home')">
              Home
            </v-btn>
            <v-btn :class="{'mr-2': true, 'mt-2': true, 'white': !CurrentPage('WhoWeAre')}" depressed
                   @click="Navigate('WhoWeAre')">
              Who We Are
            </v-btn>
            <v-btn :class="{'mr-2': true, 'mt-2': true, 'white': !CurrentPage('WhyWeSing')}" depressed
                   @click="Navigate('WhyWeSing')">
              Why We Sing
            </v-btn>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" :class="{'mr-2': true, 'mt-2': true, 'white': !CurrentPage('JoinOurSong')}" depressed>
                  Join Our Song
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item :class="{'active-list-item': CurrentPage('SupportVoicesOfHope')}" @click="Navigate('SupportVoicesOfHope')">
                  <v-list-item-title>Support Voices of Hope</v-list-item-title>
                </v-list-item>
                <v-list-item :class="{'active-list-item': CurrentPage('SingWithVoicesOfHope')}" @click="Navigate('SingWithVoicesOfHope')">
                  <v-list-item-title>Sing With Voices of Hope</v-list-item-title>
                </v-list-item>
                <v-list-item :class="{'active-list-item': CurrentPage('LearnAndAdvocate')}" @click="Navigate('LearnAndAdvocate')">
                  <v-list-item-title>Learn & Advocate</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn :class="{'mt-2': true, 'white': !CurrentPage('Contact')}" depressed
                   @click="Navigate('Contact')">
              Contact
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>

    <div style="margin-top: 128px">
      <v-container class="mb-0 pb-0">
        <router-view/>
      </v-container>
      <v-footer outlined padless class="footer ma-0">
        <v-container class="pa-0">
          <v-row class="pa-0 ma-1">
            <v-col cols="6">
              <h3 class="mb-5 footer-title">ABOUT VOICES OF HOPE</h3>
              <p>Voices of Hope is a Minnesota based nonprofit that hopes to provide accessible music-making
                opportunities within justice-involved populations that foster individual growth and bridge
                unlikely communities through song.</p>
              <p><a href="https://amandakateweber.com/voices-of-hope/" target="_blank">Amanda Weber's Blog</a></p>
              <v-btn @click="NavigateToUrl('https://www.facebook.com/wearevoicesofhope/')" icon class="mr-2">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>

              <v-btn icon class="mr-2">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>

              <v-btn icon class="mr-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="3">
              <h3 class="mb-5 footer-title">USEFUL LINKS</h3>
              <v-btn depressed small @click="Navigate('Home')">
                <v-icon small left>mdi-link</v-icon>
                Home
              </v-btn>
              <br>
              <v-btn depressed small @click="Navigate('WhoWeAre')">
                <v-icon small left>mdi-link</v-icon>
                Who We Are
              </v-btn>
              <br>
              <v-btn depressed small @click="Navigate('WhyWeSing')">
                <v-icon small left>mdi-link</v-icon>
                Why We Sing
              </v-btn>
              <br>
              <v-btn depressed small @click="Navigate('SupportVoicesOfHope')">
                <v-icon small left>mdi-link</v-icon>
                Support Voices of Hope
              </v-btn>
              <br>
              <v-btn depressed small @click="Navigate('Contact')">
                <v-icon small left>mdi-link</v-icon>
                Contact
              </v-btn>

            </v-col>
            <v-col cols="3">
              <h3 class="mb-5 footer-title">CONTACT</h3>
              <div class="mb-1">
                <v-icon small class="mr-2">mdi-map-marker</v-icon>
                1234 East Stratton Street<br>
                <span class="ml-6">Minneapolis, MN 55055</span>
              </div>
              <div class="mb-1">
                <v-icon small class="mr-2">mdi-phone</v-icon>
                <a style="color: rgba(0, 0, 0, 0.87)" href="tel:1234567890">(123) 456-7890</a>
              </div>
              <div class="mb-1">
                <v-icon small class="mr-2">mdi-email</v-icon>
                <a style="color: rgba(0, 0, 0, 0.87)" href="mailto:wearevoicesofhope@gmail.com">wearevoicesofhope@gmail.com</a>
              </div>
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0" style="border-top: 1px solid #cccccc">
            <v-col class="pa-0 ma-0">
              <p class="font-weight-bold text-center ma-3">&copy; {{ new Date().getFullYear() }} - Voices of
                Hope</p>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({}),
  created: function () {

  },
  methods: {
    Navigate: function (page) {
      this.$router.push({name: page})
    },
    NavigateToUrl: function (url) {
      window.open(url, '_blank')
    },
    CurrentPage: function (name) {
      if (name === 'JoinOurSong') {
        const route = this.$router.currentRoute.name;
        return route === 'SupportVoicesOfHope' || route === 'SingWithVoicesOfHope' || route === 'LearnAndAdvocate';
      }
      else {
        return this.$router.currentRoute.name === name;
      }
    }
  }
};
</script>

<style>

.logo-container>h2 {
  font-family: 'Merriweather', serif;
  letter-spacing: 2px;
}

.logo-container>h3 {
  font-family: 'Merriweather', serif;
  letter-spacing: 2px;
}

.footer {
  border-top: 1px solid black;
}

.footer-title {

}

.page-container {
  min-height: calc(100vh - 128px - 283px);
  padding-top: 32px;
}

.page-title {
  margin-bottom: 40px;
}

.footer-title:after {
  content: "";
  display: block;
  width: 100px;
  padding-top: 10px;
  border-bottom: 2px dotted #72c02c;
}

.active-list-item {
  background: #f5f5f5;
}
</style>
