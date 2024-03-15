<script setup>
import PircentIcon from '@/components/ui/icons/other/PircentIcon.vue'
import StatusCard from '@/components/ui/cards/status/StatusCard.vue'
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
@import '@/assets/scss/variables';

.loyalty__program {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-title {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &-status {
    max-width: 572px;
  }

  &-promo_permission {
    display: flex;
    flex-direction: column;
    gap: 40px;

    h2 {
      display: flex;
      align-items: center;
      gap: 15px;
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
}

.program {
  &-title {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 32px;
    font-weight: 700;
  }

  &-description {
    font-size: 18px;
    font-weight: 400;
    color: #bbbbbb;
  }
}
</style>
