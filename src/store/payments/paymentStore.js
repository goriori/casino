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
  const targetRequisite = ref({})
  const requisites = ref([])
  const sendReplenishment = async () => {
    const form = new FormData()
    const keysRepl = Object.keys(replObject.value)
    keysRepl.forEach((key) => form.append(key, replObject.value[key]))
    await PaymentService.setReplenishment(form)
  }

  const sendWithdrawal = async (withdrawalForm) => {
    await PaymentService.setWithdrawal(withdrawalForm)
  }
  const sendPromocode = async (pincode) => {
    return  await PaymentService.sendPromocode(pincode)
  }
  const getRequisiteCards = async () => {
    const response = await PaymentService.getRequisiteCards()
    requisites.value = response
  }

  return {
    replObject,
    requisites,
    targetRequisite,
    sendReplenishment,
    sendWithdrawal,
    sendPromocode,
    getRequisiteCards,

  }
})
