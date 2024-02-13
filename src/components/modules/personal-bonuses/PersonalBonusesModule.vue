<script setup>
import BonusIcon from '@/components/ui/icons/other/BonusIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import BonusCard from '@/components/ui/cards/bonus/BonusCard.vue'
</script>

<template>
  <div class="personal__bonuses">
    <div class="personal__bonuses-title">
      <div class="personal__bonuses-head">
        <BonusIcon />
        <p>Мои бонусы</p>
      </div>
      <div class="personal__bonuses-promo">
        <input type="text" placeholder="Введите промокод" />
        <BaseButton color="white" id="send-promo">
          <p>Применить</p>
        </BaseButton>
      </div>
    </div>
    <div class="personal__bonuses-list">
      <BonusCard v-for="card in 5" :key="card">
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
    justify-content: space-between;
    align-items: flex-start;
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
  }
}
</style>
