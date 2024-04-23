import { ref } from 'vue'

import { useSettingsStore } from '@/store/settings/settingStore.js'
import { useStateStore } from '@/store/stateStore.js'
import { ERRORS } from '@/configs/errors.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

const stateStore = useStateStore()
const settingStore = useSettingsStore()
const sessionStore = useSessionStore()
export const btnActive = ref(false)

export const popupReplenishment = ref(false)
export const popupSetting = ref({
  targetScreen: 'replenishment',
})

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
      if (!sessionStore.session.profile.is_verified) {
        return stateStore.globalPopupMessages.error.show(
          ERRORS.ERROR_VERIFICATION.MESSAGE
        )
      }
      stateStore.globalPopupsModules.conclusion.visibility = true
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
