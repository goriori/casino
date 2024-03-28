import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

export function useMethods(balance, errorValid, validSum, promo, bonusBalance) {
  const paymentStore = usePaymentStore()
  const sessionStore = useSessionStore()
  const onChangeSlotBalance = (slot) => {
    balance.value = slot
  }
  const onConfirmSum = async (emits) => {
    try {
      await validSum()
      sessionStore.getStatusPay()
      if (sessionStore.session?.history?.length > 0) {
        paymentStore.replObject.sum = balance.value
      } else {
        paymentStore.replObject.sum = balance.value + bonusBalance.value
      }
      paymentStore.replObject.promo = promo
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
