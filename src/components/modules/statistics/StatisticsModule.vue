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
.statistics_module {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  &-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  &-slider {
    max-width: 1336px;
    min-height: 600px;
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
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
