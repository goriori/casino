import {
  authMessages,
  formAuth,
  timeClosePopup,
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useStateStore } from '@/store/stateStore.js'

export const onValidForm = async () => {
  if (formAuth.value.username.trim().length === 0) throw false
  else if (formAuth.value.password.trim().length === 0) throw false
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
