import {
  fullName,
  timeClosePopup,
  translationMessages,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'

export const onValidFullName = async (emits) => {
  if (fullName.value.trim().length === 0) throw false
  return emits
}

export const onErrorValid = () => {
  translationMessages.value.isValid = true
  setTimeout(
    () => (translationMessages.value.isValid = false),
    timeClosePopup.value
  )
}
