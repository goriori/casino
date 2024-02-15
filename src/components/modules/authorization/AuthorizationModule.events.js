import {
  pswrdHidden,
  formAuth,
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import {
  onErrorValid,
  onValidForm,
  onErrorMessage,
  onSuccessMessage,
} from '@/components/modules/authorization/AuthorizationModule.valids.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import { useStateStore } from '@/store/stateStore.js'

const settingStore = useSettingsStore()
const sessionStore = useSessionStore()
const stateStore = useStateStore()
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
    await sessionStore.getInfoSession()
    clearForm()
    stateStore.globalPopupsModules.authorization.visibility = false
  } catch (e) {
    console.log('err object or boolean:', e)
    if (e === false) onErrorValid()
    else onErrorMessage()
    clearForm()
  }
}

export const onRecoveryPassword = () => {
  const telegramLink = `https://t.me/${settingStore.settings.tg_id}`
  const a = document.createElement('a')
  a.href = telegramLink
  a.target = '_blank'
  a.click()
}
export const onRegistration = () => {
  stateStore.globalPopupsModules.authorization.visibility = false
  stateStore.globalPopupsModules.registration.visibility = true
}

export const onAuthTelegram = () => {
  const a = document.createElement('a')
  a.href = `https://t.me/momytest_bot`
  a.target = '_blank'
  a.click()
}
