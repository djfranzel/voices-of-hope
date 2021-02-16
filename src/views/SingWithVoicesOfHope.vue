<template>
  <div class="page-container">
    <h1 class="page-title text-center">Sing with Voices of Hope</h1>
    <v-divider class="mb-7"></v-divider>
    <v-row>
      <v-spacer></v-spacer>
      <v-col lg="6" md="6" sm="12" cols="12">
        <v-img src="../static/join_voices_of_hope.jpg"></v-img>
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
  name: 'SingWithVoicesOfHope',
  data: () => {
    return {}
  },
  created: function () {

  },
  methods: {}
});
</script>

<style></style>