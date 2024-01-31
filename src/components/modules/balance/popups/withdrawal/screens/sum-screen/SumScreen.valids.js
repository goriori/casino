import {
  balance,
  sumMessages,
  timeClosePopup,
} from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.options.js'

export const validSum = async () => {
  if (balance.value < 300) throw false
}

export const errorValid = () => {
  sumMessages.value.isValid = true
  setTimeout(() => (sumMessages.value.isValid = true), timeClosePopup.value)
}
