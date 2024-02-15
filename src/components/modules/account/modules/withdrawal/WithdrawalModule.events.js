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

export const onSendWithdrawal = async () => {
  const paymentStore = usePaymentStore()
  validForm()
    .then(async (result) => {
      rebuildForm()
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
const rebuildForm = () => {
  const sessionStore = useSessionStore()
  withdrawalForm.value.username = sessionStore.session.profile.username
  withdrawalForm.value.user_id = sessionStore.session.profile.id
  withdrawalForm.value.date = Date.now()
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
