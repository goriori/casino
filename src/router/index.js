import { createRouter, createWebHistory } from 'vue-router'

const AuthorizationView = () =>
  import('@/pages/authorization/Authorization.vue')
const AuthorizationTelegramView = () =>
  import('@/pages/authorization/telegram/AuthorizationTelegram.vue')
const MainView = () => import('@/pages/main/Main.vue')

const AccountView = () => import('@/pages/account/Account.vue')
const Registration = () => import('@/pages/registration/Registration.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authorization',
      component: AuthorizationView,
    },
    {
      path: '/auth_tg',
      name: 'authorization_telegram',
      component: AuthorizationTelegramView,
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
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
  ],
})
router.beforeEach((to, from, next) => {
  const hasToken = sessionStorage.getItem('token')
  console.log(hasToken)
    // проверка на наличие токена
  if (
    !hasToken &&
    to.name !== 'authorization' &&
    to.name !== 'registration' &&
    to.name !== 'authorization_telegram'
  ) {
    next({ name: 'authorization' })
  } else if (
    (hasToken && to.name === 'authorization') ||
    (hasToken && to.name === 'authorization_telegram')
  ) {
    next({ name: 'main' })
  } else {
    next()
  }


})
export default router
