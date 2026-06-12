import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Suspeitos from '../views/Suspeitos.vue'
import Evidencias from '../views/Evidencias.vue'
import Contato from '../views/Contato.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/suspeitos',
    component: Suspeitos
  },
  {
    path: '/evidencias',
    component: Evidencias
  },
  {
    path: '/contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router