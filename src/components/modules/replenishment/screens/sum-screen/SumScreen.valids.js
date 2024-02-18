export function useValid(balance, isValid, timeClosePopup) {
  const minCountBalance = window.MESSAGES_POPUP.SUM_SCREEN.MIN_COUNT_PAY
  const validSum = async () => {
    if (balance.value < minCountBalance) throw false
  }

  const errorValid = () => {
    isValid.value = true
    setTimeout(() => (isValid.value = false), timeClosePopup.value)
  }
  return {
    validSum,
    errorValid,
  }
}
