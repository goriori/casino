import { usePaymentStore } from '@/store/payments/paymentStore.js'
import {
  errorValid,
  validSum,
} from './SumScreen.valids.js'

export function useMethods(balance) {
  const paymentStore = usePaymentStore()
  const onChangeSlotBalance = (slot) => {
    balance.value = slot
  }
  const onConfirmSum = async (emits) => {
    try {
      await validSum()
      paymentStore.replObject.sum = balance.value
      emits('replenish', balance.value)
    } catch (e) {
      if (e === false) errorValid()
      clearSum()
    }
  }
  const clearSum = () => (balance.value = 0)

  return {
    onConfirmSum,
    onChangeSlotBalance,
  }
}
