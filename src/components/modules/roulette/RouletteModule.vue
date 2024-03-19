<script setup>
import { computed, onMounted, ref } from 'vue'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { is } from 'date-fns/locale'
import { useStateStore } from '@/store/stateStore.js'

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
const segmentStyle = (index) => {
  const totalSegments = bonusStore.roulette.prizes.length
  const rotation = 360 / totalSegments

  return {
    color: '#000',
    transform: `rotate(${rotation * index}deg)`,
  }
}
const onSpinRoulette = async () => {
  startSpin()
    .then(bonusStore.spinRoulette)
    .then(handlerSuccessSpin)
    .catch(handlerErrorSpin)
}

const handlerSuccessSpin = (res) => {
  console.log(res)
  setTimeout(() => {
    stopSpin().then(() => {
      stateStore.globalPopupsModules.winnPrize.visibility = true
      sessionStore.getInfoSession()
    })
  }, 2000)
}
const handlerErrorSpin = (e) => {
  console.log(e)
  setTimeout(
    () =>
      stopSpin().then(() => {
        stateStore.globalPopupMessages.error.errorText =
          'Произошла ошибка при прокрутке колеса. Пожалуйста, попробуйте позже!'
        stateStore.globalPopupMessages.error.visibility = true
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
    <div ref="rouletteRef" class="wheel-of-fortune">
      <div
        :class="['wheel-segment', { coin: prize.type === 'coin' }]"
        v-for="(prize, index) in bonusStore.roulette.prizes"
        :key="index"
        :style="segmentStyle(index)"
      >
        {{ prize.sum }}
      </div>
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
          <img src="/images/roulette/play.png" alt="" @click="onSpinRoulette" />
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
</template>

<style scoped lang="scss">
.roulette {
  &-module {
    width: 100%;
    border-radius: 36px;
    background: #2c2c2c;
    padding: 80px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 90px;
  }

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-count {
    color: #d5a748;
  }
}

.wheel-pay {
  position: relative;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: rgba(30, 30, 30, 0.71);
  padding: 20px;
  border-radius: 36px;

  &.free {
    width: 20%;
  }

  &-icon {
    cursor: pointer;
    max-width: 80px;

    img {
      width: 100%;
    }
  }
}

.wheel-of-fortune {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;

  &.spin {
    animation: spin 1s infinite linear;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}

.wheel-segment {
  width: 100%;
  height: 100%;
  position: absolute;
  clip-path: polygon(0% -50%, 60% 50%, 0% 100%);
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1.5em;
  background-color: #f8f9fa;
  mask: url('/images/masks/slice.png');
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
}

.coin {
  background-color: #d5a748;
}
</style>
