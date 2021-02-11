<template>
  <div class="page-container">
    <h1 class="page-title">Support Voices of Hope</h1>
    <v-btn @click="NavigateTo()" color="red" style="color: white">
      <v-icon left>mdi-currency-usd</v-icon>
      Donate
    </v-btn>
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
    NavigateTo: function () {
      window.open('https://www.givemn.org/story/Voicesofhope', '_blank')
    }
  }
});
</script>

<style></style>