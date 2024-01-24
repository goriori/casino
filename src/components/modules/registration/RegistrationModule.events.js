import {
  pswrdHidden,
  pswrdCnfrmHidden,
  formReg,
} from '@/components/modules/registration/RegistrationModule.options.js'

import { useSessionStore } from '@/store/session/sessionStore.js'

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
    birthday: '',
    // eslint-disable-next-line camelcase
    first_name: '',
    // eslint-disable-next-line camelcase
    last_name: '',
    phone: '',
  }
}
export const onRegistration = async (router) => {
  try {
    await sessionStore.registration(formReg.value)
    clearForm()
  } catch (e) {
    clearForm()
    router.push('/')
  }
}

export const onRegistrationTelegram = () => {
  const a = document.createElement('a')
  a.href = `https://t.me/momytest_bot`
  a.target = '_blank'
  a.click()

}
