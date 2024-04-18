export function useValid(balance, isValid, timeClosePopup) {
  const minCountBalance = window.MIN_COUNT_WITHDRAWAL
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
