<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { computed, ref } from 'vue'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import { useStateStore } from '@/store/stateStore.js'
import InfoTooltip from '@/components/ui/tooltips/info/InfoTooltip.vue'
import ProfileStatusTooltipMessage from '@/components/modules/tooltip-messages/profile-status/ProfileStatusTooltipMessage.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { ERRORS } from '@/configs/errors.js'
import { SUCCESS } from '@/configs/success.js'

const bonusSystemStore = useBonusSystemStore()
const sessionStore = useSessionStore()
const stateStore = useStateStore()
const bonusOut = ref(0)
const validBonusOut = async () => {
  if (bonusOut.value < 10) throw false
  return true
}
const onExchange = () => {
  validBonusOut()
    .then(() => bonusSystemStore.onExchangeCoins(bonusOut.value))
    .then(() => {
      stateStore.globalPopupMessages.success.show(
        SUCCESS.SUCCESS_EXCHANGE_COIN.MESSAGE
      )
    })
    .catch((e) => {
      console.log(e)
      stateStore.globalPopupMessages.error.show(ERRORS.ERROR_SERVER.MESSAGE)
    })
    .finally(() => (bonusOut.value = 0))
}

const convertateCoins = computed(() => {
  const ratioAccountTarget = sessionStore.session.profile?.stair_status?.ratio
  return bonusOut.value / ratioAccountTarget
})
</script>

<template>
  <div class="exchange__points-module">
    <h2>Обмен баллов</h2>
    <div class="exchange__points-card">
      <InfoTooltip :message="ProfileStatusTooltipMessage" />
      <form class="exchange__points-form" @submit.prevent>
        <h3 class="form-title">
          Ваши баллы: <span>{{ bonusSystemStore.bonusSystemState.coins }}</span>
        </h3>
        <div class="form-links">
          <p>История платежей</p>
        </div>
        <div class="form-field">
          <input
            type="number"
            placeholder="Количество баллов"
            v-model="bonusOut"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
          >
            <path
              d="M1.93365 13L7.93365 7L1.93365 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ convertateCoins }} Р</p>
        </div>
        <BaseButton id="exchange_button" @click="onExchange">
          <p>Обменять</p>
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
#exchange_button {
  p {
    color: #fff;
  }
}

.exchange__points {
  &-module {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-card {
    display: flex;
    gap: 36px;
    padding: 20px;
    background: #2c2c2c;
    border-radius: 26px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  }

  &-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1 0 350px;
  }
}

.form {
  &-title {
    font-size: 24px;

    span {
      color: #d5a848;
    }
  }

  &-links {
    p {
      cursor: pointer;
      color: #bbbbbb;
      font-size: 14px;
      text-decoration: underline;
    }
  }

  &-field {
    display: flex;
    align-items: center;
    gap: 30px;

    input {
      border-radius: 36px;
      max-width: 200px;
      padding: 10px 20px;
      font-size: 14px;
    }

    p {
      color: #d5a748;
      font-size: 32px;
      max-width: 80px;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
