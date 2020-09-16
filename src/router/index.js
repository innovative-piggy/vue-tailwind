import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Signup.vue'),
    },
    {
        path: '/category/:firstId/:secondId',
        name: 'Category',
        component: () => import('../views/Category.vue'),
    },
    {
        path: '/product/:firstId/:secondId/:productId',
        name: 'Product',
        component: () => import('../views/Product.vue'),
    },
    {
        path: '/whatwedo',
        name: 'WhatWeDo',
        component: () => import('../views/WhatWeDo.vue'),
    },
    {
        path: '/career',
        name: 'Career',
        component: () => import('../views/Career.vue'),
    },
    {
        path: '/press',
        name: 'Press',
        component: () => import('../views/Press.vue'),
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('../views/Privacy.vue'),
    },
    {
        path: '/account/:tabId',
        name: 'Account',
        component: () => import('../views/Account.vue'),
    },
];

const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
      },
    routes,
    mode: 'history',
});

export default router;
