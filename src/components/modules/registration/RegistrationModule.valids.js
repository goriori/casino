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
  stateStore.globalPopupMessages.error.show(ERRORS.ERROR_SERVER.MESSAGE)
  setTimeout(() => {
    stateStore.globalPopupMessages.error.close()
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
  stateStore.globalPopupMessages.error.show(ERRORS.ERROR_VALIDATION.MESSAGE)
  setTimeout(() => {
    stateStore.globalPopupMessages.error.close()
  }, timeClosePopup.value)
}

export const onValidForm = async (targetEntity = 'email') => {
  const { emailTest, phoneTest } = useRegular()
  if (targetEntity === 'email' && formReg.value.username.trim().length === 0)
    throw ERRORS.ERROR_VALIDATION.TYPE
  if (targetEntity === 'email' && !emailTest(formReg.value.username))
    throw ERRORS.ERROR_VALIDATION.TYPE
  else if (
    targetEntity === 'phone' &&
    formReg.value.username.trim().length === 0
  )
    throw ERRORS.ERROR_VALIDATION.TYPE
  if (targetEntity === 'phone' && !phoneTest(formReg.value.username))
    throw ERRORS.ERROR_VALIDATION.TYPE
  else if (formReg.value.password.trim().length === 0)
    throw ERRORS.ERROR_VALIDATION.TYPE
  else if (formReg.value.password_confirmation.trim().length === 0)
    throw ERRORS.ERROR_VALIDATION.TYPE
  else if (
    formReg.value.password.trim() !== formReg.value.password_confirmation.trim()
  )
    throw ERRORS.ERROR_VALIDATION.TYPE
  return true
}
