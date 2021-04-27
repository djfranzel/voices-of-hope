<template>
  <div class="page-container">
    <h1 class="page-title text-center">Admin</h1>
    <v-divider class="mb-7"></v-divider>

    <v-row v-if="!showEditSections">
      <v-col cols="0" sm="0" md="3" lg="3"></v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <v-form v-model="valid" ref="form">
          <v-list-item>
            <v-text-field
                v-on:keyup.enter="Login()"
                prepend-icon="mdi-account"
                v-model="credentials.username"
                :rules="required"
                label="Username"/>
          </v-list-item>
          <v-list-item>
            <v-text-field
                v-on:keyup.enter="Login()"
                prepend-icon="mdi-lock"
                v-model="credentials.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="required"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                @click:append="showPassword = !showPassword"/>
          </v-list-item>
          <v-card-subtitle class="text-center error--text" v-if="error.length">{{ error }}</v-card-subtitle>
          <v-card-actions class="mt-3">
            <v-btn class="ma-auto" @click="Login()" outlined tile :loading="loading" :disabled="loading">
              Login
              <v-icon class="ml-2">mdi-login-variant</v-icon>
            </v-btn>
          </v-card-actions>
          <v-spacer class="pb-1"></v-spacer>
        </v-form>
      </v-col>
      <v-col cols="0" sm="0" md="3" lg="3"></v-col>
    </v-row>
    <div v-else>
      <v-row>
        <v-col>
          <h1>General</h1>
          <v-text-field
              v-model="vohContentTemp.general.organizationName"
              label="Organization Name"/>
          <v-text-field
              v-model="vohContentTemp.general.email"
              label="Email"/>
          <v-text-field
              v-model="vohContentTemp.general.facebookLink"
              label="Facebook Link"/>
          <v-text-field
              v-model="vohContentTemp.general.donateLink"
              label="Donate Link"/>
          <h3>Address</h3>
          <v-text-field
              v-model="vohContentTemp.general.address.street"
              label="Street"/>
          <v-text-field
              v-model="vohContentTemp.general.address.city"
              label="City"/>
          <v-text-field
              v-model="vohContentTemp.general.address.state"
              label="State"/>
          <v-text-field
              v-model="vohContentTemp.general.address.zipCode"
              label="Zip Code"/>
          <h3>Footer</h3>
          <v-text-field
              v-model="vohContentTemp.general.footer.leftTitle"
              label="Left Title"/>
          <v-textarea
              v-model="vohContentTemp.general.footer.leftText"
              label="Left Text"/>
          <v-text-field
              v-model="vohContentTemp.general.footer.rightTitle"
              label="Right Title"/>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Home</h1>
          <v-textarea
              v-model="vohContentTemp.home.mainQuote"
              label="Main Quote"/>
          <v-textarea
              v-model="vohContentTemp.home.aboutBlockText"
              label="About Block Text"/>
          <v-textarea
              v-model="vohContentTemp.home.testimonialBlockQuote"
              label="Testimonial Block Quote"/>
          <v-text-field
              v-model="vohContentTemp.home.testimonialBlockAuthor"
              label="Testimonial Block Author"/>
          <v-textarea
              v-model="vohContentTemp.home.collaborateBlockText"
              label="Collaborate Block Text"/>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Who We Are</h1>
          <v-text-field
              v-model="vohContentTemp.whoWeAre.pageTitle"
              label="Page Title"/>
          <v-text-field
              v-model="vohContentTemp.whoWeAre.aboutTitle"
              label="About Title"/>
          <v-textarea
              v-model="vohContentTemp.whoWeAre.aboutText"
              label="About Text"/>
          <v-text-field
              v-model="vohContentTemp.whoWeAre.hopesBlockTitle"
              label="Hopes Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whoWeAre.hopesBlockContent"
              label="Hopes Block Content"/>
          <v-text-field
              v-model="vohContentTemp.whoWeAre.historyBlockTitle"
              label="History Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whoWeAre.historyBlockContent"
              label="History Block Content"/>
          <v-text-field
              v-model="vohContentTemp.whoWeAre.choirsBlockTitle"
              label="Choirs Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whoWeAre.choirsBlockContent"
              label="Choirs Block Content"/>
          <v-text-field
              v-model="vohContentTemp.whoWeAre.volunteerBlockTitle"
              label="Volunteer Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whoWeAre.volunteerBlockContent"
              label="Volunteer Block Content"/>
          <v-text-field
              v-model="vohContentTemp.whoWeAre.advisoryTitle"
              label="Advisory Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whoWeAre.advisoryContent"
              label="Advisory Block Content"/>
          <div v-for="person of vohContentTemp.whoWeAre.staff">
            <v-text-field
                v-model="person.name"
                label="Name"/>
            <v-text-field
                v-model="person.title"
                label="Title"/>
            <v-text-field
                v-model="person.bio"
                label="Short Bio"/>
            <v-text-field
                v-model="person.imageURL"
                label="Image URL"/>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Why We Sing</h1>
          <v-text-field
              v-model="vohContentTemp.whyWeSing.pageTitle"
              label="Page Title"/>
          <v-textarea
              v-model="vohContentTemp.whyWeSing.testimonialBlockQuote"
              label="Testimonial Block Quote"/>
          <v-text-field
              v-model="vohContentTemp.whyWeSing.testimonialBlockAuthor"
              label="Testimonial Block Author"/>
          <v-text-field
              v-model="vohContentTemp.whyWeSing.benefitsTitle"
              label="Benefits Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whyWeSing.benefitsContent"
              label="Benefits Block Content"/>
          <v-text-field
              v-model="vohContentTemp.whyWeSing.incarcerationTitle"
              label="Incarceration Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whyWeSing.incarcerationContent"
              label="Incarceration Block Content"/>
          <v-text-field
              v-model="vohContentTemp.whyWeSing.testimonialsTitle"
              label="Testimonials Block Title"/>
          <v-textarea
              v-model="vohContentTemp.whyWeSing.testimonialsContentOne"
              label="Testimonials Block Content One"/>
          <v-textarea
              v-model="vohContentTemp.whyWeSing.testimonialsContentTwo"
              label="Testimonials Block Content Two"/>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h1>Join Our Song</h1>
          <v-text-field
              v-model="vohContentTemp.joinOurSong.pageTitle"
              label="Page Title"/>
          <v-text-field
              v-model="vohContentTemp.joinOurSong.supportBlockTitle"
              label="Support Block Title"/>
          <v-textarea
              v-model="vohContentTemp.joinOurSong.supportBlockContent"
              label="Support Block Content"/>
          <v-text-field
              v-model="vohContentTemp.joinOurSong.singBlockTitle"
              label="Sing Block Title"/>
          <v-textarea
              v-model="vohContentTemp.joinOurSong.singBlockContent"
              label="Sing Block Content"/>
          <v-text-field
              v-model="vohContentTemp.joinOurSong.learnAdvocateTitle"
              label="Learn & Advocate Title"/>
          <v-textarea
              v-model="vohContentTemp.joinOurSong.learnAdvocateContent"
              label="Learn & Advocate Content"/>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-btn block
                 class="mb-7 mt-7"
                 color="success"
                 :disabled="loading || saving"
                 :loading="saving"
                 @click="PostVOHContent()">
            <v-icon left>mdi-save</v-icon>
            Save
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {EventBus} from '../event-bus';
import axios from "axios";

