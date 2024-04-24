<script setup>
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import BonusIcon from '@/components/ui/icons/balance/BonusIcon.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()
</script>

<template>
  <div class="balance">
    <div class="balance-item">
      <div class="balance-item-name">Основной</div>
      <div class="balance-item-content">
        <CurrencyIcon />
        <p>{{ sessionStore.session.profile?.balance }} ₽</p>
      </div>
    </div>
    <div class="balance-item">
      <div class="balance-item-name">Бонусов</div>
      <div class="balance-item-content">
        <BonusIcon />
        <p>{{ sessionStore.session.profile?.bonus }} ₽</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.balance {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: start;
  align-items: center;
  padding: 12px 0 12px 36px;
  background-color: #d5a748;

  &-item {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
