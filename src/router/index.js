import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login/'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard')
  },
  {
    path: '/receiving',
    name: 'receiving',
    component: () => import('../views/Receiving')
  },
  {
    path: '/brew',
    name: 'brew',
    component: () => import('../views/Brew')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
