<script setup>
import PircentIcon from '@/components/ui/icons/other/PircentIcon.vue'
import StatusCard from '@/components/ui/cards/status/StatusCard.vue'
import PromoPermissionCard from '@/components/ui/cards/promo-permission/PromoPermissionCard.vue'
</script>

<template>
  <div class="loyalty__program">
    <div class="loyalty__program-title">
      <div class="program-title">
        <PircentIcon />
        <p>Программа лояльности</p>
      </div>
      <div class="program-description">
        <p>Играйте чаще и получайте бонусные баллы и другие призы</p>
      </div>
    </div>
    <div class="loyalty__program-status">
      <StatusCard />
    </div>
    <div class="loyalty__program-promo_permission">
      <p>Вам доступно:</p>
      <div class="loyalty__program-promo_permission-list">
        <PromoPermissionCard v-for="card in 5" :key="card" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
    p {
      font-size: 24px;
      font-weight: 400;
      color: #bbbbbb;
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 25px;
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
