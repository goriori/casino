import {
  formReg,
  regMessages,
} from '@/components/modules/registration/RegistrationModule.options.js'
import { timeClosePopup } from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useStateStore } from '@/store/stateStore.js'
import { useRegular } from '@/utils/useRegular.js'
import { ERRORS } from '@/configs/errors.js'
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

export const onValidForm = async (targetEntity = 'email') => {
  const { emailTest, phoneTest } = useRegular()
  if (targetEntity === 'email' && formReg.value.email.trim().length === 0) throw ERRORS.ERROR_VALIDATION
  if (targetEntity === 'email' && !emailTest(formReg.value.email)) throw ERRORS.ERROR_VALIDATION
  else if (targetEntity === 'phone' && formReg.value.phone.trim().length === 0) throw ERRORS.ERROR_VALIDATION
  if (targetEntity === 'phone' && !phoneTest(formReg.value.phone)) throw ERRORS.ERROR_VALIDATION
  else if (formReg.value.password.trim().length === 0) throw ERRORS.ERROR_VALIDATION
  else if (formReg.value.password_confirmation.trim().length === 0) throw ERRORS.ERROR_VALIDATION
  else if ( formReg.value.password.trim() !== formReg.value.password_confirmation.trim()) throw ERRORS.ERROR_VALIDATION
  return true
}
