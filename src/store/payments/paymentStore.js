import { defineStore } from 'pinia'
import { ref } from 'vue'
import PaymentService from '@/API/payment/paymentService.js'

export const usePaymentStore = defineStore('paymentStore', () => {
  const replObject = ref({
    sum: '',
    props: '',
    type: '',
    name: '',
    screenshot: null,
    fullname: '',
    user_id: '',
  })

  const sendReplenishment = async () => {
    const form = new FormData()
    const keysRepl = Object.keys(replObject.value)
    keysRepl.forEach(key=> form.append(key, replObject.value[key]))
    await PaymentService.setReplenishment(form)
  }

  const sendWithdrawal = async (withdrawalForm) => {
    await PaymentService.setWithdrawal(withdrawalForm)
  }
  return {
    replObject,
    sendReplenishment,
    sendWithdrawal,
  }
})
