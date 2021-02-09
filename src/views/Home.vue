<template>
  <div style="min-height: 100vh">
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