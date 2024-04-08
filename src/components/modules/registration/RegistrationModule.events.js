import {
  pswrdHidden,
  pswrdCnfrmHidden,
  formReg,
  targetEntity,
} from '@/components/modules/registration/RegistrationModule.options.js'

import { useSessionStore } from '@/store/session/sessionStore.js'
import {
  onErrorMessage,
  onErrorValid,
  onValidForm,
} from '@/components/modules/registration/RegistrationModule.valids.js'
import { useStateStore } from '@/store/stateStore.js'
import { ERRORS } from '@/configs/errors.js'

const sessionStore = useSessionStore()
const stateStore = useStateStore()
export const onChangeHiddenPassword = () =>
  (pswrdHidden.value = !pswrdHidden.value)

export const onChangeHiddenPasswordConfirm = () =>
  (pswrdCnfrmHidden.value = !pswrdCnfrmHidden.value)

const clearForm = () => {
  formReg.value = {
    username: '',
    password: '',
    // eslint-disable-next-line camelcase
    password_confirmation: '',
  }
}
export const onRegistration = async (router) => {
  try {
    await onValidForm(targetEntity.value)
      .then((resultValid) => {
        sessionStore.registration(formReg.value)
      })
      .then(clearForm)
      .then(openAuthorization)
  } catch (e) {
    if (e === ERRORS.ERROR_VALIDATION.TYPE) onErrorValid()
    else onErrorMessage()
  }
}

export const openAuthorization = () => {
  stateStore.globalPopupsModules.authorization.visibility = true
  stateStore.globalPopupsModules.registration.visibility = false
}
export const onRegistrationTelegram = () => {
  const a = document.createElement('a')
  const urlTelegramBot = window.TG_BOT
  a.href = urlTelegramBot
  a.target = '_blank'
  a.click()

}
