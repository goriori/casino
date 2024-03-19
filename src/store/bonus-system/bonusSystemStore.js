import { defineStore } from 'pinia'
import { ref } from 'vue'
import BonusSystemService from '@/API/bonus-system/bonusSystemService.js'
import RouletteService from '@/API/roulette/rouletteService.js'

export const useBonusSystemStore = defineStore('bonusSystemStore', () => {
  const bonusSystemState = ref({})
  const roulette = ref({})
  const winPrize = ref({})
  const getPrizesRoulette = async () => {
    const res = await RouletteService.getPrizes()
    roulette.value.prizes = res
  }
  const spinRoulette = async () => {
    const { result } = await RouletteService.spinRoulette()
    winPrize.value = result
  }
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
    roulette,
    winPrize,
    getPrizesRoulette,
    spinRoulette,
    onExchangeCoins,
    onInitBonusSystemAccount,
  }
})
