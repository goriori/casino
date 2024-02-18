
import { useStateStore } from '@/store/stateStore.js'

export function useValids(fullName, timeClosePopup, translationMessages) {
  const onValidFullName = async (emits) => {
    if (fullName.value.trim().length === 0) throw false
    return emits
  }
  const onErrorValid = () => {
    const stateStore = useStateStore()
    stateStore.globalPopupMessages.errorValid = true
    setTimeout(
      () => (stateStore.globalPopupMessages.errorValid = false),
      timeClosePopup.value
    )
  }
  return {
    onErrorValid,
    onValidFullName,
  }
}
