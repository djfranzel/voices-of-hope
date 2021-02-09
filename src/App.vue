<template>
  <v-app style="height: 100vh">
    <v-app-bar app
               shrink-on-scroll
               scroll-target="#scrolling-techniques">

      <v-spacer></v-spacer>

      <v-img src="./assets/voh-logo.png"
             max-height="95"
             max-width="95"
             class="ma-3"
             alt="Voices of Hope Logo"/>

      <div>
        <v-btn class="ma-2" depressed @click="Navigate('Home')">
          Home
        </v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" class="ma-2" depressed>
              Who Are We
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="Navigate('MissionAndHopes')">
              <v-list-item-title>Mission & Hopes</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('History')">
              <v-list-item-title>History</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('Choirs')">
              <v-list-item-title>Choirs</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('BoardsAndStaff')">
              <v-list-item-title>Boards & Staff</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" class="ma-2" depressed>
              Why We Sing
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="Navigate('BenefitsOfChoralSinging')">
              <v-list-item-title>Benefits of Choral Singing</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('ChoralSingingAndIncarceration')">
              <v-list-item-title>Choral Singing and Incarceration</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('Testimonials')">
              <v-list-item-title>Testimonials</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" class="ma-2" depressed>
              Join Our Song
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="Navigate('SupportVoicesOfHope')">
              <v-list-item-title>Support Voices of Hope</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('SingWithVoicesOfHope')">
              <v-list-item-title>Sing With Voices of Hope</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('LearnAndAdvocate')">
              <v-list-item-title>Learn & Advocate</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Navigate('Contact')">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-sheet id="scrolling-techniques"
             class="overflow-y-auto">
      <v-main>
        <v-container>
          <router-view/>
        </v-container>
        <v-footer class="footer">
          <v-spacer></v-spacer>
          <p>Voices of Hope - &copy;{{ new Date().getFullYear() }}</p>
          <v-spacer></v-spacer>
        </v-footer>
      </v-main>
    </v-sheet>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({}),
  created: function () {

  },
  methods: {
    Navigate: function (page) {
      this.$router.push({name: page})
    }
  }
};
</script>

<style>

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.footer {
  border-top: 1px solid black;
}
</style>
