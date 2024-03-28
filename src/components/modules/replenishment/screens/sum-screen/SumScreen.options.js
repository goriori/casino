import { computed, ref } from 'vue'

const isValid = ref(false)
const timeClosePopup = ref(15000)
const balance = ref(0)
const promo = ref('')
const bonusBalance = computed(() => {
  return (balance.value / 100) * 50
})

export function useData() {
  return {
    isValid,
    timeClosePopup,
    balance,
    promo,
    bonusBalance,
  }
}
