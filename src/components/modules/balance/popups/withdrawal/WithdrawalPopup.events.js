import { stateManipulate } from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.option.js'


export const onSwitchWithdrawalReplenishment = () => {
  stateManipulate.value = 'replenishment'
}
export const onSwitchWithdrawalConclusion = () => {
  stateManipulate.value = 'conclusion'
}