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
    </div>

    <div class="personal__bonuses-list">
      <BonusCard
        v-for="card in 5"
        :key="card"
        image="/images/roulette/prizes/bonus.png"
      >
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
@import 'PersonalBonusesModule';
</style>
