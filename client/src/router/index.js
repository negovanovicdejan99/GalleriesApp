import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import About from "../pages/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/galleries",
  },
  {
    path: "/galleries",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({ 
    mode: "history",
    routes
})

export default router;