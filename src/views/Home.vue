<template>
  <div class="page-container">
    <h1 class="page-title">Home</h1>
    <v-row>
      <v-col cols="6">
        <p>"Voices of Hope is a Minnesota based nonprofit that hopes to provide accessible music-making opportunities within
          justice-involved populations that foster individual growth and bridge unlikely communities through song."</p>
      </v-col>
    </v-row>
    <v-carousel cycle>
      <v-carousel-item src="../assets/cantus_collab_1.jpg"></v-carousel-item>
      <v-carousel-item src="../assets/cantus_collab_2.jpg"></v-carousel-item>
      <v-carousel-item src="../assets/amanda_headshot.jpg"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data: () => ({}),
  created: function () {

  },
  methods: {}
});
</script>

<style></style>
