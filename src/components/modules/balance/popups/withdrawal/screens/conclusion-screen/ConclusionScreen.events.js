import { cnclsnForm , statusTranslation} from '@/components/modules/balance/popups/withdrawal/screens/conclusion-screen/ConclusionScreen.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useRegular } from '@/utils/useRegular.js'

const paymentStore = usePaymentStore()
const sessionStore = useSessionStore()
const {cardTest, dateTest} = useRegular()
export const onSendConclusionForm = async () => {
  validForm()
    .then(async (result) => {
      console.log('valid result', result)
      cnclsnForm.value.username = sessionStore.session.profile.username
      cnclsnForm.value.user_id = sessionStore.session.profile.id
      await paymentStore.sendWithdrawal(cnclsnForm.value)
      setSuccessWithdrawal()
    })
    .then(clearForm)
    .catch((e) => {
      setErrorWithdrawal()
      console.log('valid result', e)
    })
}


const setSuccessWithdrawal = () => {
  statusTranslation.value = 'success'
  setTimeout(() => {
    statusTranslation.value = 'none'
  }, 3000)
}
const setErrorWithdrawal = () => {
  statusTranslation.value = 'error'
  setTimeout(() => {
    statusTranslation.value = 'none'
  }, 3000)
}
const validForm = async () => {
  // console.log('valid number card:', cardTest(withdrawalForm.value.card))
  // console.log('valid user id:', withdrawalForm.value.user_id.trim().length === 0)
  // console.log('valid sum :', withdrawalForm.value.sum < 1000)
  // console.log('valid date :', !dateTest(withdrawalForm.value.date))
  if (!cardTest(cnclsnForm.value.card)) throw false
  if (!dateTest(cnclsnForm.value.date)) throw false
  if (cnclsnForm.value.sum < 500) throw false
  return true
}

const clearForm = () => {
  cnclsnForm.value = {
    card: '',
    sum: '',
    date: '',
    tg_id: '',
    user_id: '',
  }
}
