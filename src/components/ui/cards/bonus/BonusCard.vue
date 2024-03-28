<script setup>
import InfoIcon from '@/components/ui/icons/other/InfoIcon.vue'

const props = defineProps({
  image: {
    type: String,
    default:
      'https://w.forfun.com/fetch/33/339cc54e2c785ed8cf3335c51a203bc2.jpeg',
  },
  info: {
    type: Object,
    default: {
      time: '1 День',
      title: '10 бесплатных вращений',
    },
  },
})
</script>

<template>
  <div class="card">
    <div class="card-bonus">
      <div class="card-bonus-head">
        <InfoIcon />
      </div>
      <div class="card-bonus-image">
        <img :src="image" alt="" />
      </div>
      <div class="card-bonus-info">
        <div class="card-bonus-time">{{ info.time }}</div>
        <div class="card-bonus-title">{{ info.title }}</div>
      </div>
      <div class="card-bonus-actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  &-bonus {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    background: #2c2c2c;
    padding: 36px 18px;
    border-radius: 36px;

    &-head {
      display: flex;
      justify-content: flex-start;
      align-items: start;
    }

    &-image {
      max-width: 160px;
      max-height: 200px;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      div:nth-child(1) {
        background: rgba(255, 255, 255, 0.1);
        font-size: 14px;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 31px;
      }

      div:nth-child(2) {
        font-size: 18px;
        font-weight: 700;
        color: #d5a748;
      }
    }

    &-actions {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
