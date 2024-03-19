import { useRegular } from '@/utils/useRegular.js'
import { useStateStore } from '@/store/stateStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

export function useValid(
  choiceOut,
  timeClosePopup,
  validResults,
  withdrawalForm
) {
  const { cardTest } = useRegular()
  const minCountWithdrawal =
    window.MESSAGES_POPUP.WITHDRAWAL.MIN_COUNT_WITHDRAWAL
  const maxCountWithdrawal =
    window.MESSAGES_POPUP.WITHDRAWAL.MAX_COUNT_WITHDRAWAL
  const sessionStore = useSessionStore()
  const validForm = async () => {
    const userInfo = sessionStore.session.profile
    if (
      !userInfo.birthday ||
      !userInfo.phone ||
      !userInfo.email ||
      !userInfo.address
    )
      throw 'error verification'
    if (withdrawalForm.value.sum < minCountWithdrawal) {
      validResults.value.sum = false
      setTimeout(() => (validResults.value.sum = true), 5000)
      throw 'error valid'
    }
    if (withdrawalForm.value.sum > maxCountWithdrawal) throw 'error valid'
    if (!cardTest(withdrawalForm.value.card) && choiceOut.value.bankCard)
      throw 'error valid'
    return true
  }
  const setSuccessWithdrawal = () => {
    const stateStore = useStateStore()
    stateStore.globalPopupMessages.application = true
    setTimeout(() => {
      stateStore.globalPopupMessages.application = false
    }, timeClosePopup.value)
  }
  const setErrorWithdrawal = () => {
    const stateStore = useStateStore()
    stateStore.globalPopupMessages.errorServer = true
    setTimeout(() => {
      stateStore.globalPopupMessages.errorServer = false
    }, timeClosePopup.value)
  }
  const setErrorValidWithdrawal = () => {
    const stateStore = useStateStore()
    stateStore.globalPopupMessages.errorValid = true
    setTimeout(() => {
      stateStore.globalPopupMessages.errorValid = false
    }, timeClosePopup.value)
  }

  const setErrorVerification = () => {
    const stateStore = useStateStore()
    stateStore.globalPopupMessages.errorVerification = true
    setTimeout(() => {
      stateStore.globalPopupMessages.errorVerification = false
    }, timeClosePopup.value)
  }
  return {
    validForm,
    setSuccessWithdrawal,
    setErrorWithdrawal,
    setErrorValidWithdrawal,
    setErrorVerification,
  }
}
