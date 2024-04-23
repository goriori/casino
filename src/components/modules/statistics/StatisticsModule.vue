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
      <BaseSlider
        :pagination="true"
        :navigation="true"
        :images="slides"
        autoplay
      />
    </div>
    <div class="statistics_module-list">
      <div
        class="list-item"
        v-for="statistic in statistics"
        :key="statistic.id"
      >
        <div class="list-icon">
          <img :src="statistic.image"  alt="" />
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
@import 'StatisticsModule';
</style>
