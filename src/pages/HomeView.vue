<script setup>
import AccountButton from '@/components/ui/buttons/account/AccountButton.vue'
import BalanceButton from '@/components/ui/buttons/balance/BalanceButton.vue'
import CashierButton from '@/components/ui/buttons/cashier/CashierButton.vue'
import WithdrawalButton from '@/components/ui/buttons/withdrawal/WithdrawalButton.vue'
import ProviderButton from '@/components/ui/buttons/provider/ProviderButton.vue'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
</script>
<template>
  <div class="page">
    <div class="buttons">
      <div class="buttons-account">
        <AccountButton name="personal" />
        <AccountButton name="signin" />
        <AccountButton name="logout" />
      </div>
      <div class="buttons-balance">
        <BalanceButton />
      </div>
      <div class="buttons-balance">
        <CashierButton />
      </div>
      <div class="buttons-withdrawal">
        <WithdrawalButton />
      </div>
      <div class="buttons-provider">
        <ProviderButton />
      </div>
    </div>
    <div class="cards">
      <GameCard/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  .buttons {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-account {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-balance {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-withdrawal {
      display: flex;
      align-items: center;
    }
    &-provider {
      display: flex;
      align-items: center;
    }
  }
}
</style>
