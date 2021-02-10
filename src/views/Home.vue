<template>
  <div style="min-height: calc(100vh - 128px);">
    <h1>Voices of Hope</h1>
    <h2>Minnesota Prison Music Initiative</h2>
    <v-carousel cycle>
      <v-carousel-item src="../assets/cantus_collab_1.jpg"></v-carousel-item>
      <v-carousel-item src="../assets/cantus_collab_2.jpg"></v-carousel-item>
      <v-carousel-item src="../assets/amanda_headshot.jpg"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {EventBus} from '../event-bus';
import axios from "axios";

export default Vue.extend({
  name: 'Home',
  data: () => ({
    items: ['../assets/cantus_collab_1','../assets/cantus_collab_2','']
  }),
  created: function () {

  },
  methods: {}
});
</script>

<style></style>
