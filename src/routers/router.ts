import DashboardView from '@/pages/dashboard/DashboardView.vue'
import LoginView from '@/pages/login/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: DashboardView },
  { path: '/login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router