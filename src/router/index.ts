import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Comunity from '@/views/Comunity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/comunity',
      name: 'comunity',
      component: Comunity
    }
  ]
})

export default router
