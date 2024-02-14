import {
  timeClosePopup,
  translationMessage,
  withdrawalForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import { useRegular } from '@/utils/useRegular.js'

const { cardTest } = useRegular()
const minCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MIN_COUNT_WITHDRAWAL
const maxCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MAX_COUNT_WITHDRAWAL
export const validForm = async () => {
  if (!cardTest(withdrawalForm.value.card)) throw false
  if (withdrawalForm.value.sum < minCountWithdrawal) throw false
  if (withdrawalForm.value.sum > maxCountWithdrawal) throw false
  return true
}

export const setSuccessWithdrawal = () => {
  translationMessage.value.success = true
  setTimeout(() => {
    translationMessage.value.success = false
  }, timeClosePopup.value)
}
export const setErrorWithdrawal = () => {
  translationMessage.value.error = true
  setTimeout(() => {
    translationMessage.value.error = false
  }, timeClosePopup.value)
}

export const setErrorValidWithdrawal = () => {
  translationMessage.value.isValid = true
  setTimeout(() => {
    translationMessage.value.isValid = false
  }, timeClosePopup.value)
}
