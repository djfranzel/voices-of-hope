<template>
  <v-form v-model="valid" ref="confirmForm">

  </v-form>
</template>

<script lang="js">
import Vue from 'vue';
import {EventBus} from '@/event-bus';

export default Vue.extend({
  name: 'ConfirmDialog',
  data: function () {
    return {
      saving: false,
      loading: false,
      valid: false,
      modal: false,
      title: '',
      body: '',
      showDate: false,
      employee: {},
      isActive: null
    };
  },
  mounted: function () {

  },
  methods: {}
});
</script>

<style></style>