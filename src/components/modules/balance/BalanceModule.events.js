import {
  btnActive,
  popupReplenishment,
} from '@/components/modules/balance/BalanceModule.options.js'

export const updateStateButton = (value) => {
  btnActive.value = value
}

export const testOutside = () => {
  btnActive.value = false
}

export const closePopupReplenishment = () => (popupReplenishment.value = false)
