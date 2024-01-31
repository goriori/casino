import {
  fullName,
  screenshot,
  timeClosePopup,
  translationMessages,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import {
  onErrorValid,
  onValidFullName,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.valids.js'

const paymentStore = usePaymentStore()
const sessionStore = useSessionStore()

export const onChangeFullName = (e) => {
  fullName.value = e.target.value
  paymentStore.replObject.fullname = fullName.value
}

const onConfirmTranslation = async () => {
  try {
    await paymentStore.sendReplenishment()
  } catch (e) {
    onErrorServer()
  }
}
export const onChangeFile = (e) => {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length) return
  screenshot.value = files[0]
  paymentStore.replObject.screenshot = screenshot.value
  paymentStore.replObject.user_id = sessionStore.session.profile.id
  onValidFullName().then(onConfirmTranslation).catch(onErrorValid)
}

const onErrorServer = () => {
  translationMessages.value.error = true
  setTimeout(
    () => (translationMessages.value.error = false),
    timeClosePopup.value
  )
}
export const onClipboardWrite = (value) => {
  navigator.clipboard.writeText(value)
}

export const clearOptions = () => {
  screenshot.value = null
  fullName.value = ''
}
