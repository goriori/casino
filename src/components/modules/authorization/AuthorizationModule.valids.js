import {
  authMessages,
  formAuth,
  timeClosePopup,
 targetEntity
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useStateStore } from '@/store/stateStore.js'
import { useRegular } from '@/utils/useRegular.js'
import { ERRORS } from '@/configs/errors.js'
export const onValidForm = async (targetEntity = 'email') => {
  const { emailTest, phoneTest } = useRegular()
  if (targetEntity === 'email' && formAuth.value.username.trim().length === 0) throw ERRORS.ERROR_VALIDATION
  else if (targetEntity.value === 'email' && !emailTest(formAuth.value.username)) throw ERRORS.ERROR_VALIDATION
  else if (targetEntity.value === 'phone' && formAuth.value.username.trim().length === 0) throw ERRORS.ERROR_VALIDATION
  else if (targetEntity.value === 'phone' && !phoneTest(formAuth.value.username)) throw ERRORS.ERROR_VALIDATION
  else if (formAuth.value.password.trim().length === 0) throw ERRORS.ERROR_VALIDATION
  return true
}

export const onErrorMessage = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.errorServer = true
  setTimeout(() => {
    stateStore.globalPopupMessages.errorServer = false
  }, timeClosePopup.value)
}

export const onErrorValid = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.errorValid = true
  setTimeout(() => {
    stateStore.globalPopupMessages.errorValid = false
  }, timeClosePopup.value)
}
export const onSuccessMessage = () => {
  authMessages.value.success = true
  setTimeout(() => {
    authMessages.value.success = false
  }, timeClosePopup.value)
}
