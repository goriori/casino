<script setup>
import { onMounted, ref } from 'vue'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import CursorWheelIcon from '@/components/ui/icons/roulette/CursorWheelIcon.vue'
import { ERRORS } from '@/configs/errors.js'

const props = defineProps({
  isPopup: {
    type: Boolean,
    default: false,
  },
})
const bonusStore = useBonusSystemStore()
const sessionStore = useSessionStore()
const stateStore = useStateStore()
const rouletteRef = ref(null)
const isSpin = ref(false)
const emits = defineEmits(['close'])
const onSpinRoulette = async () => {
  startSpin()
    .then(bonusStore.spinRoulette)
    .then(handlerSuccessSpin)
    .catch(handlerErrorSpin)
}
const handlerSuccessSpin = (res) => {
  setTimeout(() => {
    stopSpin().then(() => {
      stateStore.globalPopupsModules.winnPrize.visibility = true
      sessionStore.getInfoSession()
    })
  }, 2000)
}
const handlerErrorSpin = (e) => {
  setTimeout(
    () =>
      stopSpin().then(() => {
        stateStore.globalPopupMessages.error.show(ERRORS.ERROR_SERVER.MESSAGE)
        stateStore.globalPopupMessages.error.close()
      }),
    2000
  )
}
const startSpin = async () => {
  if (rouletteRef.value) {
    rouletteRef.value.classList.add('spin')
    isSpin.value = true
  }
}
const stopSpin = async () => {
  if (rouletteRef.value) {
    rouletteRef.value.classList.remove('spin')
    isSpin.value = false
  }
}
onMounted(async () => {
  await bonusStore.getPrizesRoulette()
})
</script>

<template>
  <div class="roulette-module">
    <div class="roulette-title">
      <h3>
        Бесплатных вращений:
        <span class="roulette-count">{{
          sessionStore.session?.profile?.free_spins || 0
        }}</span>
      </h3>
      <CloseIcon @click="emits('close')" v-if="isPopup" />
    </div>
    <div class="wheel">
      <div class="wheel-of-cursor">
        <CursorWheelIcon />
      </div>
      <div ref="rouletteRef" class="wheel-of-fortune">
        <img src="/images/roulette/wheel.svg" alt="wheel" />
        <ul class="wheel-prizes">
          <li v-for="prize in bonusStore.roulette.prizes" :key="prize.id">
            <p>+{{ prize.sum }}</p>
            <strong
              ><p>{{ prize.title }}</p></strong
            >
          </li>
        </ul>
        <div
          :class="[
            'wheel-pay',
            {
              free: sessionStore.session.profile.free_spins > 0,
            },
          ]"
          v-if="!isSpin"
        >
          <div class="wheel-pay-icon">
            <img
              src="/images/roulette/play.png"
              alt=""
              @click="onSpinRoulette"
            />
          </div>
          <div
            class="wheel-pay-title"
            v-if="sessionStore.session.profile.free_spins === 0"
          >
            <strong><p>Вращение платное</p></strong>
            <p>350 Р будет снято с вашего счета</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'RouletteModule';
</style>
