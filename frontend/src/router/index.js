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
    component: () => import('../views/About.vue')
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
  },
  {
    path: '/profile/:userId(\\d+)',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    children: [
      {
        path: '/user-update/:userId(\\d+)',
        name: 'User'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
