import {
  timeClosePopup,
  translationMessage,
  withdrawalForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import { useRegular } from '@/utils/useRegular.js'

const { cardTest, dateTest } = useRegular()

export const validForm = async () => {
  if (!cardTest(withdrawalForm.value.card)) throw false
  if (!dateTest(withdrawalForm.value.date)) throw false
  if (withdrawalForm.value.sum < 1000) throw false
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
