<template>
  <div class="page-container">
    <h1 class="page-title text-center">Home</h1>
    <v-divider></v-divider>

    <v-row>
      <!--Main content-->
      <v-col cols="9" class="pa-5">
        <v-row>
          <v-col cols="6">
            <h2 class="mb-2">Voices of Hope</h2>
            <p>The <b>Voices of Hope</b> is a women’s prison choir at the Minnesota Correctional Facility in Shakopee,
              MN.
              The
              choir was founded in October 2015 by Amanda Weber and rehearses weekly at the prison.</p>
            <v-btn @click="Navigate('WhoWeAre')">
              Learn More
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-img class="elevation-5" src="../assets/amanda_headshot.jpg"></v-img>
          </v-col>
        </v-row>
        <v-divider class="mt-7 mb-7"></v-divider>
        <v-row>
          <v-col>
            <h2>Testimonials</h2>
            <blockquote class="blockquote">
              "Voices of Hope helped to keep my spirit alive while incarcerated. Thank you!"
            </blockquote>
            <blockquote class="blockquote">
              "It was such a great opportunity to learn to sing while I was incarcerated"
            </blockquote>
            <blockquote class="blockquote">
              "Voices of Hope is a fantastic organization doing amazing work in our prison systems."
            </blockquote>
          </v-col>
        </v-row>
      </v-col>
      <!--Right rail-->
      <v-col cols="3" style="border-left: 1px solid #cccccc" class="pa-5">
          <v-row>
            <v-col>
              <h3 class="mb-2">Sing with Voices of Hope:</h3>
              <p>We are always looking for new members.</p>
              <v-btn block @click="Navigate('SingWithVoicesOfHope')">
                Join
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="mt-3 mb-3"></v-divider>
          <v-row>
            <v-col>
              <h3 class="mb-2">More Information:</h3>
              <ul>
                <li>
                  <a href="https://www.bjs.gov/content/pub/pdf/WOPRIS.PDF" target="_blank">Bureau of Justice Statistics: Women in Prison</a>
                </li>
                <li>
                  <a href="https://coms.doc.state.mn.us/tourreport/04FacilityInmateProfile.pdf" target="_blank">Demographics at MCF-Shakopee</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=2H4qyOG13fc&t=3s" target="_blank">TEDx Talk: Voices of Hope from Within Prison Walls</a>
                </li>
                <li>
                  <a href="http://www.sentencingproject.org/issues/women/" target="_blank">The Sentencing Project: Women in Prison</a>
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-divider class="mt-3 mb-3"></v-divider>
          <v-row>
            <v-col>
              <h3 class="mb-2">Support Voices of Hope:</h3>
              <p>Voices of Hope a Minnesota-based nonprofit. If you would like to support the music program at
                Shakopee, please consider making a donation through our GiveMN page.</p>
              <v-btn color="red" style="color: white" block
                     @click="NavigateToUrl('https://www.givemn.org/story/Voicesofhope')">
                Donate
                <v-icon right>mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
    <!--    <v-carousel cycle>-->
    <!--      <v-carousel-item src="../assets/cantus_collab_1.jpg"></v-carousel-item>-->
    <!--      <v-carousel-item src="../assets/cantus_collab_2.jpg"></v-carousel-item>-->
    <!--      <v-carousel-item src="../assets/amanda_headshot.jpg"></v-carousel-item>-->
    <!--    </v-carousel>-->
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data: () => ({}),
  created: function () {

  },
  methods: {
    Navigate: function (page) {
      this.$router.push({name: page})
    },
    NavigateToUrl: function (url) {
      window.open(url, '_blank')
    }
  }
});
</script>

<style></style>
