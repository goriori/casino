import {
  authMessages,
  formAuth,
  timeClosePopup,
  targetEntity,
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useStateStore } from '@/store/stateStore.js'
import { useRegular } from '@/utils/useRegular.js'
import { ERRORS } from '@/configs/errors.js'

export const onValidForm = async (targetEntity = 'email') => {
  const { emailTest, phoneTest } = useRegular()
  if ( targetEntity === 'email' && formAuth.value.username.trim().length === 0) throw ERRORS.ERROR_VALIDATION.TYPE
  else if ( targetEntity.value === 'email' && !emailTest(formAuth.value.username)) throw ERRORS.ERROR_VALIDATION.TYPE
  else if ( targetEntity.value === 'phone' && formAuth.value.username.trim().length === 0) throw ERRORS.ERROR_VALIDATION.TYPE
  else if ( targetEntity.value === 'phone' && !phoneTest(formAuth.value.username)) throw ERRORS.ERROR_VALIDATION.TYPE
  else if (formAuth.value.password.trim().length === 0) throw ERRORS.ERROR_VALIDATION.TYPE
  return true
}

export const onErrorMessage = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.error.show(ERRORS.ERROR_SERVER.MESSAGE)
  setTimeout(() => {
    stateStore.globalPopupMessages.error.close()
  }, timeClosePopup.value)
}

export const onErrorValid = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.error.show(ERRORS.ERROR_VALIDATION.MESSAGE)
  setTimeout(() => {
    stateStore.globalPopupMessages.error.close()
  }, timeClosePopup.value)
}
export const onSuccessMessage = () => {
  authMessages.value.success = true
  setTimeout(() => {
    authMessages.value.success = false
  }, timeClosePopup.value)
}
