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
    await PaymentService.setReplenishment(replObject.value)
  }

  const sendWithdrawal = async (withdrawalForm) => {
    await PaymentService.setWithdrawal(withdrawalForm)
  }
  return {
    replObject,
    sendReplenishment,
    sendWithdrawal
  }
})
