<template>
  <div class="page-container">

    <v-row>
      <v-col>
        <v-img src="../static/voh_banner.png" alt="Voices of Hope Banner" max-height="300px" contain></v-img>
        <div class="text-center" style="margin: 0 auto; max-width: 600px;">
          <h2 class="ma-5">
            {{ vohContent.home.mainQuote }}
          </h2>
        </div>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-img class="elevation-5" src="../static/front_of_group3.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="8">
        <p>{{ vohContent.home.aboutBlockText }}</p>
        <v-btn @click="Navigate('WhoWeAre')" class="primary">
          Learn More
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col class="text-center">
        <h3 class="mb-3">
          {{ vohContent.home.testimonialBlockQuote }}
        </h3>
        <p><i>
          {{ vohContent.home.testimonialBlockAuthor }}
        </i></p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col class="text-center">
        <v-img class="elevation-5 ml-auto mr-auto" max-width="800px" contain src="../static/voh_stats.jpg"></v-img>
        <v-btn class="accent mt-7" @click="NavigateToUrl(vohContent.general.donateLink)">
          Support
          <v-icon right>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7 mb-14">
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-img class="ml-auto" max-width="225px" src="../static/cea_text.png"></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="8" class="mt-3">
        <p>{{ vohContent.home.collaborateBlockText }}</p>
        <v-btn @click="Navigate('WhoWeAre')" class="primary">
          Collaborate
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    vohContent: JSON.parse(sessionStorage.getItem('vohContent'))
  }),
  created: function () {

  },
  methods: {
    Navigate: function (page) {
      this.$router.push({name: page})
    },
    NavigateToUrl: function (url) {
      window.open(url, '_blank')
    }
  }
});
</script>

<style></style>
