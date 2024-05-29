export function useValid(balance, isValid, timeClosePopup) {
  const minCountReplenishment = window.MIN_COUNT_REPLENISHMENT
  const validSum = async () => {
    if (balance.value < minCountReplenishment) throw false
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
