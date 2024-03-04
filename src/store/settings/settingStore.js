import { defineStore } from 'pinia'
import { ref } from 'vue'
import SettingService from '@/API/settings/settingService.js'

export const useSettingsStore = defineStore('settingsStore', () => {
  const settings = ref({})
  const app = ref({})
  const getSettings = async () => {
    const response = await SettingService.getSettings()
    settings.value = { ...response }
  }
  const getStatistics = async () => {
    const response = await SettingService.getStatistics()
    app.value.statistics = { ...response }
  }
  return {
    app,
    settings,
    getSettings,
    getStatistics
  }
})
