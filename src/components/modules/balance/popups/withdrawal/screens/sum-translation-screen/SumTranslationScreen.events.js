import { statusTranslation } from '@/components/modules/balance/popups/withdrawal/screens/sum-translation-screen/SumTranslationScreen.option.js'

export const onCheckStatusPay = (emits) => {
  const timeWait = 5000
  setTimeout(() => {
    statusTranslation.value = 'success'
    setTimeout(() => emits('success'), 1000)
  }, timeWait)
}
