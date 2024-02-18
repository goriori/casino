import {
  balance,
  isValid,
  timeClosePopup,
} from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.options.js'

const minCountBalance = window.MESSAGES_POPUP.SUM_SCREEN.MIN_COUNT_PAY
export const validSum = async () => {
  if (balance.value < minCountBalance) throw false
}

export const errorValid = () => {
  isValid.value = true
  setTimeout(() => (isValid.value = false), timeClosePopup.value)
}

