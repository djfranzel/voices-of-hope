<template>
  <div class="page-container">
    <h1 class="page-title text-center">Who We Are</h1>
    <v-divider class="mb-3"></v-divider>

    <v-row>
      <v-col cols="6">
        <h2>Mission</h2>
        <p>To provide accessible music-making opportunities within justice-involved populations that foster individual
          growth and bridge unlikely communities through song.</p>
        <h2>Hopes</h2>
        <p>We recognize that Voices of Hope has a dual calling to serve communities both inside and outside of Minnesota’s
          state prisons:</p>
        <ol>
          <li>BRINGING HOPE INSIDE PRISON WALLS Voices of Hope provides a safe and sober activity which empowers
            incarcerated individuals to find their voice, build connections in a diverse setting, and bring a positive
            message of hope and healing to the wider correctional facility.
          </li>
          <li>BRINGING HOPE OUTSIDE PRISON WALLS Voices of Hope views singing as a powerful tool of restorative justice,
            seeking to transform perspectives of incarceration and build bridges of healing within the wider community
            through collaboration and reflection.
          </li>
        </ol>
      </v-col>
      <v-col cols="6">
        <v-img class="elevation-5" src="../static/cantus_collab_1.jpg"/>
      </v-col>
    </v-row>
    <v-divider class="mt-3 mb-3"></v-divider>
    <v-row>
      <v-col cols="6">
        <v-img class="elevation-5" src="../static/cantus_collab_2.jpg"/>
      </v-col>
      <v-col cols="6">
        <h2>History</h2>
        <p>Voices of Hope is an organization that builds choral singing communities in correctional facilities in the state
          of Minnesota. The flagship ensemble, Voices of Hope-Shakopee, was founded in 2015 by Dr. Amanda Weber and has
          grown from 15 to 50 incarcerated singers. The organization has recently expanded to include Voices of
          Hope-Stillwater. Both choirs rehearse weekly and perform several times a year inside their respective
          facilities.</p>
        <p>Here is a recording of the <b>Voices of Hope</b> singing <i>"Inscription of Hope"</i> by <i>Z. Randall
          Stroope</i>, recorded as a part of our 2017 Summer Jam.</p>
        <audio
            style="width: 100%"
            controls
            src="https://amandakateweber.files.wordpress.com/2018/09/inscription-of-hope-voh-1.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </v-col>
    </v-row>

    <v-divider class="mt-3 mb-3"></v-divider>
    <v-row>
      <v-col>
        <h2>Choirs</h2>
        <p>(choirs info...)</p>
      </v-col>
    </v-row>

    <v-divider class="mt-3 mb-3"></v-divider>
    <v-row>
      <v-col>
        <h2>Board & Staff</h2>
        <v-row>
          <v-col cols="4">
            <v-card elevation="3">
              <v-img src="../static/amanda_headshot.jpg"></v-img>
              <v-card-title>Amanda Weber</v-card-title>
              <v-card-subtitle>(short bio...)</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card elevation="3">
              <v-img src="../static/amanda_headshot.jpg"></v-img>
              <v-card-title>Brittany Kallman Arneson</v-card-title>
              <v-card-subtitle>(short bio...)</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card elevation="3">
              <v-img src="../static/amanda_headshot.jpg"></v-img>
              <v-card-title>Marylynn Mennicke</v-card-title>
              <v-card-subtitle>(short bio...)</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'WhoWeAre',
  data: () => ({}),
  created: function () {

  },
  methods: {}
});
</script>

<style></style>
