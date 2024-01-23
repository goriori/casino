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

export const onRegistration = async () =>
  await sessionStore.registration(formReg.value)
