import { ref } from 'vue'

const timeClosePopup = ref(15000)
const choiceOut = ref({
  bankCard: true,
  crypto: false
})
const withdrawalForm = ref({
  props: '',
  sum: '0',
  type: 'bank',
  date: '',
  user_id: ''
})
const validResults = ref({
  sum: true,
  bankCard: true,
  cryptoAddress: true
})


export function useData() {
  return {
    validResults,
    withdrawalForm,
    timeClosePopup,
    choiceOut
  }
}