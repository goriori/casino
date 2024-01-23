import { statusTranslation } from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'

export const onCheckStatusTranslation = (emits) => {
  const timeWait = 5000
  setTimeout(() => {
    statusTranslation.value = 'success'
    emits('success')
  }, timeWait)
}
