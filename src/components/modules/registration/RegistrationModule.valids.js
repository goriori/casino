import {
  formReg,
  regMessages,
} from '@/components/modules/registration/RegistrationModule.options.js'
import { timeClosePopup } from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useStateStore } from '@/store/stateStore.js'

export const onErrorMessage = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.errorServer = true
  setTimeout(() => {
    stateStore.globalPopupMessages.errorServer = false
  }, 3000)
}
export const onSuccessMessage = () => {
  regMessages.value.success = true
  setTimeout(() => {
    regMessages.value.success = false
  }, 3000)
}

export const onErrorValid = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.errorValid = true
  setTimeout(() => {
    stateStore.globalPopupMessages.errorValid = false
  }, timeClosePopup.value)
}

export const onValidForm = async () => {
  if (formReg.value.password.trim().length === 0) throw false
  if (formReg.value.password_confirmation.trim().length === 0) throw false
  if (
    formReg.value.password.trim() !== formReg.value.password_confirmation.trim()
  )
    throw false
  return true
}
