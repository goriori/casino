<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { axiosInstance } from '@/utils/axios/axios.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import TelegramIcon from '@/components/ui/icons/socials/TelegramIcon.vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'

const router = useRouter()
const sessionStore = useSessionStore()
const paymentStore = usePaymentStore()
const userId = ref('')
const tgSession = ref(null)
const err = ref(null)
const generatePassword = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*'
  let password = ''
  const { floor, random } = Math
  for (let i = 0; i < 6; i++) {
    const randomIndex = floor(random() * characters.length)
    password += characters.charAt(randomIndex)
  }
  return password
}

const sendTelegramMessage = async (password, username) => {
  await axiosInstance({
    url: '/sendPassword',
    method: 'POST',
    data: {
      password,
      tg_id: username,
    },
  })
}

const onRegistrationNewUser = async (userId, newPassword) => {
  await sessionStore.registration({
    username: userId,
    password: newPassword,
    password_confirmation: newPassword,
    shop_id: 1,
  })
}
const onAuthorizationUser = async (userId) => {
  await sessionStore.authorization({
    username: userId,
    password: '',
    tg: 1,
  })
  await sessionStore.getInfoSession()
  await paymentStore.getRequisiteCards()
  await router.push('/')
}
const onErrorAuthorization = async (e, userId) => {
  err.value = e
  const { response } = e.error
  const { status, data } = response
  const isErrReg = data.username[0] === 'The username field is required.'
  const isHasUser =
    status === 422 &&
    'username' in data &&
    data.username[0] === 'The username has already been taken.'
  if (isHasUser) return await onAuthorizationUser(userId)
  else if (isErrReg) {
    console.log('Ошибка при регистрации. Не правильное тело запроса.')
    return false
  }
}
const authorization = async () => {
  const tg = window.Telegram?.WebApp
  const userId = tg.initDataUnsafe.user?.id
  const newPassword = generatePassword()
  onRegistrationNewUser(userId, newPassword)
    .then(() => sendTelegramMessage(newPassword, userId))
    .then(() => onAuthorizationUser(userId))
    .catch((e) => onErrorAuthorization(e, userId))
}

onMounted(async () => {
  const tg = window.Telegram?.WebApp
  tgSession.value = tg
  userId.value = tg.initDataUnsafe.user?.id
  await authorization()
})
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <div class="page-modules-loading">
        <div class="page-logo">
          <TelegramIcon />
        </div>
        <p>Авторизация через телеграм</p>
        <p>Пожалуйста подождите...</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import 'AuthorizationTelegram';
</style>
