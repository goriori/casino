import { ref } from 'vue'

const timeClosePopup = ref(15000)
const translationMessages = ref({
  error: false,
  isValid: false,
})
const fullName = ref('')
const screenshot = ref(null)

export function useData() {
  return {
    timeClosePopup,
    translationMessages,
    fullName,
    screenshot,
  }
}
