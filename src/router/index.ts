import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NextPage from '../views/NextPage.vue';
import BackPage from '../views/BackPage.vue';
import Cancel from '../views/Cancel.vue';
import Finish from '../views/Finish.vue';
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nextPage',
    name: 'nextPage',
    component: NextPage
  },
  {
    path: '/backPage',
    name: 'backPage',
    component: BackPage
  }, {
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
