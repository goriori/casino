<script setup>
import BaseCard from '@/components/ui/cards/base/BaseCard.vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Подарок ко дню рожденияд',
  },
  promoName: {
    type: String,
    default: '10 бесплатных вращений',
  },
})
</script>

<template>
  <BaseCard>
    <template #content>
      <div class="promo__permission__card">
        <div class="promo__permission__card-name">{{ name }}</div>
        <div class="promo__permission__card-promo-name">{{ promoName }}</div>
      </div>
    </template>
  </BaseCard>
</template>

<style scoped lang="scss">
.promo__permission__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;

  &-name {
    color: #bbbbbb;
    font-weight: 400;
    font-size: 14px;
  }

  &-promo-name {
    color: #d5a748;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
