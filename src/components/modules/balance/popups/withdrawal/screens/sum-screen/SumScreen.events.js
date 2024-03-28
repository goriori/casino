import { balance } from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import {
  errorValid,
  validSum,
} from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.valids.js'

const paymentStore = usePaymentStore()
export const onChangeSlotBalance = (slot) => {
  balance.value = slot
}

export const onConfirmSum = async (emits) => {
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
