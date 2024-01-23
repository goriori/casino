<script setup>
import ProfileModule from '@/components/modules/account/modules/profile/ProfileModule.vue'
import BalanceModule from '@/components/modules/account/modules/balance/BalanceModule.vue'
import HistoryBalanceModule from '@/components/modules/account/modules/history-balance/HistoryBalanceModule.vue'
</script>

<template>
  <div class="account-module">
    <div class="account-module-title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M2.66667 32.5C2.66667 32.5 0 32.5 0 29.8333C0 27.1667 2.66667 19.1667 16 19.1667C29.3333 19.1667 32 27.1667 32 29.8333C32 32.5 29.3333 32.5 29.3333 32.5H2.66667Z"
          fill="white"
        />
        <path
          d="M16 16.5C20.4183 16.5 24 12.9183 24 8.5C24 4.08172 20.4183 0.5 16 0.5C11.5817 0.5 8 4.08172 8 8.5C8 12.9183 11.5817 16.5 16 16.5Z"
          fill="white"
        />
      </svg>
      <h3>Личный кабинет</h3>
    </div>
    <div class="account-module-items">
      <ProfileModule />
      <div class="items-middle">
        <BalanceModule />
        <HistoryBalanceModule />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account {
  &-module {
    display: flex;
    flex-direction: column;
    gap: 36px;

    &-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      font-size: 32px;
      color: #fff;
    }

    &-items {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 48px;
    }
  }
}

.items-middle {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
</style>
