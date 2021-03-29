import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
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
    path: '/publish',
    name: 'Publish',
    component: () => import('../views/Publish.vue'),
    children: [
      {
        path: '/update/:article_id(\\d+)',
        name: 'Update'
      }
    ]
  },
  {
    path: '/article/:article_id(\\d+)',
    name: 'Article',
    component: () => import('../views/Article.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
