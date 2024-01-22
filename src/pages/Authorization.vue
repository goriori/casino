<script setup>
import AccountButton from '@/components/ui/buttons/account/AccountButton.vue'
import BalanceButton from '@/components/ui/buttons/balance/BalanceButton.vue'
import CashierButton from '@/components/ui/buttons/cashier/CashierButton.vue'
import WithdrawalButton from '@/components/ui/buttons/withdrawal/WithdrawalButton.vue'
import ProviderButton from '@/components/ui/buttons/provider/ProviderButton.vue'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import BalanceModule from '@/components/modules/balance/BalanceModule.vue'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import ProvidersModule from '@/components/modules/providers/ProvidersModule.vue'
import PopularGameModule from '@/components/modules/popular/PopularGameModule.vue'
import AuthorizationModule from '@/components/modules/authorization/AuthorizationModule.vue'
</script>
<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <AuthorizationModule/>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.page {
  color: #fff;
  &-modules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 48px 28px;
  }
}


</style>