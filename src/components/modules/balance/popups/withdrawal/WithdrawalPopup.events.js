import {
  historyStateManipulate,
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
  historyStateManipulate.value.push('replenishment')
  stateManipulate.value = 'sum-screen'
}

export const onSwitchWithdrawalSelectBank = (sum) => {
  stateSum.value = sum
  historyStateManipulate.value.push('sum-screen')
  if (paymentStore.replObject.type === 'crypto')
    stateManipulate.value = 'replenishment-cryptocurrency'
  else stateManipulate.value = 'select-bank'
}

export const onSwitchWithdrawalSumTranslation = () => {
  historyStateManipulate.value.push('select-bank')
  stateManipulate.value = 'sum-translation'
}

export const onSwitchWithdrawalConfirm = () => {
  historyStateManipulate.value.push('sum-translation')
  stateManipulate.value = 'confirm-translation'
}

export const onSwitchWithdrawalMessage = (message) => {
  if (stateManipulate.value === 'replenishment-cryptocurrency')
    historyStateManipulate.value.push('replenishment-cryptocurrency')
  else historyStateManipulate.value.push('confirm-translation')

  stateManipulate.value = 'message-translation'
  stateMessage.value = message
}

export const onFinishWithdrawal = (message) => {
  onSwitchWithdrawalMessage(message)
}

export const onBack = () => {
  if (historyStateManipulate.value.length === 0) return
  const backStep = historyStateManipulate.value.length - 1
  stateManipulate.value = historyStateManipulate.value[backStep]
  historyStateManipulate.value.pop()
}
export const onClearHistory = () => [(historyStateManipulate.value = [])]
export const onClose = (emits) => {
  onClearHistory()
  emits('close')
}
