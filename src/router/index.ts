import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cancel from '../views/Cancel.vue';
import Finish from '../views/Finish.vue';
import NotFound from '../views/NotFound.vue'
import PageTwo from '../views/pageTwo.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/pageTwo',
    name: 'pageTwo',
    component: PageTwo
  },
  {
    path: '/finish',
    name: 'Finish',
    component: Finish
  }, {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel
  }
];

const router = new VueRouter({
  routes
});

export default router;
