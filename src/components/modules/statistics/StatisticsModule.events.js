import { onMounted } from 'vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'

const getRandomCount = (strong) => Math.floor(Math.random() * strong)
export const randomPeoples = () => getRandomCount(10000)
export const randomAllPrise = () => `${getRandomCount(10000)} $`
export const randomTopWin = () => `${getRandomCount(10000)} $`


