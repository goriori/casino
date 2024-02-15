<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { defineAsyncComponent, onMounted } from 'vue'
import MenuModule from '@/components/modules/account/modules/menu/MenuModule.vue'
import PersonalAccountIcon from '@/components/ui/icons/account/PersonalAccountIcon.vue'

const sessionStore = useSessionStore()

const ProfileModule = defineAsyncComponent(() =>
  import('@/components/modules/account/modules/profile/ProfileModule.vue')
)
const BalanceModule = defineAsyncComponent(() =>
  import('@/components/modules/account/modules/balance/BalanceModule.vue')
)
const HistoryBalanceModule = defineAsyncComponent(() =>
  import(
    '@/components/modules/account/modules/history-balance/HistoryBalanceModule.vue'
  )
)
const WithdrawalModule = defineAsyncComponent(() =>
  import('@/components/modules/account/modules/withdrawal/WithdrawalModule.vue')
)

onMounted(() => {
  Promise.all([sessionStore.getInfoSession(), sessionStore.getStatusPay()])
})
</script>

<template>
  <div class="account-module">
    <div class="account-module-title">
      <PersonalAccountIcon color="white" />
      <h3>Личный кабинет</h3>
    </div>
    <div class="account-module-desktop-items">
      <ProfileModule />
      <div class="items-middle">
        <BalanceModule />
        <HistoryBalanceModule />
      </div>
      <WithdrawalModule />
    </div>
    <div class="account-module-mobile-items">
      <MenuModule />
      <BalanceModule />
      <div class="items-middle">
        <ProfileModule />
        <HistoryBalanceModule />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.account {
  &-module {
    display: flex;
    flex-direction: column;
    gap: 36px;

    @media (max-width: $md2 + px) {
      gap: 24px;
    }

    &-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      font-size: 32px;
      color: #fff;

      @media (max-width: $md2 + px) {
        font-size: 24px;
        svg {
          max-width: 28px;
        }
      }
      @media (max-width: $md4 + px) {
        svg {
          max-width: 19px;
        }
        font-size: 20px;
      }
    }

    &-desktop-items {
      display: flex;
      justify-content: center;
      flex: 1 1 auto;
      gap: 48px;

      @media (max-width: 1500px) {
        gap: 24px;
      }
      @media (max-width: $md2 + px) {
        flex-direction: column;
      }
      @media (max-width: $md4 + px) {
        display: none;
      }
    }

    &-mobile-items {
      display: none;
      justify-content: center;
      flex: 1 1 auto;
      gap: 24px;
      flex-direction: column;
      @media (max-width: $md4 + px) {
        display: flex;
      }
    }
  }
}

.items-middle {
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media (max-width: 1500px) {
    gap: 24px;
  }
}
</style>
