import { ref } from 'vue'


export const timeClosePopup = ref(15000)
export const withdrawalForm = ref({
  card: '',
  sum: '',
  date: '',
  user_id: '',
})
export const translationMessage = ref({
  error: false,
  success: false,
  isValid: false,
})
