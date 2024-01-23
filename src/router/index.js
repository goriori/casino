import { createRouter, createWebHistory } from 'vue-router'

const AuthorizationView = () =>
  import('@/pages/authorization/Authorization.vue')
const MainView = () => import('@/pages/main/Main.vue')

const AccountView = () => import('@/pages/account/Account.vue')
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
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
  ],
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
