<script setup>
import PromoPermissionCard from '@/components/ui/cards/promo-permission/PromoPermissionCard.vue'
import BonusIcon from '@/components/ui/icons/other/BonusIcon.vue'
</script>

<template>
  <div class="loyalty__program">
    <div class="loyalty__program-promo_permission">
      <h2>
        <BonusIcon />
        Вам доступно:
      </h2>
      <div class="loyalty__program-promo_permission-list">
        <PromoPermissionCard v-for="card in 5" :key="card" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'LoyatlyProgramModule';
</style>
