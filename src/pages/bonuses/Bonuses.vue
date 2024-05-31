<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'
import { useValidSession } from '@/utils/useValidSession.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import PersonalBonusesModule from '@/components/modules/personal-bonuses/PersonalBonusesModule.vue'
import LoyaltyProgramModule from '@/components/modules/loyalty-program/LoyaltyProgramModule.vue'
import PromocodeModule from '@/components/modules/promocode/PromocodeModule.vue'
import SpinRoulette from '@/components/modules/spin-roulette/SpinRoulette.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import BonusIcon from '@/components/ui/icons/other/BonusIcon.vue'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import { ERRORS } from '@/configs/errors.js'
import { SUCCESS } from '@/configs/success.js'

const stateStore = useStateStore()
const sessionStore = useSessionStore()
const bonusStore = useBonusSystemStore()
const router = useRouter()
const targetBonus = ref(0)
const toBonusAccount = () => {
  if (!sessionStore.session.profile) {
    stateStore.globalPopupsModules.authorization.visibility = true
  } else {
    router.push('/account')
  }
}
const openWithdrawal = () => {
  if (!sessionStore.session.profile) {
    stateStore.globalPopupsModules.authorization.visibility = true
  } else {
    stateStore.globalPopupsModules.replenishment.visibility = true
  }
}
const onExchangeBonus = async () => {
  const { error, success } = stateStore.globalPopupMessages
  try {
    if (sessionStore.session?.profile?.show_out_balance?.current === 0) return
    else {
      await bonusStore.onExchangeBonus()
      return success.show(SUCCESS.SUCCESS_CONVERTATION.MESSAGE)
    }
  } catch (e) {
    const { data } = e.response
    if (data.details !== undefined) return error.show(data.details)
    return error.show(ERRORS.ERROR_SERVER.MESSAGE)
  }
}
onMounted(async () => {
  useValidSession()
  await sessionStore.getStatusPay()
})
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-container container">
      <section
        class="page-preview"
        v-if="sessionStore.session.history?.length === 0"
      >
        <h2>Пополни счет <span>впервые</span> и получи дополнительно</h2>
        <img src="/images/bonuses/percent.png" alt="" />
        <div class="preview-actions">
          <BaseButton color="white" id="toBonusAccount" @click="toBonusAccount">
            <p>К БОНУСНОМУ СЧЕТУ!</p>
          </BaseButton>
          <BaseButton id="toWithdrawal" @click="openWithdrawal">
            <p>Пополнить счет</p>
          </BaseButton>
        </div>
      </section>
      <section class="page-modules">
        <!--        <PersonalBonusesModule />-->
        <div class="modules-middle">
          <PromocodeModule />
          <SpinRoulette />
        </div>
        <!--        <LoyaltyProgramModule />-->
      </section>
      <section class="page-about">
        <div class="bonus">
          <div class="bonus-title">
            <BonusIcon />
            <h3>Бонусная система</h3>
          </div>
          <div class="bonus-description">
            <p>
              Пополняй счёт и получай дополнительные бонусы.
              Выполни условия акции и обменивай их на реальные рубли.
              <br />
              Для обмена бонусных денег необходимо отыграть их х45, чтобы
              появилась возможность перевести на основной счет
            </p>
            <p id="note">
              <strong>
                Примечание: При следующем депозите неотыгранный бонус
                обнуляется, новый применяется автоматически.
              </strong>
            </p>
          </div>
        </div>
        <div class="exchange">
          <article class="exchange-bonus">
            <h4 class="exchange-title">
              Вы отыграли:
              <mark
                >{{ sessionStore.session?.profile?.show_out_balance?.current }}
              </mark>
            </h4>
            <form @submit.prevent class="exchange-form">
              <div class="exchange-counts">
                <span class="count-start">0</span>
                <span class="count-value">{{
                  sessionStore.session?.profile?.show_out_balance.current
                }}</span>
                <span class="count-end">{{
                  sessionStore.session?.profile?.show_out_balance.target
                }}</span>
              </div>
              <input
                type="range"
                min="0"
                :max="sessionStore.session?.profile?.show_out_balance.target"
                :value="sessionStore.session?.profile?.show_out_balance.current"
                class="exchange-range"
              />
              <BaseButton
                :disabled="
                  !sessionStore.session?.profile?.show_out_balance
                    ?.show_exchange_button
                "
                @click="onExchangeBonus"
              >
                Обменять
              </BaseButton>
            </form>
          </article>
        </div>
        <div class="referal">
          <div class="referal-title">
            <BonusIcon />
            <h3>Реферальная система</h3>
          </div>
          <div class="referal-description">
            <p>
              Поделись своим реферальным промокодом с другом, который ещё не
              играл у нас и получи 10% от его первого депозита на свой баланс.
            </p>
            <p>
              Друг должен указать промокод при первом пополнении баланса. Друг
              получит приветственный бонус в размере +75% бонусных рублей к
              депозиту.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
@import 'Bonuses';

.page-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
}

.bonus,
.referal {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 32px;
    gap: 10px;
    @media (max-width: $md4 + px) {
      font-size: 20px;
    }
  }

  &-description,
  p {
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: #bbbbbb;
    font-weight: 400;
    font-size: 32px;
    @media (max-width: $md4 + px) {
      font-size: 16px;
    }
  }
}

.exchange {
  &-bonus {
    width: 100%;
    max-width: 456px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #2c2c2c;
    padding: 20px;
    border-radius: 36px;
  }

  &-counts {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    font-weight: 400;
    font-size: 32px;
    color: #bbbbbb;

    mark {
      background: none;
      font-weight: 700;
      color: #d5a848;
      font-size: 20px;
    }
  }

  &-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
  }

  &-range {
    width: 100%;
    border-radius: 36px;
    -webkit-appearance: none;
    pointer-events: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 36px;
      width: 16px;
      cursor: pointer;
      margin: -3px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 14px;
      width: 14px;
      border-radius: 100%;
      background: #d5a848;
      cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      background: rgba(204, 204, 204, 0.5);
      border-radius: 36px;
    }
  }
}
</style>
