<template>
  <div class="page-container">

    <v-row>
      <v-col>
        <v-img src="../static/voh_banner.png" alt="Voices of Hope Banner" max-height="300px" contain></v-img>
        <h2 class="text-center ma-5">
          Providing accessible music-making opportunities
          <br>within justice-involved populations
        </h2>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-img src="../static/front_of_group3.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="8">
        <p><b>Voices of Hope</b> is an organization that builds choral singing communities in correctional facilities in
          the
          state of Minnesota. The flagship ensemble, Voices of Hope-Shakopee, was founded in 2015 by Dr. Amanda Weber
          and has grown from 15 to 50 incarcerated singers. The organization has recently expanded to include Voices of
          Hope-Stillwater and Voices of Hope Re-entry Choir.</p>
        <v-btn @click="Navigate('WhoWeAre')" class="primary">
          Learn More
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col class="text-center">
        <h3 class="mb-3">
          "Our individual suffering paints every square of these walls but the power of our melodic voices singing
          together helps to strip the sadness and self-hate bare, leaving only… Hope. We are given many tools at
          Shakopee but none have healed me like <span class="blue--text">music</span>."
        </h3>
        <p><i>- Voices of Hope singer -</i></p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col class="text-center">
        <v-img src="../static/voh_stats.jpg"></v-img>
        <v-btn class="accent mt-7" @click="NavigateToUrl('https://www.givemn.org/story/Voicesofhope')">
          Support
          <v-icon right>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7 mb-14">
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-img src="../static/cea_text.png"></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="8">
        <p>As a core part of our mission, <b>Voices of Hope</b> seeks to build bridges outside of prisons, using the
          power of song to transform individuals and communities. Learn more about opportunities to make music alongside
          <b>Voices of Hope</b>.</p>
        <v-btn @click="Navigate('WhoWeAre')" class="primary">
          Collaborate
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

<!--    <h1 class="page-title text-center">Home</h1>-->

<!--    <v-row>-->
<!--      &lt;!&ndash;Main content&ndash;&gt;-->
<!--      <v-col lg="9" md="9" sm="12" cols="12" class="pa-5">-->
<!--        <v-row>-->
<!--          <v-col lg="6" md="6" sm="12" cols="12">-->
<!--            <h2 class="mb-2">Voices of Hope</h2>-->
<!--            <p>The <b>Voices of Hope</b> is a women’s prison choir at the Minnesota Correctional Facility in Shakopee,-->
<!--              MN.-->
<!--              The-->
<!--              choir was founded in October 2015 by Amanda Weber and rehearses weekly at the prison.</p>-->

<!--          </v-col>-->
<!--          <v-col lg="6" md="6" sm="12" cols="12">-->
<!--            <v-img class="elevation-5" src="../static/amanda_headshot.jpg"></v-img>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--        <v-divider class="mt-7 mb-7"></v-divider>-->
<!--        <v-row>-->
<!--          <v-col lg="12" md="12" sm="12" cols="12">-->
<!--            <h2>Testimonials</h2>-->
<!--            <blockquote class="blockquote">-->
<!--              "<b>Voices of Hope</b> helped to keep my spirit alive while incarcerated. Thank you!"-->
<!--            </blockquote>-->
<!--            <blockquote class="blockquote">-->
<!--              "It was such a great opportunity to learn to sing while I was incarcerated"-->
<!--            </blockquote>-->
<!--            <blockquote class="blockquote">-->
<!--              "<b>Voices of Hope</b> is a fantastic organization doing amazing work in our prison systems."-->
<!--            </blockquote>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-col>-->
<!--      &lt;!&ndash;Right rail&ndash;&gt;-->
<!--      <v-col lg="3" md="3" sm="12" cols="12" style="border-left: 1px solid #cccccc" class="pa-5">-->
<!--        <v-row>-->
<!--          <v-col lg="12" md="12" sm="12" cols="12">-->
<!--            <h3 class="mb-2">Sing with Voices of Hope:</h3>-->
<!--            <p>We are always looking for new members.</p>-->
<!--            <v-btn block @click="Navigate('SingWithVoicesOfHope')" class="primary">-->
<!--              Join-->
<!--              <v-icon right>mdi-arrow-right</v-icon>-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--        <v-divider class="mt-3 mb-3"></v-divider>-->
<!--        <v-row>-->
<!--          <v-col lg="12" md="12" sm="12" cols="12">-->
<!--            <h3 class="mb-2">More Information:</h3>-->
<!--            <ul>-->
<!--              <li>-->
<!--                <a href="https://www.bjs.gov/content/pub/pdf/WOPRIS.PDF" target="_blank">Bureau of Justice Statistics:-->
<!--                  Women in Prison</a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="https://coms.doc.state.mn.us/tourreport/04FacilityInmateProfile.pdf" target="_blank">Demographics-->
<!--                  at MCF-Shakopee</a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="https://www.youtube.com/watch?v=2H4qyOG13fc&t=3s" target="_blank">TEDx Talk: Voices of Hope-->
<!--                  from Within Prison Walls</a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="http://www.sentencingproject.org/issues/women/" target="_blank">The Sentencing Project: Women-->
<!--                  in Prison</a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--        <v-divider class="mt-3 mb-3"></v-divider>-->
<!--        <v-row>-->
<!--          <v-col lg="12" md="12" sm="12" cols="12">-->
<!--            <h3 class="mb-2">Support Voices of Hope:</h3>-->
<!--            <p><b>Voices of Hope</b> a Minnesota-based nonprofit. If you would like to support the music program at-->
<!--              Shakopee, please consider making a donation through our GiveMN page.</p>-->
<!--            <v-btn block class="accent" @click="NavigateToUrl('https://www.givemn.org/story/Voicesofhope')">-->
<!--              Donate-->
<!--              <v-icon right>mdi-open-in-new</v-icon>-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-col>-->
<!--    </v-row>-->
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
