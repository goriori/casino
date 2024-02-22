import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

export function useMethods(
  choiceOut,
  withdrawalForm,
  setErrorValidWithdrawal,
  setErrorWithdrawal,
  setSuccessWithdrawal,
  validForm
) {
  const paymentStore = usePaymentStore()
  const sessionStore = useSessionStore()
  const onSendWithdrawal = async () => {
    validForm()
      .then(async (result) => {
        rebuildForm()
        if (choiceOut.value.bankCard) await conclusionBank()
        else if (choiceOut.value.crypto) await conclusionCrypto()
        setSuccessWithdrawal()
      })
      .then(clearForm)
      .catch((e) => {
        if (e === false) setErrorValidWithdrawal()
        else setErrorWithdrawal()
      })
  }

  const conclusionBank = async () => {
    await paymentStore.sendWithdrawal(withdrawalForm.value)
    await sessionStore.getInfoSession()
  }
  const conclusionCrypto = async () => {
    await paymentStore.sendWithdrawal({
      sum: withdrawalForm.value.sum,
      props: withdrawalForm.value.cryptoWallet,
      type: 'crypto',
      date: withdrawalForm.value.date,
      user_id: withdrawalForm.value.user_id,
    })
  }
  const choicePay = (choiceValue) => {
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
  return {
    onSendWithdrawal,
    choicePay,
  }
}
