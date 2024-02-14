import {
  choiceOut,
  withdrawalForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import {
  setErrorValidWithdrawal,
  setErrorWithdrawal,
  setSuccessWithdrawal,
  validForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.valids.js'

const paymentStore = usePaymentStore()
const sessionStore = useSessionStore()
export const onSendWithdrawal = async () => {
  validForm()
    .then(async (result) => {
      withdrawalForm.value.username = sessionStore.session.profile.username
      withdrawalForm.value.user_id = sessionStore.session.profile.id
      await paymentStore.sendWithdrawal(withdrawalForm.value)
      setSuccessWithdrawal()
    })
    .then(clearForm)
    .catch((e) => {
      if (e === false) setErrorValidWithdrawal()
      else setErrorWithdrawal()
    })
}

export const choicePay = (choiceValue) => {
  const valuesChoice = Object.keys(choiceOut.value)
  valuesChoice.forEach((choice) => {
    choice === choiceValue
      ? (choiceOut.value[choice] = true)
      : (choiceOut.value[choice] = false)
  })
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
