<template>
  <div class="page-container">
    <h1 class="page-title">Contact</h1>
    <v-row>
      <v-col cols="6">
        <p>"Voices of Hope is a Minnesota based nonprofit that hopes to provide accessible music-making opportunities within
          justice-involved populations that foster individual growth and bridge unlikely communities through song."</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {EventBus} from '../event-bus';
import axios from "axios";

export default Vue.extend({
  name: 'Contact',
  data: () => {
    return {}
  },
  created: function () {

  },
  methods: {}
});
</script>

<style></style>