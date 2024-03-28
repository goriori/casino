import { statusTranslation } from '@/components/modules/replenishment/screens/sum-translation-screen/SumTranslationScreen.option.js'

export const onCheckStatusPay = () => {
  const timeWait = 5000
  setTimeout(() => {
    statusTranslation.value = 'success'
  }, timeWait)
}

export  const onClipboardWrite = ( value) => {
  console.log(value)
  navigator.clipboard.writeText(value)
}

export const clearOptions = () => {
  statusTranslation.value = 'none'
}
