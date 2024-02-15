import { ref } from 'vue'

export const timeClosePopup = ref(15000)
export const choiceOut = ref({
  bankCard: true,
  crypto: false,
})
export const withdrawalForm = ref({
  card: '',
  cryptoWallet: '',
  sum: '0',
  date: '',
  user_id: '',
})
export const validResults = ref({
  sum: true,
  bankCard: true,
  cryptoAddress: true,
})

