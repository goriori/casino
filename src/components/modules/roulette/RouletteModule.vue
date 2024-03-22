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
@import '@/assets/scss/variables';

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
    @media (max-width: $md4 + px) {
      padding: 20px;
    }
  }

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: $md4 + px) {
      font-size: 16px;
    }
  }

  &-count {
    color: #d5a748;
  }
}

.wheel-pay {
  width: 100%;
  position: absolute;
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
  @media (max-width: $md4 + px) {
    padding: 10px;
  }

  &.free {
    width: 20%;
  }

  &-title {
    max-width: 260px;
    @media (max-width: $md4 + px) {
      font-size: 10px;
    }
  }

  &-icon {
    cursor: pointer;
    max-width: 80px;
    @media (max-width: $md4 + px) {
      max-width: 40px;
    }

    img {
      width: 100%;
    }
  }
}

.wheel {
  position: relative;

  &-of-cursor {
    position: absolute;
    display: block;
    z-index: 10;
    left: 50%;
    top: -10px;
    transform: translate(-50%, 0);
  }

  &-of-fortune {
    position: relative;
    max-width: 500px;
    max-height: 500px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

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

  &-prizes {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    color: #000;
    text-align: center;

    li {
      position: absolute;
      display: block;
      font-size: 16px;
      @media (max-width: $md5 + px) {
        font-size: 7px;
      }

      &:nth-child(1) {
        left: 150px;
        top: 50px;
        @media (max-width: $md5+px) {
          left: 80px;
        }
        @media (max-width: 390px) {
          left: 60px;
          top: 30px;
        }
      }

      &:nth-child(2) {
        left: 290px;
        top: 70px;
        @media (max-width: $md5+px) {
          left: 140px;
          top: 50px;
        }
        @media (max-width: 390px) {
          left: 120px;
          top: 35px;
        }
      }

      &:nth-child(3) {
        left: 380px;
        top: 180px;
        @media (max-width: $md5+px) {
          left: 180px;
          top: 100px;
        }
        @media (max-width: 390px) {
          left: 160px;
          top: 80px;
        }
      }

      &:nth-child(4) {
        left: 340px;
        top: 320px;
        @media (max-width: $md5+px) {
          left: 185px;
          top: 170px;
        }
        @media (max-width: 390px) {
          left: 150px;
          top: 150px;
        }
      }

      &:nth-child(5) {
        left: 190px;
        top: 390px;
        @media (max-width: $md5+px) {
          left: 115px;
          top: 200px;
        }
        @media (max-width: 390px) {
          left: 70px;
          top: 190px;
        }
      }

      &:nth-child(6) {
        left: 80px;
        top: 330px;
        @media (max-width: $md5+px) {
          left: 50px;
          top: 180px;
        }
        @media (max-width: 390px) {
          left: 30px;
          top: 150px;
        }
      }

      &:nth-child(7) {
        left: 30px;
        top: 190px;
        @media (max-width: $md5+px) {
          left: 20px;
          top: 110px;
        }
        @media (max-width: 390px) {
          left: 15px;
          top: 90px;
        }
      }
    }
  }
}
</style>
