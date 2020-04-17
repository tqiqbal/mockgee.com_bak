import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/documenation',
    name: 'Documenation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Documenation.vue')
  },
  {
    path: '/done',
    name: 'Done',
    component: () => import(/* webpackChunkName: "about" */ '../views/Done.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
