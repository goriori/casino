import { ref } from 'vue'

const isValid = ref(false)
const timeClosePopup = ref(15000)
const balance = ref(0)

export function useData() {
  return {
    isValid,
    timeClosePopup,
    balance,
  }
}
