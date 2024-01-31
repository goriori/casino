import {
  formReg,
  regMessages,
} from '@/components/modules/registration/RegistrationModule.options.js'
import { timeClosePopup } from '@/components/modules/authorization/AuthorizationModule.options.js'

export const onErrorMessage = () => {
  regMessages.value.error = true
  setTimeout(() => {
    regMessages.value.error = false
  }, 3000)
}
export const onSuccessMessage = () => {
  regMessages.value.success = true
  setTimeout(() => {
    regMessages.value.success = false
  }, 3000)
}

export const onErrorValid = () => {
  regMessages.value.isValid = true
  setTimeout(() => {
    regMessages.value.isValid = false
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