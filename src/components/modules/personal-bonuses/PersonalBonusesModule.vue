<script setup>
import BonusIcon from '@/components/ui/icons/other/BonusIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import BonusCard from '@/components/ui/cards/bonus/BonusCard.vue'
import { ref } from 'vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'


</script>

<template>
  <div class="personal__bonuses">
    <div class="personal__bonuses-title">
      <div class="personal__bonuses-head">
        <BonusIcon />
        <p>Мои бонусы</p>
      </div>
    </div>

    <div class="personal__bonuses-list">
      <BonusCard v-for="card in 5" :key="card" image="/images/roulette/prizes/bonus.png">
        <template #actions>
          <BaseButton color="primary" id="use-promo">
            <p>Использовать</p>
          </BaseButton>
        </template>
      </BonusCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

#use-promo {
  max-width: 137px;
  max-height: 33px;

  p {
    color: #fff;
    font-size: 14px;
  }
}

#send-promo {
  p {
    color: #d5a748;
  }
}

.personal__bonuses {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-title {
    display: flex;
    align-items: flex-start;
    @media (max-width: $md4 + px) {
      flex-direction: column;
      gap: 32px;
    }
  }

  &-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    font-size: 32px;
    font-weight: 700;
  }

  &-promo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 75px;
    padding: 28px;
    background: #d5a748;
    border-radius: 16px;
    color: #fff;
    flex: 1 1;
    max-width: 587px;
    @media (max-width: $md4 + px) {
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }

    input {
      background: none;
      border-bottom: 1px solid white;
      color: #fff;
      font-size: 20px;
      padding: 0 0 16px 0;

      &::placeholder {
        color: #fff;
      }
    }
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    @media (max-width: $md3 + px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $md4 + px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $md5 + px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
