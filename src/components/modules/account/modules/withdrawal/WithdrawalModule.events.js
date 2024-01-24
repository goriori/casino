import { withdrawalForm } from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import { useRegular } from '@/utils/useRegular.js'

const { cardTest, dateTest } = useRegular()
const paymentStore = usePaymentStore()
const sessionStore = useSessionStore()
export const onSendWithdrawal = async () => {
  validForm()
    .then(async (result) => {
      console.log('valid result', result)
      withdrawalForm.value.username = sessionStore.session.profile.username
      withdrawalForm.value.user_id = sessionStore.session.profile.id
      await paymentStore.sendWithdrawal(withdrawalForm.value)
    })
    .then(clearForm)
    .catch((e) => {
      console.log('valid result', e)
    })
}

const validForm = async () => {
  // console.log('valid number card:', cardTest(withdrawalForm.value.card))
  // console.log('valid user id:', withdrawalForm.value.user_id.trim().length === 0)
  // console.log('valid sum :', withdrawalForm.value.sum < 1000)
  // console.log('valid date :', !dateTest(withdrawalForm.value.date))
  if (!cardTest(withdrawalForm.value.card)) throw false
  if (!dateTest(withdrawalForm.value.date)) throw false
  if (withdrawalForm.value.sum < 1000) throw false
  return true
}

const clearForm = () => {
  withdrawalForm.value = {
    card: '',
    sum: '',
    date: '',
    tg_id: '',
    user_id: '',
  }
}
