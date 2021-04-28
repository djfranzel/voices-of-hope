<template>
  <div v-if="vohContent && vohContent.general" class="page-container">

    <h1 class="page-title text-center">{{ vohContent.whoWeAre.pageTitle }}</h1>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col cols="12" sm="12" md="6" lg="2">
        <v-img class="ml-auto mr-auto" max-width="150px" src="../static/voh_logo.png"></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="10">
        <h2 class="mb-3">{{ vohContent.whoWeAre.aboutTitle }}</h2>
        <p><span v-html="vohContent.whoWeAre.aboutText"></span></p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">{{ vohContent.whoWeAre.hopesBlockTitle }}</h2>
        <span v-html="vohContent.whoWeAre.hopesBlockContent"></span>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">{{ vohContent.whoWeAre.historyBlockTitle }}</h2>
        <v-img src="../static/amanda_front_of_group.jpg" style="float: right" max-width="100%" width="450px"
               class="ml-7 mb-7 elevation-5"></v-img>
        <span v-html="vohContent.whoWeAre.historyBlockContent"></span>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col cols="12" sm="12" md="6" lg="6">
        <h2 class="mb-3">{{ vohContent.whoWeAre.choirsBlockTitle }}</h2>
        <span v-html="vohContent.whoWeAre.choirsBlockContent"></span>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4" class="ml-auto">
        <v-img class="elevation-5" src="../static/women_in_row.jpg"></v-img>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7 mb-0">
      <v-col>
        <h2 class="mb-3">STAFF</h2>
        <v-row>
          <v-col v-if="vohContent.whoWeAre.staff" v-for="staff of vohContent.whoWeAre.staff" lg="4" md="4" sm="12"
                 cols="12">
            <v-card elevation="3">
              <v-img class="staff-headshot" :src="staff.imageURL"></v-img>
              <v-card-title>{{ staff.name }}</v-card-title>
              <v-card-subtitle>{{ staff.title }}</v-card-subtitle>
              <v-card-text>{{ staff.bio }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="ma-7 mb-14">
      <v-col lg="2" md="2" sm="0" cols="0"></v-col>
      <v-col lg="4" md="4" sm="12" cols="12">
        <h2 class="mb-3">{{ vohContent.whoWeAre.volunteerBlockTitle }}</h2>
        <span v-html="vohContent.whoWeAre.volunteerBlockContent"></span>
      </v-col>
      <v-col lg="4" md="4" sm="12" cols="12">
        <h2 class="mb-3">{{ vohContent.whoWeAre.advisoryTitle }}</h2>
        <span v-html="vohContent.whoWeAre.advisoryContent"></span>
      </v-col>
      <v-col lg="2" md="2" sm="0" cols="0"></v-col>
    </v-row>

  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {EventBus} from "../event-bus";

export default Vue.extend({
  name: 'WhoWeAre',
  data: () => ({
    vohContent: JSON.parse(sessionStorage.getItem('vohContent'))
  }),
  created: function () {
    EventBus.$on('vohContent', () => this.vohContent = JSON.parse(sessionStorage.getItem('vohContent')));
  },
  methods: {}
});
</script>

<style scoped>

.staff-headshot {
  /*max-height: 200px !important;*/
}

</style>
