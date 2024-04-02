import { ref } from 'vue'

export const pswrdHidden = ref(true)
export const pswrdCnfrmHidden = ref(true)
export const regMessages = ref({
  success: false,
  error: false,
  isValid: false,
})

export const targetEntity = ref('email')

export const formReg = ref({
  username: '',
  password: '',
  // eslint-disable-next-line camelcase
  password_confirmation: '',

})
