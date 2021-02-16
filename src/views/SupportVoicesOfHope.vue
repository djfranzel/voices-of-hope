<template>
  <div class="page-container">
    <h1 class="page-title text-center">Support Voices of Hope</h1>
    <v-divider class="mb-7"></v-divider>
    <p>We are currently accepting donations through our page at GiveMN.</p>
    <v-btn class="accent" @click="NavigateToUrl('https://www.givemn.org/story/Voicesofhope')">
      Donate
      <v-icon right>mdi-open-in-new</v-icon>
    </v-btn>
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
  name: 'SupportVoicesOfHope',
  data: () => {
    return {}
  },
  created: function () {

  },
  methods: {
    NavigateToUrl: function (url) {
      window.open(url, '_blank')
    }
  }
});
</script>

<style></style>