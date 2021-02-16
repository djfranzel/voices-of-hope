<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        v-if="getMobile()"
        app>

      <v-row no-gutters>
        <v-col class="logo-container">
          <v-img src="./static/voh_logo.png"
                 max-width="125px"
                 class="ma-3"
                 alt="Voices of Hope Logo"/>
          <h2 class="ml-5">Voices of Hope</h2>
          <h3 class="ml-5">Minnesota Prison Music Initiative</h3>
        </v-col>
      </v-row>
      <v-row class="ml-1">
        <v-col>
          <v-btn @click="NavigateToUrl('https://www.facebook.com/wearevoicesofhope/')" icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row class="ml-0">
        <v-col>
          <v-btn :class="{'mr-2': true, 'mt-2': true, 'ml-auto': true, 'white': !CurrentPage('Home')}" depressed
                 @click="Navigate('Home')">
            Home
          </v-btn>
          <br>
          <v-btn :class="{'mr-2': true, 'mt-2': true, 'white': !CurrentPage('WhoWeAre')}" depressed
                 @click="Navigate('WhoWeAre')">
            Who We Are
          </v-btn>
          <br>
          <v-btn :class="{'mr-2': true, 'mt-2': true, 'white': !CurrentPage('WhyWeSing')}" depressed
                 @click="Navigate('WhyWeSing')">
            Why We Sing
          </v-btn>
          <br>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on"
                     :class="{'mr-2': true, 'mt-2': true, 'white': !CurrentPage('JoinOurSong')}" depressed>
                Join Our Song
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item :class="{'active-list-item': CurrentPage('SupportVoicesOfHope')}"
                           @click="Navigate('SupportVoicesOfHope')">
                <v-list-item-title>Support Voices of Hope</v-list-item-title>
              </v-list-item>
              <v-list-item :class="{'active-list-item': CurrentPage('SingWithVoicesOfHope')}"
                           @click="Navigate('SingWithVoicesOfHope')">
                <v-list-item-title>Sing With Voices of Hope</v-list-item-title>
              </v-list-item>
              <v-list-item :class="{'active-list-item': CurrentPage('PhenomenalWomanProject')}"
                           @click="Navigate('PhenomenalWomanProject')">
                <v-list-item-title>Phenomenal Woman Project</v-list-item-title>
              </v-list-item>
              <v-list-item :class="{'active-list-item': CurrentPage('LearnAndAdvocate')}"
                           @click="Navigate('LearnAndAdvocate')">
                <v-list-item-title>Learn & Advocate</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <br>
          <v-btn :class="{'mt-2': true, 'white': !CurrentPage('Contact')}" depressed
                 @click="Navigate('Contact')">
            Contact
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-app-bar fixed color="white" v-if="getMobile()">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Voices of Hope</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img src="./static/voh_logo.png"
             class="ma-3 ml-0"
             max-height="32px"
             max-width="32px"
             alt="Voices of Hope Logo"/>
    </v-app-bar>
    <v-app-bar fixed
               v-if="!getMobile()"
               height="128"
               color="white">
      <v-spacer></v-spacer>
      <v-row no-gutters>
        <v-col cols="5" class="logo-container">
          <v-img src="./static/voh_logo.png"
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
                <v-btn v-bind="attrs" v-on="on"
                       :class="{'mr-2': true, 'mt-2': true, 'white': !CurrentPage('JoinOurSong')}" depressed>
                  Join Our Song
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item :class="{'active-list-item': CurrentPage('SupportVoicesOfHope')}"
                             @click="Navigate('SupportVoicesOfHope')">
                  <v-list-item-title>Support Voices of Hope</v-list-item-title>
                </v-list-item>
                <v-list-item :class="{'active-list-item': CurrentPage('SingWithVoicesOfHope')}"
                             @click="Navigate('SingWithVoicesOfHope')">
                  <v-list-item-title>Sing With Voices of Hope</v-list-item-title>
                </v-list-item>
                <v-list-item :class="{'active-list-item': CurrentPage('PhenomenalWomanProject')}"
                             @click="Navigate('PhenomenalWomanProject')">
                  <v-list-item-title>Phenomenal Woman Project</v-list-item-title>
                </v-list-item>
                <v-list-item :class="{'active-list-item': CurrentPage('LearnAndAdvocate')}"
                             @click="Navigate('LearnAndAdvocate')">
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

    <div>
      <v-container class="mb-0 pb-0">
        <router-view/>
      </v-container>
      <v-footer outlined padless class="footer ma-0">
        <v-container class="pa-0">
          <v-row class="pa-0 ma-1">
            <v-col lg="6" md="6" sm="12" cols="12">
              <h3 class="mb-5 footer-title">ABOUT VOICES OF HOPE</h3>
              <p>The <b>Voices of Hope</b> is a women’s prison choir at the Minnesota Correctional Facility in Shakopee,
                MN.
                The choir was founded in October 2015 by Amanda Weber and rehearses weekly at the prison.</p>
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
            <v-col lg="3" md="3" sm="12" cols="12">
              <h3 class="mb-5 footer-title">EXTERNAL LINKS</h3>
              <ul>
                <li>
                  <a href="https://amandakateweber.com/voices-of-hope/" target="_blank">Amanda Weber's Blog</a>
                </li>
                <li>
                  <a href="https://springboardforthearts.org/incubator-program/voices-of-hope/" target="_blank">SpringBoard
                    for the Arts</a>
                </li>
                <li>
                  <a href="https://www.givemn.org/story/Voicesofhope" target="_blank">GiveMN Page</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=2H4qyOG13fc" target="_blank">Amanda's TEDx Talk</a>
                </li>
              </ul>

            </v-col>
            <v-col lg="3" md="3" sm="12" cols="12">
              <h3 class="mb-5 footer-title">CONTACT</h3>
              <div class="mb-1">
                <div style="display: inline-block; vertical-align: top">
                  <v-icon small class="mr-2">mdi-map-marker</v-icon>
                </div>
                <div style="display: inline-block">
                  1234 East Stratton Street<br>
                  Minneapolis, MN 55055
                </div>
              </div>
              <div class="mb-1">
                <v-icon small class="mr-2">mdi-phone</v-icon>
                <a href="tel:1234567890">(123) 456-7890</a>
              </div>
              <div class="mb-1">
                <v-icon small class="mr-2">mdi-email</v-icon>
                <a href="mailto:wearevoicesofhope@gmail.com">wearevoicesofhope@gmail.com</a>
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
    <v-snackbar v-model="notification.snackbar"
                bottom
                right
                :color="notification.color"
                :timeout="notification.timeout">
      <v-row>
        <v-col cols="auto" class="mr-auto">
          {{ notification.text }}
        </v-col>
        <v-col cols="auto">
          <v-icon dark @click="notification.snackbar = false">mdi-close</v-icon>
        </v-col>
      </v-row>
    </v-snackbar>
  </v-app>
