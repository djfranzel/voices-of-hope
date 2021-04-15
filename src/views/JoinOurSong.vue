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
        <v-row>
          <v-col>
            <h2 class="mb-3">SING WITH VOICES OF HOPE</h2>
            <h3>Summer Jam</h3>
            <h3>Intern Application</h3>
            <h3>List former collaborators?</h3>
            <h3>Add CD tracks here?</h3>
            <br>
            <audio
                style="width: 100%"
                controls
                src="https://amandakateweber.files.wordpress.com/2018/09/inscription-of-hope-voh-1.mp3">
              Your browser does not support the
              <code>audio</code> element.
            </audio>
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
        <h2 class="mb-3">LEARN & ADVOCATE</h2>
        <iframe height="300px" width="533px" src="https://www.youtube.com/embed/2H4qyOG13fc" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen style="float: right"></iframe>
        <h3 class="mb-2">More Information:</h3>
        <ul>
          <li>
            <a href="https://www.bjs.gov/content/pub/pdf/WOPRIS.PDF" target="_blank">Bureau of Justice Statistics:
              Women in Prison</a>
          </li>
          <li>
            <a href="https://coms.doc.state.mn.us/tourreport/04FacilityInmateProfile.pdf" target="_blank">Demographics
              at MCF-Shakopee</a>
          </li>
          <li>
            <a href="http://www.sentencingproject.org/issues/women/" target="_blank">The Sentencing Project: Women
              in Prison</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=2H4qyOG13fc&t=3s" target="_blank">TEDx Talk: Voices of Hope
              from Within Prison Walls</a>
          </li>
        </ul>
        <br>
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
