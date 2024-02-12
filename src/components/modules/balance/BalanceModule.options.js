import { ref } from 'vue'

import { useSettingsStore } from '@/store/settings/settingStore.js'
import { useStateStore } from '@/store/stateStore.js'

const stateStore = useStateStore()
const settingStore = useSettingsStore()
export const btnActive = ref(false)

export const popupReplenishment = ref(false)
export const popupSetting = ref({
  targetScreen: 'replenishment',
})

const telegramLink = `https://t.me/`
export const navigationNotAuthorized = [
  {
    id: 1,
    icon: 'support',
    title: 'Тех. поддержка',
    handler: function (router) {
      const a = document.createElement('a')
      a.href = telegramLink + settingStore.settings.tg_id
      a.target = '_blank'
      a.click()
    },
  },
  {
    id: 2,
    icon: 'logout',
    title: 'Войти',
    handler: async function (router) {
      popupReplenishment.value = false
      btnActive.value = false
      stateStore.globalModules.authorization.visibility = true
    },
  },
]

export const navigationAuthorized = [
  {
    id: 1,
    icon: 'account',
    title: 'Личный кабинет',
    handler: function (router) {
      router.push('/account')
      popupReplenishment.value = false
      btnActive.value = false
    },
  },
  {
    id: 2,
    icon: 'score',
    title: 'Пополнение счета',
    handler: function () {
      popupSetting.value.targetScreen = 'replenishment'
      popupReplenishment.value = !popupReplenishment.value
    },
  },
  {
    id: 3,
    icon: 'conclusion',
    title: 'Вывод средств',
    handler: function () {
      popupSetting.value.targetScreen = 'conclusion'
      popupReplenishment.value = !popupReplenishment.value
    },
  },
  {
    id: 4,
    icon: 'support',
    title: 'Тех. поддержка',
    handler: function (router) {
      const a = document.createElement('a')
      a.href = telegramLink + settingStore.settings.tg_id
      a.target = '_blank'
      a.click()
    },
  },
  {
    id: 4,
    icon: 'logout',
    title: 'Выйти',
    handler: async function (router) {
      await sessionStorage.clear()
      popupReplenishment.value = false
      btnActive.value = false
      location.reload()
    },
  },
]
