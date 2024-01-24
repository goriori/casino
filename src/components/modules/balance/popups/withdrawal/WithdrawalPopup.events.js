import {
  stateManipulate,
  stateMessage,
  stateSum,
} from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.option.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'

const paymentStore = usePaymentStore()
export const onSwitchWithdrawalReplenishment = () => {
  stateManipulate.value = 'replenishment'
  paymentStore.replObject.type = 'add'
}
export const onSwitchWithdrawalConclusion = () => {
  stateManipulate.value = 'conclusion'
  paymentStore.replObject.type = 'out'
}

export const onSwitchWithdrawalSum = (method) => {
  stateManipulate.value = 'sum-screen'
}

export const onSwitchWithdrawalSelectBank = (sum) => {
  stateSum.value = sum
  if (paymentStore.replObject.type === 'crypto')
    stateManipulate.value = 'replenishment-cryptocurrency'
  else stateManipulate.value = 'select-bank'
}

export const onSwitchWithdrawalSumTranslation = () => {
  stateManipulate.value = 'sum-translation'
}

export const onSwitchWithdrawalConfirm = () => {
  stateManipulate.value = 'confirm-translation'
}

export const onSwitchWithdrawalMessage = (message) => {
  stateManipulate.value = 'message-translation'
  stateMessage.value = message
}

export const onFinishWithdrawal = (message) => {
  onSwitchWithdrawalMessage(message)
}

export const onClose = (emits) => {
  emits('close')
}
