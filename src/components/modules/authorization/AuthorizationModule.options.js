import { ref } from 'vue'

export const pswrdHidden = ref(true)
export const authFields = ref(null)
export const authMessages = ref({
  success: false,
  error: false,
})
export const formAuth = ref({
  username: '',
  password: '',
})
