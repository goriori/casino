import {
  pswrdHidden,
  formAuth,
  authFields,
  authMessages
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useSettingsStore } from '@/store/settings/settingStore.js'

const settingStore = useSettingsStore()
const sessionStore = useSessionStore()

export const onChangeHiddenPassword = () =>
  (pswrdHidden.value = !pswrdHidden.value)

const clearForm = () => {
  formAuth.value = {
    username: '',
    password: '',
  }
}
export const onAuthorization = async (router) => {
  try {
    await onValidForm()
    await sessionStore.authorization(formAuth.value)
    clearForm()
    router.push('/')
  } catch (e) {
    onErrorMessage()
    console.log('valid result:', e)
    clearForm()
    router.push('/authorization')
  }
}

const onValidForm = async () => {
  if (formAuth.value.username.trim().length === 0) throw false
}

const onErrorMessage = () => {
  console.log('err')
  authMessages.value.error = true
  setTimeout(() => {
    authMessages.value.error = false
  }, 3000)
}
const onSuccessMessage = () => {
  authMessages.value.success = true
  setTimeout(() => {
    authMessages.value.success = false
  }, 3000)
}

export const onRecoveryPassword = () => {
  const telegramLink = `https://t.me/${settingStore.settings.tg_id}`
  const a = document.createElement('a')
  a.href = telegramLink
  a.target = '_blank'
  a.click()
}
export const onAuthTelegram = () => {
  const a = document.createElement('a')
  a.href = `https://t.me/momytest_bot`
  a.target = '_blank'
  a.click()
}
