import { usePaymentStore } from '@/store/payments/paymentStore.js'

// eslint-disable-next-line func-style
export function useMethods(
  historyStateManipulate,
  stateManipulate,
  stateMessage,
  stateSum
) {
  const paymentStore = usePaymentStore()
  const onSwitchWithdrawalReplenishment = () => {
    stateManipulate.value = 'replenishment'
    paymentStore.replObject.type = 'add'
  }

  const onSwitchWithdrawalSum = (method) => {
    historyStateManipulate.value.push('replenishment')
    stateManipulate.value = 'sum-screen'
  }
  const onSwitchWithdrawalSelectBank = (sum) => {
    stateSum.value = sum
    historyStateManipulate.value.push('sum-screen')
    if (paymentStore.replObject.type === 'crypto')
      stateManipulate.value = 'replenishment-cryptocurrency'
    else stateManipulate.value = 'select-bank'
  }
  const onSwitchWithdrawalSumTranslation = () => {
    historyStateManipulate.value.push('select-bank')
    stateManipulate.value = 'sum-translation'
  }
  const onSwitchWithdrawalConfirm = () => {
    historyStateManipulate.value.push('sum-translation')
    stateManipulate.value = 'confirm-translation'
  }
  const onSwitchWithdrawalMessage = (message) => {
    if (stateManipulate.value === 'replenishment-cryptocurrency')
      historyStateManipulate.value.push('replenishment-cryptocurrency')
    else historyStateManipulate.value.push('confirm-translation')

    stateManipulate.value = 'message-translation'
    stateMessage.value = message
  }
  const onFinishWithdrawal = (message) => {
    onSwitchWithdrawalMessage(message)
  }
  const onBack = () => {
    if (historyStateManipulate.value.length === 0) return
    const backStep = historyStateManipulate.value.length - 1
    stateManipulate.value = historyStateManipulate.value[backStep]
    historyStateManipulate.value.pop()
  }
  const onClearHistory = () => [(historyStateManipulate.value = [])]
  const onClose = (emits) => {
    onClearHistory()
    emits('close')
  }
  return {
    onSwitchWithdrawalReplenishment,
    onSwitchWithdrawalSum,
    onSwitchWithdrawalSelectBank,
    onSwitchWithdrawalSumTranslation,
    onSwitchWithdrawalConfirm,
    onFinishWithdrawal,
    onBack,
    onClearHistory,
    onClose,
  }
}
