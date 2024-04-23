import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { ERRORS } from '@/configs/errors.js'
import { useStateStore } from '@/store/stateStore.js'

export function useMethods(
  choiceOut,
  withdrawalForm,
  setErrorValidWithdrawal,
  setErrorWithdrawal,
  setSuccessWithdrawal,
  validForm
) {
  const stateStore = useStateStore()
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
        if (e === ERRORS.ERROR_VERIFICATION.TYPE) setErrorVerification()
        else if (e === ERRORS.ERROR_VALIDATION.TYPE) setErrorValidWithdrawal()
        else if (e === ERRORS.ERROR_NOT_FILLED_FIELDS.TYPE)
          stateStore.globalPopupMessages.error.show(
            ERRORS.ERROR_NOT_FILLED_FIELDS.MESSAGE
          )
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
    const switchChoice = () => {
      valuesChoice.forEach((choice) => {
        choice === choiceValue
          ? (choiceOut.value[choice] = true)
          : (choiceOut.value[choice] = false)
      })
    }
    return {
      bankCard: () => {
        switchChoice()
      },
      crypto: () => {
        // switchChoice()
        stateStore.globalPopupMessages.error.show(
          ERRORS.ERROR_NO_TEMPORARILY_ACCESS_MODULE.MESSAGE
        )
      },
    }[choiceValue].apply(this, [])
  }
  const rebuildForm = () => {
    const sessionStore = useSessionStore()
    withdrawalForm.value.username = sessionStore.session.profile.username
    withdrawalForm.value.user_id = sessionStore.session.profile.id
    withdrawalForm.value.date = new Date()
  }
  const clearForm = () => {
    withdrawalForm.value = {
      props: '',
      sum: '',
      type: 'bank',
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
