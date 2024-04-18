import { useRegular } from '@/utils/useRegular.js'
import { useStateStore } from '@/store/stateStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { ERRORS } from '@/configs/errors.js'

export function useValid(
  choiceOut,
  timeClosePopup,
  validResults,
  withdrawalForm
) {
  const { cardTest } = useRegular()
  const minCountWithdrawal = window.MIN_COUNT_WITHDRAWAL
  const maxCountWithdrawal = window.MAX_COUNT_WITHDRAWAL
  const sessionStore = useSessionStore()
  const validForm = async () => {
    const userInfo = sessionStore.session.profile
    if (
      !userInfo.birthday ||
      !userInfo.phone ||
      !userInfo.email ||
      !userInfo.address
    )
      throw ERRORS.ERROR_NOT_FILLED_FIELDS.TYPE
    if (withdrawalForm.value.sum < minCountWithdrawal) {
      validResults.value.sum = false
      setTimeout(() => (validResults.value.sum = true), 5000)
      throw ERRORS.ERROR_VALIDATION.TYPE
    }
    if (withdrawalForm.value.sum > maxCountWithdrawal)
      throw ERRORS.ERROR_VALIDATION.TYPE
    if (!cardTest(withdrawalForm.value.card) && choiceOut.value.bankCard)
      throw ERRORS.ERROR_VALIDATION.TYPE
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
    stateStore.globalPopupMessages.error.show(ERRORS.ERROR_SERVER.MESSAGE)
    setTimeout(() => {
      stateStore.globalPopupMessages.error.close()
    }, timeClosePopup.value)
  }
  const setErrorValidWithdrawal = () => {
    const stateStore = useStateStore()
    stateStore.globalPopupMessages.error.show(ERRORS.ERROR_VALIDATION.MESSAGE)
    setTimeout(() => {
      stateStore.globalPopupMessages.error.close()
    }, timeClosePopup.value)
  }

  return {
    validForm,
    setSuccessWithdrawal,
    setErrorWithdrawal,
    setErrorValidWithdrawal,
  }
}
