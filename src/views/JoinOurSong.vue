<template>
  <div v-if="vohContent && vohContent.general" class="page-container">
    <h1 class="page-title text-center">{{ vohContent.joinOurSong.pageTitle }}</h1>
    <v-divider class="mb-3"></v-divider>
    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">{{ vohContent.joinOurSong.supportBlockTitle }}</h2>
        <span v-html="vohContent.joinOurSong.supportBlockContent"></span>
        <v-btn class="accent" @click="NavigateToUrl('https://www.givemn.org/story/Voicesofhope')">
          Donate
          <v-icon right>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-7">
      <v-col>
        <v-row>
          <v-col>
            <h2 class="mb-3">{{ vohContent.joinOurSong.singBlockTitle }}</h2>
            <span v-html="vohContent.joinOurSong.singBlockContent"></span>
          </v-col>
          <v-col>
            <v-img src="../static/join_voices_of_hope.jpg" alt="Join Voices of Hope" max-height="500px" contain></v-img>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">{{ vohContent.joinOurSong.learnAdvocateTitle }}</h2>
        <iframe height="300px" width="533px" src="https://www.youtube.com/embed/2H4qyOG13fc" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen style="float: right; max-width: 100%"></iframe>
        <span v-html="vohContent.joinOurSong.learnAdvocateContent"></span>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'WhyWeSing',
  data: () => ({
    vohContent: JSON.parse(sessionStorage.getItem('vohContent'))

  }),
  created: function () {

  },
  methods: {
    NavigateToUrl: function (link) {
      window.open(link, '_blank')
    }
  }
});
</script>

<style></style>
