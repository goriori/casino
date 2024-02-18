import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

export function useMethods(
  fullName,
  screenshot,
  timeClosePopup,
  translationMessages,
  onErrorValid,
  onValidFullName
) {
  const paymentStore = usePaymentStore()
  const sessionStore = useSessionStore()
  const onChangeFullName = (e) => {
    fullName.value = e.target.value
    paymentStore.replObject.fullname = fullName.value
  }

  const onConfirmTranslation = async (emits) => {
    try {
      await paymentStore.sendReplenishment()
      emits('success')
    } catch (e) {
      onErrorServer()
      emits('error')
    }
  }
  const onChangeFile = (event, emits) => {
    const files = event.target.files || event.dataTransfer.files
    if (!files.length) return
    screenshot.value = files[0]
    paymentStore.replObject.screenshot = screenshot.value
    paymentStore.replObject.user_id = sessionStore.session.profile.id
    onValidFullName(emits).then(onConfirmTranslation).catch(onErrorValid)
  }

  const onErrorServer = () => {
    translationMessages.value.error = true
    setTimeout(
      () => (translationMessages.value.error = false),
      timeClosePopup.value
    )
  }
  const onClipboardWrite = (value) => {
    navigator.clipboard.writeText(value)
  }
  const clearOptions = () => {
    screenshot.value = null
    fullName.value = ''
  }
  return {
    clearOptions,
    onChangeFile,
    onChangeFullName,
    onClipboardWrite,
  }
}
