<template>
  <div class="page-container">
    <h1 class="page-title text-center">Join Our Song</h1>
    <v-divider class="mb-3"></v-divider>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'WhyWeSing',
  data: () => ({

  }),
  created: function () {

  },
  methods: {
    NavigateToLink: function (link) {
      window.open(link, '_blank')
    }
  }
});
</script>

<style></style>
