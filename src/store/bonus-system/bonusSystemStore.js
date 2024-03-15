import { defineStore } from 'pinia'
import { ref } from 'vue'
import BonusSystemService from '@/API/bonus-system/bonusSystemService.js'

export const useBonusSystemStore = defineStore('bonusSystemStore', () => {
  const bonusSystemState = ref({})
  const onExchangeCoins = async (coins) => {
    await BonusSystemService.exchangeCoins(coins)
  }
  const onInitBonusSystemAccount = (profile) => {
    console.log('init bonus system')
    const { bonus, coins, free_spins, promo, promo_activated } = profile
    bonusSystemState.value = {
      bonus,
      coins,
      free_spins,
      promo,
      promo_activated,
    }
  }
  return {
    bonusSystemState,
    onExchangeCoins,
    onInitBonusSystemAccount
  }
})
