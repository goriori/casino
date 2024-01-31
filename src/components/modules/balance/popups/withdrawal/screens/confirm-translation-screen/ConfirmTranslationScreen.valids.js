import {
  fullName,
  timeClosePopup,
  translationMessages,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'

export const onValidFullName = async () => {
  if (fullName.value.trim().length === 0) throw false
}

export const onErrorValid = () => {
  translationMessages.value.isValid = true
  setTimeout(
    () => (translationMessages.value.isValid = false),
    timeClosePopup.value
  )
}
