<script setup>
import {
  statusTranslation,
  withdrawalForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import { onSendWithdrawal } from '@/components/modules/account/modules/withdrawal/WithdrawalModule.events.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import CardIcon from '@/components/ui/icons/other/CardIcon.vue'

const emits = defineEmits(['success', 'error'])
</script>

<template>
  <div class="withdrawal-module">
    <div class="withdrawal-module-title">
      <p>Вывод средств</p>
      <CardIcon />
    </div>
    <div class="withdrawal-module-info">
      <div class="info-item">
        <h4>Банковская карта</h4>
        <input
          type="text"
          placeholder="Введите номер банковской карты"
          v-model="withdrawalForm.card"
        />
      </div>
      <div class="info-item">
        <h4>Сумма вывода средств</h4>
        <div class="input-currency">
          <input
            type="number"
            placeholder="Введите сумму. Мин. 1000"
            min="1000"
            max="1000000000"
            v-model="withdrawalForm.sum"
          />
          <div class="input-currency-target">
            <CurrencyIcon />
            <p>RUB</p>
          </div>
        </div>
      </div>
      <div class="info-item">
        <h4>Дата вывода средств</h4>
        <input
          type="date"
          placeholder="Введите дату вывода"
          v-model="withdrawalForm.date"
        />
      </div>
      <div class="withdrawal-module-action">
        <BaseButton color="primary" @click="onSendWithdrawal">
          <p class="withdrawal-module-action-text">Вывести средства</p>
        </BaseButton>
      </div>
    </div>
    <div class="withdrawal-module-alerts">
      <Transition name="fade">
        <div
          class="withdrawal-module-alert"
          id="alert-success"
          v-if="statusTranslation === 'success'"
          @click="emits('success')"
        >
          Оплачено
        </div>
      </Transition>
      <Transition name="fade">
        <div
          class="withdrawal-module-alert"
          id="alert-error"
          @click="emits('error')"
          v-if="statusTranslation === 'error'"
        >
          Ошибка
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.withdrawal {
  &-module {
    position: relative;
    width: 100%;
    padding: 18px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    background: #1d2345;
    border-radius: 26px;
    font-size: 24px;

    @media (max-width: 1500px) {
      padding: 18px;
    }

    @media (max-width: $md2 + px) {
      gap: 24px;
      font-size: 20px;
    }

    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      color: #fff;
      font-weight: 600;
    }

    &-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 36px;
      @media (max-width: $md2 + px) {
        gap: 24px;
      }
    }

    &-alerts {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }

    &-alert {
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      border-radius: 0 0 26px 26px;
      padding: 25px 0;
    }
  }
}

#alert-error {
  background: #ff3939;
}

#alert-success {
  background: #45cc3a;
}

.info {
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    h4 {
      color: #bbb;
      font-weight: 400;
      font-size: 24px;
      @media (max-width: 1500px) {
        font-size: 20px;
      }
    }

    input {
      width: 100%;
      font-size: 14px;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #5570fb;
    }
  }
}

.withdrawal-module-action {
  max-width: 260px;
  margin: 0 auto;

  @media (max-width: $md4 + px) {
    max-width: none;
    width: 100%;
  }

  &-text {
    color: #fff;
  }
}

.input-currency {
  display: flex;

  input {
    border-radius: 6px 0 0 6px;
  }

  &-target {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #fff;
    padding: 9px 6px;
    border-radius: 0px 6px 6px 0px;
    background: #5570fb;
    font-size: 14px;
    transition: 0.15s all ease-in-out;

    &:hover {
      background: #8a55fb;
    }
  }
}
</style>
