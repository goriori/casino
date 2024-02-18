import { usePaymentStore } from '@/store/payments/paymentStore.js'

export function useMethods(balance, errorValid, validSum) {
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
