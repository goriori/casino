import { createRouter, createWebHistory } from 'vue-router'

const AuthorizationView = () =>
  import('@/pages/authorization/Authorization.vue')
const AuthorizationTelegramView = () =>
  import('@/pages/authorization/telegram/AuthorizationTelegram.vue')
const MainView = () => import('@/pages/main/Main.vue')

const AccountView = () => import('@/pages/account/Account.vue')
const Registration = () => import('@/pages/registration/Registration.vue')

const GamesView = () => import('@/pages/games/Games.vue')

const BonusesView = () => import('@/pages/bonuses/Bonuses.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/authorization',
    //   name: 'authorization',
    //   component: AuthorizationView,
    // },
    {
      path: '/auth_tg',
      name: 'authorization_telegram',
      component: AuthorizationTelegramView,
    },
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
    // {
    //   path: '/registration',
    //   name: 'registration',
    //   component: Registration,
    // },
    {
      path: '/bonuses',
      name: 'bonuses',
      component: BonusesView,
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView,
    },
  ],
})
router.beforeEach((to, from, next) => {
  const hasToken = sessionStorage.getItem('token')
  // проверка на наличие токена
  if (!hasToken && to.name === 'account') {
    next({ name: 'main' })
  } else {
    next()
  }
})
export default router
