<template>
  <div v-if="vohContent && vohContent.general" class="page-container">
    <h1 class="page-title text-center">{{ vohContent.whyWeSing.pageTitle }}</h1>
    <v-divider class="mb-3"></v-divider>

    <v-row class="ma-7">
      <v-col class="text-center">
        <h3 class="mb-3">
          <span v-html="vohContent.whyWeSing.testimonialBlockQuote"></span>
        </h3>
        <p><i><span v-html="vohContent.whyWeSing.testimonialBlockAuthor"></span></i></p>
        <v-img class="elevation-5 ml-auto mr-auto mt-10" max-width="700px" src="../static/cantus_collab_2.jpg"></v-img>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">{{ vohContent.whyWeSing.benefitsTitle }}</h2>
        <span v-html="vohContent.whyWeSing.benefitsContent"></span>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">{{ vohContent.whyWeSing.incarcerationTitle }}</h2>
        <v-img src="../static/cantus_24.jpg" style="float: right" max-width="100%" width="450px"
               class="ml-7 mb-7 elevation-5"></v-img>
        <span v-html="vohContent.whyWeSing.incarcerationContent"></span>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="ma-7">
      <v-col>
        <h2 class="mb-3">{{ vohContent.whyWeSing.testimonialsTitle }}</h2>
        <v-img src="../static/cantus_48.jpg" style="float: right" max-width="100%" width="450px"
               class="ml-7 mb-7 elevation-5"></v-img>
        <span v-html="vohContent.whyWeSing.testimonialsContentOne"></span>
        <v-img src="../static/cantus_40.jpg" style="float: left" max-width="100%" width="450px"
               class="mr-7 mb-7 elevation-5"></v-img>
        <span v-html="vohContent.whyWeSing.testimonialsContentTwo"></span>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'WhyWeSing',
  data: () => ({
    vohContent: JSON.parse(sessionStorage.getItem('vohContent')),
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
