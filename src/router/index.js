import { createRouter, createWebHistory } from 'vue-router'

const AuthorizationView = () => import('@/pages/Authorization.vue')
const MainView = () => import('@/pages/Main.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authorization',
      component: AuthorizationView,
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
  ],
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
