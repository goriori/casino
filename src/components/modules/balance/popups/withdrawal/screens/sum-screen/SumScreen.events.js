import { balance } from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'

const paymentStore = usePaymentStore()
export const onChangeSlotBalance = (slot) => {
  balance.value = slot
}

export const onConfirmSum = (emits) => {
  paymentStore.replObject.sum = balance.value
  emits('replenish', balance.value)
}
