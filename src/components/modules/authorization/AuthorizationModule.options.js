import { ref } from 'vue'

export const pswrdHidden = ref(true)
export const authFields = ref(null)

export const timeClosePopup = ref(15000)
export const authMessages = ref({
  success: false,
  error: false,
  isValid: false,
})
export const formAuth = ref({
  username: '',
  password: '',
})
