<template>
  <div class="page-container">
    <h1 class="page-title text-center">Learn and Advocate</h1>
    <v-divider class="mb-7"></v-divider>
    <v-row>
      <v-spacer></v-spacer>
      <v-col lg="6" md="6" sm="12" cols="12">
        <iframe width="100%" height="350px" src="https://www.youtube.com/embed/2H4qyOG13fc" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </v-col>
      <v-spacer></v-spacer>
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
  name: 'LearnAndAdvocate',
  data: () => {
    return {}
  },
  created: function () {

  },
  methods: {}
});
</script>

<style></style>