export default Vue.extend({
  name: 'Admin',
  data: () => ({
    showEditSections: false,
    loading: false,
    valid: false,
    credentials: {
      username: '',
      password: ''
    },
    required: [v => !!v || 'Required field'],
    showPassword: false,
    error: '',
    vohContentTemp: {
      general: {
        organizationName: 'Voices of Hope',
        email: 'wearevoicesofhope@gmail.com',
        facebookLink: 'https://www.facebook.com/wearevoicesofhope/',
        donateLink: 'https://www.givemn.org/story/Voicesofhope',
        address: {
          street: '1200 S Marquette Ave',
          city: 'Minneapolis',
          state: 'MN',
          zipCode: 55403
        },
        footer: {
          leftTitle: 'About Voice of Hope',
          leftText: 'Voices of Hope is a prison music organization providing accessible music-making opportunities within justice-involved populations that foster individual growth and bridge unlikely communities through song.',
          rightTitle: 'Contact Us'
        }
      },
      home: {
        mainQuote: 'Providing accessible music-making opportunities within justice-involved populations',
        aboutBlockText: 'Voices of Hope is an organization that builds choral singing communities in correctional facilities in the state of Minnesota. The flagship ensemble, Voices of Hope-Shakopee, was founded in 2015 by Dr. Amanda Weber and has grown from 15 to 50 incarcerated singers. The organization has recently expanded to include Voices of Hope-Stillwater and Voices of Hope Re-entry Choir.',
        testimonialBlockQuote: '"Our individual suffering paints every square of these walls but the power of our melodic voices singing together helps to strip the sadness and self-hate bare, leaving only… Hope. We are given many tools at Shakopee but none have healed me like music."',
        testimonialBlockAuthor: '- Voices of Hope singer -',
        collaborateBlockText: 'As a core part of our mission, Voices of Hope seeks to build bridges outside of prisons, using the power of song to transform individuals and communities. Learn more about opportunities to make music alongside Voices of Hope.'
      },
      whoWeAre: {
        pageTitle: 'Who We Are',
        aboutTitle: 'VOICES OF HOPE MISSION',
        aboutText: 'To provide accessible music-making opportunities within justice-involved populations that foster individual growth and bridge unlikely communities through song.',
        hopesBlockTitle: 'HOPES',
        hopesBlockContent: '<p>We recognize that Voices of Hope has a dual calling to serve communities both inside and outside of\nMinnesota’s state prisons:</p>\n<ol>\n<li>BRINGING HOPE INSIDE PRISON WALLS<br>\n<b>Voices of Hope</b> provides a safe and sober activity which empowers incarcerated individuals to find their\nvoice, build connections in a diverse setting, and bring a positive message of hope and healing to the wider\ncorrectional facility.\n</li>\n<li>BRINGING HOPE OUTSIDE PRISON WALLS<br>\n<b>Voices of Hope</b> views singing as a powerful tool of restorative justice, seeking to transform perspectives of\nincarceration and build bridges of healing within the wider community through collaboration and reflection.\n</li>\n </ol>',
        historyBlockTitle: 'HISTORY',
        historyBlockContent: '<p><b>Voices of Hope</b> began as the vision of Dr. Jim Verhoye, former Education Director at the Minnesota\n Correctional Facility in Shakopee, the only state women’s prison in Minnesota. The facility previously\noffered a group called “Choir” within Recreational programming. Dr. Verhoye suggested reframing it as a\nclass within Education and connected with Dr. Amanda Weber, a local conductor with a passion for using\nmusic as a tool for social justice.</p>\n<p>The choir launched in October 2015 with 17 singers, gathering weekly for one hour rehearsals in the small\nprison chapel. Two months later, the group named themselves “<b>Voices of Hope</b>.” In their first year, the\nchoir focused on identity formation and community-building, collaborating with students from the\nUniversity of Minnesota as well as Twin Cities choir Magnum Chorum. On June 18, 2016, <b>Voices of Hope</b>\nperformed their first full concert in the prison visiting room for an audience of incarcerated women. Over\nthe next four years, <b>Voices of Hope</b> grew to nearly 50 singers, lengthening their rehearsal time to 1.5\nhours each Sunday afternoon. They have continued small and large collaborations with groups such as the\nUniversity of Minnesota Women’s Chorus, Lumina Women’s Ensemble, Cantus Vocal Ensemble, 29:11 South\nAfrican Gospel Ensemble, and Wonderlust Productions. </p>\n<p>In May 2017, <b>Voices of Hope</b> became a Limited Liability Corporation, fiscally sponsored by Springboard for\nthe Arts. They are currently working towards becoming a 501c3 nonprofit organization. Their primary source\nof funding comes from individual donations; all money raised goes to support programming through staffing\nand supplies.</p>\n<p>In November 2019, <b>Voices of Hope</b> expanded to the Minnesota Correctional Facility in Stillwater, creating\na men’s prison choir under the direction of MaryLynn Mennicke. The group of 15 singers gathered three\ntimes before the COVID-19 pandemic necessitated a pause in programming. <b>Voices of Hope</b> continues to\nprovide distanced programming for singers at both the Shakopee and Stillwater facilities. In addition, a\nsmall group of former singers from <b>Voices of Hope</b>-Shakopee are working together to build a Re-entry Choir\nfor women. </p>',
        choirsBlockTitle: 'CHOIRS',
        choirsBlockContent: '<h3 class="font-italic mt-3">Voices of Hope-Shakopee</h3>\n<ul>\n <li>a women\'s prison choir</li>\n <li>directed by Dr. Amanda Weber</li>\n<li>began in Oct 2015</li>\n <li>approx. 45 singers</li>\n</ul>\n <h3 class="font-italic mt-3">Voices of Hope-Stillwater</h3>\n<ul>\n<li>a men’s prison choir</li>\n<li>directed by MaryLynn Mennicke</li>\n<li>began in Nov 2019</li>\n<li>approx. 15 singers</li>\n</ul>\n <h3 class="font-italic mt-3">Re-entry Choir</h3>\n<ul>\n<li>for formerly incarcerated, self-identifying women seeking a safe space for healing, empowerment, and\ncommunity-building\n</li>\n<li>directed by Dr. Amanda Weber</li>\n<li>a partnership with Westminster Presbyterian Church</li>\n</ul>',
        staff: [
          {
            name: 'Dr. Amanda Weber',
            title: 'Founder and Artistic Director',
            bio: '(short bio...)',
            imageURL: ''
          },
          {
            name: 'Brittany Kallman Arneson',
            title: 'Executive Director',
            bio: '(short bio...)',
            imageURL: ''
          },
          {
            name: 'MaryLynn Mennicke',
            title: 'Director, Voices of Hope-Stillwater',
            bio: '(short bio...)',
            imageURL: ''
          },
          {
            name: 'Zach Busch',
            title: 'Accompanist',
            bio: '(short bio...)',
            imageURL: ''
          },
          {
            name: 'Siri Caltvedt',
            title: 'Vocal Coach',
            bio: '(short bio...)',
            imageURL: ''
          },
        ],
        volunteerBlockTitle: 'VOLUNTEER TEAM',
        volunteerBlockContent: '<ul>\n<li>Laura Potratz</li>\n <li>Anusha Ramaswami</li>\n<li>Kayla Lyftogt</li>\n <li>Nancy Swanson</li>\n<li>Haruka Yukioka</li>\n </ul>',
        advisoryTitle: 'ADVISORY BOARD',
        advisoryContent: '<ul>\n<li>Tina Meckel</li>\n <li>Jim Verhoye</li>\n<li>MaryLynn Mennicke</li>\n <li>Noelle Faye</li>\n<li>Amanda Weber</li>\n <li>Brittany Kallman Arneson</li>\n </ul>',
      },
      whyWeSing: {
        pageTitle: 'Why We Sing',
        testimonialBlockQuote: '“When I walk into the choir room… I get to be a woman again. I feel again and have passion beyond measure.”',
        testimonialBlockAuthor: '- Voices of Hope singer -',
        benefitsTitle: 'BENEFITS OF CHORAL SINGING',
        benefitsContent: '<p>No matter who you are or what kind of singing you do, the benefits to your physical, and mental/emotional health are vast! Proven benefits of choral singing include:</p>\n <ul>\n <li>improved lung function</li>\n<li>increases heart rate variability</li>\n <li>aids the circulatory system</li>\n<li>releases oxytocin which has been found to increase trust, reduce negative behavior, and potentially\n increase social bonding\n</li>\n <li>increases levels of secretory immunoglobulin A, a hormone which protects the body from bacterial and viral\ninfection, boosting the immune system and leading to increased positivity and relaxation\n </li>\n<li>triggers endorphin release, resulting in both euphoric and sedative states</li>\n </ul>',
        incarcerationTitle: 'CHORAL SINGING AND INCARCERATION',
        incarcerationContent: '<p>Studies of prison choirs are limited due to the research protections of incarcerated people as a “vulnerable population.” Data-based research studies include:</p>\n <ul class="mb-3">\n <li>Cohen, Mary L. “Choral Singing and Prison Inmates: Influences of Singing in a Prison Choir.” Journal of\nCorrectional Education 60, no. 1 (2009): 52-65.\n </li>\n <li>Cohen, Mary L. "Explorations of Inmate and Volunteer Choral Experiences in a Prison-based Choir."\nAustralian Journal of Music Education, no. 1 (2007): 61-72.\n </li>\n <li>Cohen, Mary L. "Harmony within the Walls: Perceptions of Worthiness and Competence in a Community Prison\nChoir." International Journal of Music Education 30, no. 1 (2012): 46-56.\n </li>\n <li>Richmiller, M. G. Study of the Residual Effects of Music Education Experiences of a Prison Choir,\nTwenty-Nine Years After Participation. Unpublished Master’s thesis, Southeast Missouri State University,\nCape Girardeau, MO, 1992.\n </li>\n <li>Roma, Cathy. “Re-sounding: Refuge and Reprise in a Prison Choral Community.” International Journal of\nCommunity Music 3, no. 1 (2010): 91-101.\n </li>\n </ul>\n <p>These studies suggest that the social experience of singing in choir is what has been most impactful for\nsingers. Other research-based benefits include:</p>\n <ul class="mb-3">\n <li>improved life skills, such as goal-oriented behavior, self-discipline, and improved communication</li>\n <li>more positive self-esteem</li>\n <li>perceived benefits as joy, increased feelings of self-worth and self-confidence</li>\n <li>purpose, a sense of belonging, spiritual connection, and pride</li>\n <li>collaboration with “outside” community singers shows potential for positive transformative change for both\nparticipant groups\n </li>\n <li>the social experience of choir increased racial tolerance and understanding, opened people’s minds, and\nled to an increased desire to help others\n </li>\n </ul>\n <p>Voices of Hope contributed to this research through Dr. Amanda Weber’s 2018 dissertation. The survey and\ninterview data collected through Weber’s program evaluation showed the following:</p>\n <ul>\n <li>VOH singers described increased feelings of happiness, positivity, self-worth, accomplishment, and an\nimproved attitude\n </li>\n <li>Multiple singers believe their aggression has decreased; some singers feel they cry more often and have\nbecome more open with their feelings\n </li>\n <li>Many singers said they feel more open to trying new things and believe that choir has helped them to come\nout of their shell\n </li>\n <li>Several participants said they want to use their voices for good in the community</li>\n <li>The most commonly cited theme was connection; for many singers, choir has enabled a sense of bonding and\nincreased empathy in a diverse setting\n </li>\n </ul>',
        testimonialsTitle: 'TESTIMONIALS',
        testimonialsContentOne: '<h3 class="font-italic mb-1">Reflections from incarcerated singers</h3>\n <p>“I had forgotten how important music was to me, but Voices of Hope reminded me how much my spirit needs\nmusic, my soul needs to heal.”</p>\n <p>“I came into this experience and didn’t speak to anyone. I was of this mindset of I don’t see any potential\nfor anything good… Now I’m in this community and there’s something I’m looking forward to doing here. And it\ndoesn’t make me feel anxious or terrified or angry. The choir really allowed me to acknowledge that I could\nfeel happiness while I was incarcerated. And connectivity. I feel less prone to negative emotional\nupheaval.”</p>\n<p>"[Collaborating with outside singers] has forever impacted my life. To have people who know nothing about us\nbut who want to be a part of supporting us! It has given me the ability myself to look past my label as a\nfelon or prisoner."</p>\n<p class="mb-7">“[Through choir,] I was reunited with the girl I had lost somewhere along the broken road that\nbrought me here. The girl who sings in the shower, the one who lets music crawl into her heart sending shivers\nup and down her spine, the girl who allows music and voice to fill the vast emptiness inside of her with hope…\nWhat a blessing it is to be reunited to that forgotten part of myself.”</p>',
        testimonialsContentTwo: '<h3 class="font-italic mb-1">Reflections from outside collaborators</h3>\n<p>“My experiences singing with the Voices of Hope have had an immeasurable impact on my perspective of the\nworld and our nation’s system of incarceration…I got to know several of the women beyond their names and\ninterests and found their desire for redemption and a fresh start both heartbreaking and inspiring.”</p>\n <p>"I had many emotional conversations with people on the outside trying to describe my experience\n[collaborating with the Voices of Hope], and my empathetic response. How my heart broke for the women and how\ntheir paths had led them there, and how in some corner of myself I wished I could switch places with one of\nthem. I could feel their sadness and the joy in their singing… It is difficult to talk about the complexity of\n the experience. How pain and joy live in the same room in such an open way."</p>'
      },
      joinOurSong: {
        pageTitle: 'Join Our Song',
        supportBlockTitle: 'SUPPORT VOICES OF HOPE',
        supportBlockContent: '<h3>Tell the Story</h3>\n<h3>Give</h3>\n<p>We are currently accepting donations through our page at GiveMN.</p>',
        singBlockTitle: 'SING WITH VOICES OF HOPE',
        singBlockContent: '<h3>Summer Jam</h3>\n<h3>Intern Application</h3>\n <h3>List former collaborators?</h3>\n<h3>Add CD tracks here?</h3>\n<br>\n<audio\nstyle="width: 100%"\ncontrols\nsrc="https://amandakateweber.files.wordpress.com/2018/09/inscription-of-hope-voh-1.mp3">\nYour browser does not support the\n<code>audio</code> element.\n</audio>',
        learnAdvocateTitle: 'LEARN & ADVOCATE',
        learnAdvocateContent: '<h3 class="mb-2">More Information:</h3>\n<ul>\n<li>\n<a href="https://www.bjs.gov/content/pub/pdf/WOPRIS.PDF" target="_blank">Bureau of Justice Statistics:\n Women in Prison</a>\n</li>\n<li>\n<a href="https://coms.doc.state.mn.us/tourreport/04FacilityInmateProfile.pdf" target="_blank">Demographics\n at MCF-Shakopee</a>\n</li>\n<li>\n<a href="http://www.sentencingproject.org/issues/women/" target="_blank">The Sentencing Project: Women\n in Prison</a>\n</li>\n<li>\n<a href="https://www.youtube.com/watch?v=2H4qyOG13fc&t=3s" target="_blank">TEDx Talk: Voices of Hope\n from Within Prison Walls</a>\n</li>\n</ul>\n<br>\n<h3>List partner organizations whose work we admire!</h3>\n <h3>Download suggested reading list here.</h3>'
      }
    },
    vohContent: JSON.parse(sessionStorage.getItem('vohContent')),
    saving: false,
  }),
  mounted: function () {
    this.CheckSession();
  },
  methods: {
    CheckSession: function () {
      const that = this;
      axios.get('/check-session', {headers: {token: sessionStorage.getItem('token')}})
          .then(response => {
            if (response.data.authenticated) {
              that.showEditSections = true;
            } else {
              console.log('Invalid token')
            }
          })
          .catch(error => console.log('Invalid token'))
          .finally(() => that.loading = false);
    },
    Login: function () {
      if (!this.valid) return this.$refs.form.validate();
      const that = this;
      this.loading = true;
      axios.post('/authenticate', that.credentials)
          .then(response => {
            if (response.data.token) {
              sessionStorage.setItem('token', response.data.token);
              that.showEditSections = true;
              that.GetVOHContent();
            } else {
              that.InvalidCredentials()
            }
          })
          .catch(error => that.InvalidCredentials())
          .finally(() => that.loading = false);
    },
    GetVOHContent: function () {
      this.loading = true;
      const that = this;
      axios.get('/get-voh-content')
          .then(response => {
            that.vohContent = response.data;
            sessionStorage.setItem('vohContent', JSON.stringify(that.vohContent));
            that.vohContentTemp = JSON.parse(JSON.stringify(that.vohContent));
          })
          .catch(error => alert('Could not get content!'))
          .finally(() => that.loading = false);
    },
    PostVOHContent: function () {
      const that = this;
      this.vohContent = JSON.parse(JSON.stringify(this.vohContentTemp));
      axios.post('/post-voh-content', that.vohContent, {headers: {token: sessionStorage.getItem('token')}})
          .then(response => that.vohContent = response.data)
          .catch(error => alert('Error saving content!'))
          .finally(() => that.saving = false);
    },
    InvalidCredentials: function () {
      this.credentials.password = '';
      this.$refs.form.validate();
      alert('Incorrect password!');
    }
  }
});
</script>

<style></style>
