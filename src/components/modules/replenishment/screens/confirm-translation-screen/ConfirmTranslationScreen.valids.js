
import { useStateStore } from '@/store/stateStore.js'

export function useValids(fullName, timeClosePopup) {
  const onValidFullName = async (emits) => {
    if (fullName.value.trim().length === 0) throw false
    return emits
  }
  const onErrorValid = () => {
    console.log('error valid')
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
