import {
  pswrdHidden,
  pswrdCnfrmHidden,
  formReg,
} from '@/components/modules/registration/RegistrationModule.options.js'

import { useSessionStore } from '@/store/session/sessionStore.js'
import {
  onErrorMessage,
  onErrorValid,
  onValidForm,
} from '@/components/modules/registration/RegistrationModule.valids.js'

const sessionStore = useSessionStore()

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
    await onValidForm()
      .then((resultValid) => {
        sessionStore.registration(formReg.value)
      })
      .then(clearForm)
      .then(() => router.push('/authorization'))
  } catch (e) {
    console.log('result valid:', e)
    if (e === false) onErrorValid()
    else onErrorMessage()
    clearForm()
    router.push('/registration')
  }
}

export const onRegistrationTelegram = () => {
  const a = document.createElement('a')
  a.href = `https://t.me/momytest_bot`
  a.target = '_blank'
  a.click()
}
