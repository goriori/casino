import { defineStore } from 'pinia'
import { ref } from 'vue'
import SettingService from '@/API/settings/settingService.js'

export const useSettingsStore = defineStore('settingsStore', () => {
  const settings = ref({})
  const getSettings = async () => {
    const response = await SettingService.getSettings()
    settings.value = { ...response }
  }
  return {
    settings,
    getSettings,
  }
})
