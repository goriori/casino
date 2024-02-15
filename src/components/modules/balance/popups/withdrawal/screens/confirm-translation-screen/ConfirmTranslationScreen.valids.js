import {
  fullName,
  timeClosePopup,
  translationMessages,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'
import { useStateStore } from '@/store/stateStore.js'

export const onValidFullName = async (emits) => {
  if (fullName.value.trim().length === 0) throw false
  return emits
}

export const onErrorValid = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.errorValid = true
  setTimeout(
    () => (stateStore.globalPopupMessages.errorValid = false),
    timeClosePopup.value
  )
}
