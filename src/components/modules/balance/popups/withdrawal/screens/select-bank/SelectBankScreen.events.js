import { usePaymentStore } from '@/store/payments/paymentStore.js'

const paymentStore = usePaymentStore()
export const onSelectBank = (bank, emits) => {
  paymentStore.targetRequisite = {
    bankName: bank?.title,
    bankIcon: bank?.icon,
    bankRequisite: bank?.card,
  }
  paymentStore.replObject.fullname = bank?.name
  paymentStore.replObject.name = bank?.title
  paymentStore.replObject.props = bank?.card
  emits('select-bank')
}
