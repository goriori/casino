<script setup>
import BaseCard from '@/components/ui/cards/base/BaseCard.vue'
import AccountIcon from '@/components/ui/icons/other/AccountIcon.vue'
</script>

<template>
  <BaseCard>
    <template #content>
      <div class="status">
        <div class="status-info">
          <div class="info-icon">
            <AccountIcon />
          </div>
          <div class="info-content">
            <p>Ваш статус:</p>
            <p>Premium</p>
          </div>
        </div>
        <div class="status-bar"></div>
      </div>
    </template>
  </BaseCard>
</template>

<style scoped lang="scss">
.status {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 405px;
  width: 100%;

  &-info {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &-bar {
    position: relative;
    border: 4px solid rgba(204, 204, 204, 0.5);
    border-radius: 20px;

    &:before {
      content: ' ';
      position: absolute;
      top: -3px;
      left: -3px;
      width: 80%;
      border-radius: 20px;
      border: 3px solid #d5a748;
    }
    &:after {
      position: absolute;
      content: '25/100';
      top: 10px;
      right: 0;
      font-weight: 400;
      font-size: 12px;
      color: #bbbbbb;
    }
  }
}

.info {
  &-content {
    display: flex;
    gap: 10px;

    p:nth-child(1) {
      font-size: 14px;
      font-weight: 400;
      color: #bbbbbb;
    }

    p:nth-child(2) {
      font-size: 18px;
      font-weight: 700;
      color: #d5a748;
    }
  }
}
</style>
