import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import Router from 'vue-router';
import Home from "./views/Home";
import WhoWeAre from "@/views/WhoWeAre";
import WhyWeSing from "./views/WhyWeSing";
import SupportVoicesOfHope from "./views/SupportVoicesOfHope";
import SingWithVoicesOfHope from "./views/SingWithVoicesOfHope";
import LearnAndAdvocate from "./views/LearnAndAdvocate";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import PhenomenalWomanProject from "./views/PhenomenalWomanProject";

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
            path: '/who-we-are',
            name: 'WhoWeAre',
            component: WhoWeAre
        },
        {
            path: '/why-we-sing',
            name: 'WhyWeSing',
            component: WhyWeSing
        },

        // for the last nav dropdown
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
            path: '/phenomenal-woman-project',
            name: 'PhenomenalWomanProject',
            component: PhenomenalWomanProject
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
            name: 'NotFound',
            component: NotFound
        }
    ]
});

Vue.config.productionTip = true;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