</template>

<script>
import {EventBus} from './event-bus.js';

export default {
  name: 'App',
  data: () => ({
    notification: {
      color: '',
      snackbar: false,
      text: '',
      timeout: 10000,
    },
    drawer: false,
  }),
  created: function () {
    EventBus.$on('snackbar', (snackbar, color, text) => this.SetSnackbar(snackbar, color, text));
  },
  methods: {
    getMobile: function () {
      return window.innerWidth < 1300;
    },
    Navigate: function (page) {
      this.$router.push({name: page})
    },
    NavigateToUrl: function (url) {
      window.open(url, '_blank')
    },
    CurrentPage: function (name) {
      if (name === 'JoinOurSong') {
        const route = this.$router.currentRoute.name;
        return route === 'SupportVoicesOfHope' || route === 'SingWithVoicesOfHope' || route === 'LearnAndAdvocate' || route === 'PhenomenalWomanProject';
      } else {
        return this.$router.currentRoute.name === name;
      }
    },
    SetSnackbar: function (snackbar, color, text) {
      this.notification.snackbar = snackbar;
      this.notification.color = color;
      this.notification.text = text;
    }
  }
};
</script>

<style>

@import "reset.css";

.logo-container > h2 {
  font-family: 'Merriweather', serif;
  letter-spacing: 2px;
}

.logo-container > h3 {
  font-family: 'Merriweather', serif;
  letter-spacing: 2px;
}

.footer {
  border-top: 1px solid black;
}

.footer-title {

}

@media only screen and (min-width: 1300px) {
  .page-container {
    min-height: calc(100vh - 128px - 283px);
    padding-top: 164px;
  }
}

@media only screen and (max-width: 1300px) {
  .page-container {
    min-height: calc(100vh - 128px - 283px);
    padding-top: 86px;
  }
}



.page-title {
  margin-bottom: 40px;
}

.footer-title:after {
  content: "";
  display: block;
  width: 100px;
  padding-top: 10px;
  border-bottom: 2px dotted #4caf50;
}

.active-list-item {
  background: #f5f5f5;
}

</style>
