<script setup>
import BaseCard from '@/components/ui/cards/base/BaseCard.vue'
import SeeMoreIcon from '@/components/ui/icons/other/SeeMoreIcon.vue'
</script>

<template>
  <BaseCard class="card-see_more">
    <template #content>
      <SeeMoreIcon color="#d5a848" />
      <p>Посмотреть еще</p>
    </template>
  </BaseCard>
</template>

<style scoped lang="scss">
::v-deep(.card-content) {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  font-size: 12px;
}

.card-see_more {
  cursor: pointer;
  color: #d5a848;
  background-color: #1e1e1e;
  border-radius: 4px;
  padding: 0;
  transition: 0.3s all ease-in-out;
  &:active {
    opacity: 0.6;
  }
}
</style>
