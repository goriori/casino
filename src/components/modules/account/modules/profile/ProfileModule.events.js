import {
  isEditBirthday,
  isEditFullName,
  promocode,
} from '@/components/modules/account/modules/profile/ProfileModule.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'

const pyamentStore = usePaymentStore()
export const onChangeStateEditFullName = () => {
  isEditFullName.value = !isEditFullName.value
}

export const onChangeStateEditBirthday = () => {
  isEditBirthday.value = !isEditBirthday.value
}

export const onSendPromocode = async () => {
  await pyamentStore.sendPromocode(promocode.value)
  promocode.value = ''
}
