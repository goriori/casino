<script setup>
import {
  slides,
  statistics,
} from '@/components/modules/statistics/StatisticsModule.options.js'
import BaseSlider from '@/components/ui/sliders/base/BaseSlider.vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import { computed, onMounted, ref } from 'vue'

const settingStore = useSettingsStore()

const load = computed(() => {
  if (settingStore.app.statistics) return false
  else return true
})

onMounted(() => {
  Promise.all([settingStore.getStatistics()])
})
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
          <div class="list-value" v-if="!load">
            {{ settingStore.app.statistics[statistic.keyValue] }}
          </div>
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
  gap: 32px;

  @media (max-width: $md1 + px) {
    flex-direction: column;
  }

  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    @media (max-width: $md1 + px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-slider {
    max-height: 600px;
    ::v-deep(.splide__track ) {
      height: 100%;
    }

    ::v-deep(.splide) {
      height: 100%;
    }

    ::v-deep(.slider) {
      height: 100%;
    }
    @media (max-width: $md1 + px) {
      width: 100%;
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
    color: #bbbbbb;
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
