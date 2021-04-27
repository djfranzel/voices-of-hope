import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import Router from 'vue-router';
import Home from "./views/Home";
import WhoWeAre from "@/views/WhoWeAre";
import WhyWeSing from "./views/WhyWeSing";
import JoinOurSong from "./views/JoinOurSong";
import Contact from "./views/Contact";
import Admin from "./views/Admin";
import NotFound from "./views/NotFound";

Vue.use(Vuetify);
Vue.use(Router);

const vuetify = new Vuetify(
    {
        icons: {
            iconfont: 'mdi'
        },
        theme: {
            themes: {
                light: {
                    primary: '#2196f3',
                    secondary: '#009688',
                    accent: '#f44336',
                    error: '#ff5722',
                    warning: '#ffeb3b',
                    info: '#607d8b',
                    success: '#4caf50'
                },
            },
        }
    }
)

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
        {
            path: '/join-our-song',
            name: 'JoinOurSong',
            component: JoinOurSong
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
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
