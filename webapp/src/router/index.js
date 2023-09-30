import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mail from '../views/MailList.vue'
import Video from '../views/VideoView.vue'
import Shop from '../views/ShopView.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mail',
    name: 'mail',
    component: Mail
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
