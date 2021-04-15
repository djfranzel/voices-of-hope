<template>
  <div class="page-container">
    <h1 class="page-title text-center">Join Our Song</h1>
    <v-divider class="mb-3"></v-divider>
    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">SUPPORT VOICES OF HOPE</h2>
        <h3>Tell the Story</h3>
        <h3>Give</h3>
        <p>We are currently accepting donations through our page at GiveMN.</p>
        <v-btn class="accent" @click="NavigateToUrl('https://www.givemn.org/story/Voicesofhope')">
          Donate
          <v-icon right>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">SING WITH VOICES OF HOPE</h2>
        <h3>Summer Jam</h3>
        <h3>Intern Application</h3>
        <h3>List former collaborators?</h3>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">LEARN & ADVOCATE</h2>
        <h3>List partner organizations whose work we admire!</h3>
        <h3>Download suggested reading list here.</h3>
      </v-col>
    </v-row>
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
    NavigateToUrl: function (link) {
      window.open(link, '_blank')
    }
  }
});
</script>

<style></style>
