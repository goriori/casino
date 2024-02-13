<script setup>
import {
  slides,
  statistics,
} from '@/components/modules/statistics/StatisticsModule.options.js'
import BaseSlider from '@/components/ui/sliders/base/BaseSlider.vue'
</script>

<template>
  <div class="statistics_module">
    <div class="statistics_module-slider">
      <BaseSlider :pagination="true" :navigation="true" :images="slides" />
    </div>
    <div class="statistics_module-list">
      <div
        class="list-item"
        v-for="statistic in statistics"
        :key="statistic.id"
      >
        <div class="list-icon">
          <img :src="statistic.image" alt="" />
        </div>
        <div class="list-content">
          <div class="list-title">{{ statistic.title }}</div>
          <div class="list-value">{{ statistic.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.statistics_module {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media (max-width: $md3 + px) {
    flex-direction: column;
  }

  &-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    @media (max-width: $md3 + px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-slider {
    max-width: 1336px;
    min-height: 600px;
    @media (max-width: $md3 + px) {
      max-width: 900px;
      min-height: 400px;
    }
    @media (max-width: $md4 + px) {
      max-width: 650px;
      min-height: 300px;
    }
    @media (max-width: $md5 + px) {
      max-width: 327px;
      min-height: 150px;
    }
  }
}

.list {
  &-item {
    border-radius: 8px;
    padding: 36px 77px 36px 44px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    background: #2c2c2c;
    @media (max-width: $md4 + px) {
      padding: 36px 70px;
      flex-direction: column;
    }
    @media (max-width: $md5 + px) {
      padding: 36px 15px;
      flex-direction: column;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (max-width: $md4 + px) {
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  &-title {
    font-size: 16px;
    color: #BBBBBB;
    @media (max-width: $md4 + px) {
      font-size: 14px;
    }
  }
  &-value {
    font-size: 24px;
    font-weight: 700;
    color: #d5a748;
    @media (max-width: $md4 + px) {
      font-size: 18px;
    }
  }
}
</style>
