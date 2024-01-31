import {
  pswrdHidden,
  pswrdCnfrmHidden,
  formReg,
  regMessages,
} from '@/components/modules/registration/RegistrationModule.options.js'
import { useRegular } from '@/utils/useRegular.js'

import { useSessionStore } from '@/store/session/sessionStore.js'

const { dateTest, cardTest, emailTest } = useRegular()
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
    onErrorMessage()
    clearForm()
    router.push('/registration')
  }
}

const onErrorMessage = () => {
  regMessages.value.error = true
  setTimeout(() => {
    regMessages.value.error = false
  }, 3000)
}
const onSuccessMessage = () => {
  regMessages.value.success = true
  setTimeout(() => {
    regMessages.value.success = false
  }, 3000)
}
const onValidForm = async () => {
  if (formReg.value.password.trim().length === 0) throw false
  if (formReg.value.password_confirmation.trim().length === 0) throw false
  if (
    formReg.value.password.trim() !== formReg.value.password_confirmation.trim()
  )
    throw false
  return true
}

export const onRegistrationTelegram = () => {
  const a = document.createElement('a')
  a.href = `https://t.me/momytest_bot`
  a.target = '_blank'
  a.click()
}
