import {
  fullName,
  screenshot,
  statusTranslation,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

const paymentStore = usePaymentStore()
const sessionStore = useSessionStore()
export const onCheckStatusTranslation = (emits) => {
  const timeWait = 5000
  setTimeout(() => {
    statusTranslation.value = 'success'
  }, timeWait)
}

export const onChangeFullName = (e) => {
  fullName.value = e.target.value
  paymentStore.replObject.fullname = fullName.value
}

const onConfirmTranslation = async () => {
  try {
    await paymentStore.sendReplenishment()
    statusTranslation.value = 'success'
  } catch (e) {
    statusTranslation.value = 'error'
  }
}
export const onChangeFile = (e) => {
  const files = e.target.files || e.dataTransfer.files
  console.log(files)
  if (!files.length) return
  screenshot.value = files[0]
  paymentStore.replObject.screenshot = screenshot.value
  paymentStore.replObject.user_id = sessionStore.session.profile.id
  onConfirmTranslation()
}

export const onClipboardWrite = (value) => {
  console.log(value)
  navigator.clipboard.writeText(value)
}
