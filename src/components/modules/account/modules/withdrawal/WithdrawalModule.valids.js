import {
  choiceOut,
  timeClosePopup,
  validResults,
  withdrawalForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import { useRegular } from '@/utils/useRegular.js'
import { useStateStore } from '@/store/stateStore.js'

const { cardTest } = useRegular()
const minCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MIN_COUNT_WITHDRAWAL
const maxCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MAX_COUNT_WITHDRAWAL
export const validForm = async () => {
  if (withdrawalForm.value.sum < minCountWithdrawal) {
    validResults.value.sum = false
    setTimeout(() => (validResults.value.sum = true), 5000)
    throw false
  }
  if (withdrawalForm.value.sum > maxCountWithdrawal) throw false
  if (!cardTest(withdrawalForm.value.card) && choiceOut.value.bankCard)
    throw false
  return true
}

export const setSuccessWithdrawal = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.success = true
  setTimeout(() => {
    stateStore.globalPopupMessages.success = false
  }, timeClosePopup.value)
}
export const setErrorWithdrawal = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.errorServer = true
  setTimeout(() => {
    stateStore.globalPopupMessages.errorServer = false
  }, timeClosePopup.value)
}

export const setErrorValidWithdrawal = () => {
  const stateStore = useStateStore()
  stateStore.globalPopupMessages.errorValid = true
  setTimeout(() => {
    stateStore.globalPopupMessages.errorValid = false
  }, timeClosePopup.value)
}
