<template>
  <v-app style="height: 100vh">
    <v-app-bar
        shrink-on-scroll
        prominent
        scroll-target="#scrolling-techniques">

      <v-toolbar-title>Voices of Hope</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet id="scrolling-techniques"
             class="overflow-y-auto"
             max-height="100vh">
      <v-main>
        <v-container>
          <router-view/>
        </v-container>
        <v-footer>
          <p>Voices of Hope - &copy;{{ new Date().getFullYear() }}</p>
        </v-footer>
      </v-main>
    </v-sheet>

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

<style>
body {
  overflow: hidden; /* Hide scrollbars */
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
