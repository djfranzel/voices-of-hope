<template>
  <v-app id="inspire">
    <Navigation></Navigation>
    <v-main>
      <v-container class="pt-5" fluid>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer app class="text-center blue-grey darken-1 theme--dark">
      <p class="mb-0 ml-auto mr-auto">Voices of Hope - &copy;{{new Date().getFullYear()}}</p>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import axios from 'axios';
import {EventBus} from './event-bus.js';

export default {
  name: 'App',
  components: {
    Navigation
  },
  data: () => {
    return {};
  },
  created: function () {
  },
  methods: {}
};
</script>

<style></style>
