import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import Router from 'vue-router';
import Home from "./views/Home";

Vue.use(Vuetify);
Vue.use(Router);

const vuetify = new Vuetify({icons: {iconfont: 'mdi'}})

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
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
