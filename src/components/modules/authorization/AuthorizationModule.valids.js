import {
  authMessages,
  formAuth,
  timeClosePopup,
} from '@/components/modules/authorization/AuthorizationModule.options.js'

export const onValidForm = async () => {
  if (formAuth.value.username.trim().length === 0) throw false
  else if (formAuth.value.password.trim().length === 0) throw false
}

export const onErrorMessage = () => {
  authMessages.value.error = true
  setTimeout(() => {
    authMessages.value.error = false
  }, timeClosePopup.value)
}

export const onErrorValid = () => {
  authMessages.value.isValid = true
  setTimeout(() => {
    authMessages.value.isValid = false
  }, timeClosePopup.value)
}
export const onSuccessMessage = () => {
  authMessages.value.success = true
  setTimeout(() => {
    authMessages.value.success = false
  }, timeClosePopup.value)
}