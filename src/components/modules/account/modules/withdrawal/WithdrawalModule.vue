<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
</script>

<template>
  <div class="withdrawal-module">
    <div class="withdrawal-module-title">
      <p>Вывод средств</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
      >
        <path
          d="M0 2.83333C0 1.54467 1.11929 0.5 2.5 0.5H17.5C18.8807 0.5 20 1.54467 20 2.83333V12.1667C20 13.4553 18.8807 14.5 17.5 14.5H2.5C1.11929 14.5 0 13.4553 0 12.1667V2.83333ZM2.5 1.66667C1.80964 1.66667 1.25 2.189 1.25 2.83333V4H18.75V2.83333C18.75 2.189 18.1904 1.66667 17.5 1.66667H2.5ZM18.75 6.33333H1.25V12.1667C1.25 12.811 1.80964 13.3333 2.5 13.3333H17.5C18.1904 13.3333 18.75 12.811 18.75 12.1667V6.33333Z"
          fill="white"
        />
        <path
          d="M2.5 9.83333C2.5 9.189 3.05964 8.66667 3.75 8.66667H5C5.69036 8.66667 6.25 9.189 6.25 9.83333V11C6.25 11.6443 5.69036 12.1667 5 12.1667H3.75C3.05964 12.1667 2.5 11.6443 2.5 11V9.83333Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="withdrawal-module-info">
      <div class="info-item">
        <h4>ID пользователя</h4>
        <input type="text" placeholder="Введите ID" />
      </div>
      <div class="info-item">
        <h4>Банковская карта</h4>
        <input type="text" placeholder="Введите номур банковской карты" />
      </div>
      <div class="info-item">
        <h4>Сумма вывода средств</h4>
        <div class="input-currency">
          <input type="text" placeholder="Введите сумму" />
          <div class="input-currency-target">
            <CurrencyIcon />
            <p>RUB</p>
          </div>
        </div>
      </div>
      <div class="info-item">
        <h4>Дата вывода средств</h4>
        <input type="text" placeholder="Введите дату вывода" />
      </div>
      <div class="withdrawal-module-action">
        <BaseButton color="primary">
          <p class="withdrawal-module-action-text">Вывести средства</p>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.withdrawal {
  &-module {
    width: 100%;
    height: 100%;
    padding: 18px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    background: #1d2345;
    border-radius: 26px;
    font-size: 24px;

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
    }
  }
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
  max-width: 230px;
  margin: 0 auto;

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
