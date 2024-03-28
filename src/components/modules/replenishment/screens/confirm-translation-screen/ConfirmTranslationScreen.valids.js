import { useStateStore } from '@/store/stateStore.js'
import { ERRORS } from '@/configs/errors.js'

export function useValids(fullName, timeClosePopup) {
  const onValidFullName = async (emits) => {
    if (fullName.value.trim().length === 0) throw false
    return emits
  }
  const onErrorValid = () => {
    console.log('error valid')
    const stateStore = useStateStore()
    stateStore.globalPopupMessages.error.show(ERRORS.ERROR_VALIDATION.MESSAGE)
    setTimeout(
      () => stateStore.globalPopupMessages.error.close(),
      timeClosePopup.value
    )
  }
  return {
    onErrorValid,
    onValidFullName,
  }
}
