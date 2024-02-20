<script setup>
import { useMethods } from '@/components/modules/replenishment/ReplenishmentModule.events.js'
import { useData } from '@/components/modules/replenishment/ReplenishmentModule.options.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import ReplenishmentScreen from '@/components/modules/replenishment/screens/replenishment-screen/ReplenishmentScreen.vue'
import ReplenishmentCryptocurrencyScreen from '@/components/modules/replenishment/screens/replenishment-cryptocurrency-screen/ReplenishmentCryptocurrencyScreen.vue'
import SumScreen from '@/components/modules/replenishment/screens/sum-screen/SumScreen.vue'
import SelectBankScreen from '@/components/modules/replenishment/screens/select-bank/SelectBankScreen.vue'
import SumTranslationScreen from '@/components/modules/replenishment/screens/sum-translation-screen/SumTranslationScreen.vue'
import ConfirmTranslationScreen from '@/components/modules/replenishment/screens/confirm-translation-screen/ConfirmTranslationScreen.vue'
import MessageScreen from '@/components/modules/replenishment/screens/message-screen/MessageScreen.vue'
import ArrowBackIcon from '@/components/ui/icons/other/ArrowBackIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { onMounted } from 'vue'


const { historyStateManipulate, stateManipulate, stateMessage, stateSum } =
  useData()
const {
  onBack,
  onClose,
  onFinishWithdrawal,
  onSwitchWithdrawalConfirm,
  onSwitchWithdrawalMessage,
  onSwitchWithdrawalReplenishment,
  onSwitchWithdrawalSelectBank,
  onSwitchWithdrawalSum,
  onSwitchWithdrawalSumTranslation,
} = useMethods(historyStateManipulate, stateManipulate, stateMessage, stateSum)

const props = defineProps({
  setting: {
    type: Object,
    required: false,
  },
})
const emits = defineEmits(['close'])
const sessionStore = useSessionStore()
const paymentStore = usePaymentStore()
onMounted(async () => {
  await paymentStore.getRequisiteCards()
  stateManipulate.value = props.setting.targetScreen
})
</script>

<template>
  <div class="popup">
    <div class="popup-bg"></div>
    <div class="popup-withdrawal">
      <div class="popup-withdrawal-navigation">
        <div class="navigation-back">
          <BaseButton
            color="primary"
            outline
            @click="onBack"
            v-if="historyStateManipulate.length !== 0"
          >
            <div class="btn-back-content">
              <ArrowBackIcon />
              <p>Назад</p>
            </div>
          </BaseButton>
        </div>
        <div class="navigation-close" @click="onClose(emits)">
          <CloseIcon />
        </div>
      </div>
      <div class="popup-withdrawal-content">
        <div
          class="popup-withdrawal-balance"
          v-if="
            stateManipulate === 'replenishment' ||
            stateManipulate === 'conclusion'
          "
        >
          <div class="popup-withdrawal-count">
            <p>{{ sessionStore.session.profile?.balance }}</p>
            <span>₽</span>
          </div>
        </div>

        <div class="popup-withdrawal-choice">
          <div
            class="choice-items"
            v-if="
              stateManipulate === 'replenishment' ||
              stateManipulate === 'conclusion'
            "
          >
            <div
              :class="[
                'choice-item ',
                {
                  active: stateManipulate === 'replenishment',
                },
              ]"
              @click="onSwitchWithdrawalReplenishment"
            >
              Пополнение
            </div>
          </div>
          <ReplenishmentScreen
            @method="onSwitchWithdrawalSum"
            v-if="stateManipulate === 'replenishment'"
          />
          <ReplenishmentCryptocurrencyScreen
            @success="onFinishWithdrawal('success-withdrawal')"
            v-if="stateManipulate === 'replenishment-cryptocurrency'"
          />
          <SumScreen
            @replenish="onSwitchWithdrawalSelectBank"
            v-if="stateManipulate === 'sum-screen'"
          />
          <SelectBankScreen
            :sum="stateSum"
            @select-bank="onSwitchWithdrawalSumTranslation"
            v-if="stateManipulate === 'select-bank'"
          />
          <SumTranslationScreen
            :number-card-to="paymentStore.replObject.props"
            :sum="stateSum"
            @success="onSwitchWithdrawalConfirm"
            @error="console.log('error')"
            v-if="stateManipulate === 'sum-translation'"
          />
          <ConfirmTranslationScreen
            :sum="stateSum"
            @success="onSwitchWithdrawalMessage('success-withdrawal')"
            @error="onSwitchWithdrawalMessage('error-withdrawal')"
            v-if="stateManipulate === 'confirm-translation'"
          />
          <MessageScreen
            @close="onClose(emits)"
            :state-message="stateMessage"
            :sum="stateSum"
            v-if="stateManipulate === 'message-translation'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins';

.btn-back-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.popup {
  position: fixed;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: $md4 + px) {
    transform: none;
    top: 0;
    left: 0;
  }

  &-bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(5px);
  }

  &-withdrawal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 456px;
    min-height: 647px;
    border-radius: 26px;
    background: #2c2c2c;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: $md4 + px) {
      max-width: none;
      min-height: auto;
      height: 100%;
      border-radius: 0;
    }

    &-navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border-bottom: 0.5px solid #ccc;
    }

    &-content {
      max-height: 570px;
      overflow-y: auto;
      @media (max-width: $md4 + px) {
        max-height: 90vh;
        height: 100%;
      }
    }

    &-balance {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 36px 38px;
      @media (max-width: $md4 + px) {
        padding: 18px;
      }
    }

    &-count {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 16px 0 17px 0;
      border-radius: 26px;
      background: #1e1e1e;
      font-size: 40px;
      font-weight: 700;
      color: #fff;

      span {
        color: #bbb;
      }
    }
  }
}

.navigation {
  &-back {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 123px;
    max-height: 30px;
  }

  &-close {
    cursor: pointer;
  }
}

.choice {
  &-items {
    color: #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-bottom: 1px solid #ccc;

    div {
      cursor: pointer;
      border: 2px solid transparent;
      transition: 0.15s all ease-in-out;

      &:hover {
        color: #fff;
        border-bottom: 2px solid #1e1e1e;
      }
    }
  }

  &-item {
    padding: 8px;

    &.active {
      color: #fff;
      border-bottom: 2px solid #1e1e1e;
    }
  }
}

.deposit {
  padding: 26px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;

  @media (max-width: $md4 + px) {
    padding: 18px 0;
    gap: 18px;
  }

  &-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    gap: 14px;

    p {
      color: #bbb;
      font-size: 16px;
      font-weight: 400;
    }

    &-pay {
      border-radius: 26px;
      background: #2f3975;
      padding: 16px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      &-content {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 8px;

        h4 {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }

        p {
          font-size: 12px;
          font-weight: 400;
        }
      }
    }

    &-help {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 14px;

      p {
        color: #bbb;
        font-size: 16px;
        font-weight: 400;
      }

      &-items {
        @include no-scroll();
        width: 100%;
        max-width: 380px;
        border-radius: 26px;
        background: #2f3975;
        max-height: 250px;
        overflow-y: scroll;
      }

      &-item {
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;
        padding: 4px 21px 15px 21px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}

.crypto-info {
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
