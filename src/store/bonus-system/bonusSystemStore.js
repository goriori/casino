import { defineStore } from 'pinia'
import { ref } from 'vue'
import BonusSystemService from '@/API/bonus-system/bonusSystemService.js'
import RouletteService from '@/API/roulette/rouletteService.js'

export const useBonusSystemStore = defineStore('bonusSystemStore', () => {
  const ENTITY_PRIZES = {
    COINS: 'coin',
    BALANCE: 'balance',
    BONUS: 'bonus',
    FREE_SPIN: 'free_spin',
  }
  const bonusSystemState = ref({})
  const roulette = ref({})
  const winPrize = ref({})

  const getPrizesRoulette = async () => {
    const res = await RouletteService.getPrizes()
    roulette.value.prizes = reBuildPrizesData(res)
  }
  const reBuildPrizesData = (prizes) =>
    prizes.map((prize) => ({
      ...prize,
      get title() {
        const type = this.type
        if (type === ENTITY_PRIZES.COINS) return 'к опыту'
        else if (type === ENTITY_PRIZES.BALANCE) return 'к балансу'
        else if (type === ENTITY_PRIZES.BONUS) return 'к бонусам'
        else if (type === ENTITY_PRIZES.FREE_SPIN)
          return 'к вращениям'
        else return ''
      },
    }))
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
