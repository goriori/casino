<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { axiosInstance } from '@/utils/axios/axios.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'

const router = useRouter()
const sessionStore = useSessionStore()
const userId = ref('')
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
  await router.push('/')
}
const onErrorAuthorization = async (e, userId) => {
  const { response } = e
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 256 256"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                fill="#40B3E0"
              ></path>
              <path
                d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                fill="#FFFFFF"
              ></path>
              <path
                d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                fill="#D2E5F1"
              ></path>
              <path
                d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                fill="#B5CFE4"
              ></path>
            </g>
          </svg>
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
