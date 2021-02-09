import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import Router from 'vue-router';
import Home from "./views/Home";
import MissionAndHopes from "./views/MissionAndHopes";
import History from "./views/History";
import Choirs from "./views/Choirs";
import BoardsAndStaff from "./views/BoardsAndStaff";
import BenefitsOfChoralSinging from "./views/BenefitsOfChoralSinging";
import ChoralSingingAndIncarceration from "./views/ChoralSingingAndIncarceration";
import Testimonials from "./views/Testimonials";
import SupportVoicesOfHope from "./views/SupportVoicesOfHope";
import SingWithVoicesOfHope from "./views/SingWithVoicesOfHope";
import LearnAndAdvocate from "./views/LearnAndAdvocate";
import Contact from "./views/Contact";

Vue.use(Vuetify);
Vue.use(Router);

const vuetify = new Vuetify({icons: {iconfont: 'mdi'}})

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/mission-and-hopes',
            name: 'MissionAndHopes',
            component: MissionAndHopes
        },
        {
            path: '/history',
            name: 'History',
            component: History
        },
        {
            path: '/choirs',
            name: 'Choirs',
            component: Choirs
        },
        {
            path: '/boards-and-staff',
            name: 'BoardsAndStaff',
            component: BoardsAndStaff
        },
        {
            path: '/benefits-of-choral-singing',
            name: 'BenefitsOfChoralSinging',
            component: BenefitsOfChoralSinging
        },
        {
            path: '/choral-singing-and-incarceration',
            name: 'ChoralSingingAndIncarceration',
            component: ChoralSingingAndIncarceration
        },
        {
            path: '/testimonials',
            name: 'Testimonials',
            component: Testimonials
        },
        {
            path: '/support-voices-of-hope',
            name: 'SupportVoicesOfHope',
            component: SupportVoicesOfHope
        },
        {
            path: '/sing-with-voices-of-hope',
            name: 'SingWithVoicesOfHope',
            component: SingWithVoicesOfHope
        },
        {
            path: '/learn-and-advocate',
            name: 'LearnAndAdvocate',
            component: LearnAndAdvocate
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/*',
            name: 'home',
            component: Home
        }
    ]
});

Vue.config.productionTip = true;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
