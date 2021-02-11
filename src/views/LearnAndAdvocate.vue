<template>
  <div class="page-container">
    <h1 class="page-title">Learn and Advocate</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2H4qyOG13fc" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
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