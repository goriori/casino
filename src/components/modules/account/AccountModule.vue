<script setup>
import { defineAsyncComponent } from 'vue'
import MenuModule from '@/components/modules/account/modules/menu/MenuModule.vue'
import PersonalAccountIcon from '@/components/ui/icons/account/PersonalAccountIcon.vue'
import ProfileStatusModule from '@/components/modules/profile-status/ProfileStatusModule.vue'
import ReferalPromoCodeModule from '@/components/modules/referal-code/ReferalPromoCodeModule.vue'

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

const ExchangePointsModule = defineAsyncComponent(() =>
  import('@/components/modules/exchange-points/ExchangePointsModule.vue')
)
</script>

<template>
  <div class="account-module">
    <div class="account-module-title">
      <div class="title">
        <PersonalAccountIcon color="white" />
        <h3>Личный кабинет</h3>
      </div>

      <div class="account-module-desktop-navigation">
        <MenuModule />
      </div>
    </div>
    <div class="account-module-desktop-items">
      <ProfileModule />
      <div class="items-middle">
        <BalanceModule />
        <HistoryBalanceModule />
      </div>
      <div class="items-right">
        <ExchangePointsModule />
        <ProfileStatusModule />
        <ReferalPromoCodeModule />
      </div>
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

    &-desktop-navigation {
      @media (max-width: $md4 + px) {
        display: none;
      }
    }

    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;
        align-items: center;
        font-size: 32px;
        gap: 16px;
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
    }

    &-desktop-items {
      display: flex;
      justify-content: center;
      flex: 1 1 auto;
      gap: 48px;
      max-height: 730px;

      div:nth-child(3) {
        flex: 1 0 424px;
      }

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

.items-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1500px) {
    gap: 24px;
  }
}
</style>
