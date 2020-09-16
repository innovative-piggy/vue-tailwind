import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/js/vue-instant-page.min.js';
Vue.use(vueInstantPageMin);

import '@/assets/css/app.css';
import '@/assets/css/tailwind.css';
import '@/assets/css/icomoon.css';
import vueInstantPageMin from './assets/js/vue-instant-page.min.js';

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
