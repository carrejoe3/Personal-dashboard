import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Photos from '../views/Photos.vue'
import NewsArticle from '../views/NewsArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/news',
    name: 'News',
    component: NewsArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
