<template>
  <div v-if="vohContent.general" class="page-container">
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
    articles: [
      {
        logo: '/star_tribune_logo.png',
        mainImage: 'https://stmedia.stimg.co/ows_153273106235028.jpg?auto=compress&crop=faces&dpr=1&w=525',
        title: 'With Voices of Hope, one choir director makes music behind bars',
        date: 'JULY 27, 2018 — 5:49PM',
        text: '‘So grateful’: For the past three years, Amanda Weber has volunteered her time to run a choir at the women’s prison at Shakopee. She said, “They’re so grateful that you’re giving your time.”',
        link: 'https://www.startribune.com/with-voices-of-hope-one-choir-director-makes-music-behind-bars/489381791/'
      },
      {
        logo: '/newmusicmn_logo.png',
        mainImage: 'https://newmusicmn.org/wp-content/uploads/2017/01/Lumina-e1483481645892.jpg',
        title: 'Listen: Voices of Hope Concert',
        date: 'November 10, 2018 - 7pm',
        text: 'This event is the culmination of a partnership between Lumina and the Voices of Hope women’s prison choir in Shakopee. Featuring new music written by Linda Kachelmeier and guest speaker, Dr. Amanda Weber. Free and free parking in the ramp.',
        link: 'https://www.facebook.com/events/247016732648650/'
      },
      {
        logo: '/starofthenorth_logo.jpg',
        mainImage: 'https://starofthenorth.net/wp-content/uploads/2017/02/front-of-group.jpg',
        title: 'Voices of Hope',
        date: 'February 9, 2017',
        text: 'The first time I ever truly contemplated direct service was shortly after I graduated from Luther College (‘08), during my year as a volunteer with the Lutheran Volunteer Corps.  I was placed with an organization that facilitated service-learning programming in Washington, D.C., working to educate visitors about urban homelessness and poverty...',
        link: 'https://starofthenorth.net/magazine/voices-of-hope/'
      },
      {
        logo: '/umn_logo.png',
        mainImage: 'https://robinainstitute.umn.edu/sites/robinainstitute.umn.edu/files/styles/robina_standard_events_hero/public/hand_on_bar.jpg?itok=BT7Rfh26',
        title: 'Women in Prison in Minnesota: Voices of Hope from Within Prison Walls',
        date: 'Friday, June 9, 2017',
        text: 'Thank you to all who were able to join us in-person and online for our latest Robina In Conversation, "Women in Prison in Minnesota: Voices of Hope from Within Prison Walls," on Friday, June 9, 2017.',
        link: 'https://robinainstitute.umn.edu/events/women-prison-minnesota-voices-hope-within-prison-walls'
      }
    ]
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
