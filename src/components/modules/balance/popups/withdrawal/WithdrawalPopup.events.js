import { stateManipulate } from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.option.js'

export const onSwitchWithdrawalReplenishment = () => {
  stateManipulate.value = 'replenishment'
}
export const onSwitchWithdrawalConclusion = () => {
  stateManipulate.value = 'conclusion'
}

export const onSwitchWithdrawalSum = () => {
  stateManipulate.value = 'sum-screen'
}

export const onSwitchWithdrawalSelectBank = () => {
  stateManipulate.value = 'select-bank'
}

export const onSwitchWithdrawalSumTranslation = () => {
  stateManipulate.value = 'sum-translation'
}

export const onSwitchWithdrawalConfirm = () => {
  stateManipulate.value = 'confirm-translation'
}