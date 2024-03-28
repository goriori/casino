import { ref } from 'vue'
import { useStateStore } from '@/store/stateStore.js'

const desktopLinks = ['replenishment', 'logout']
const mobileLinks = ['replenishment', 'conclusion', 'logout']
const accountMenu = ref([
  {
    id: 1,
    icon: 'score',
    title: 'Пополнение счета',
    name: 'replenishment',
    visibility: false,
    handler: function () {
      const stateStore = useStateStore()
      stateStore.globalPopupsModules.replenishment.visibility = true
    },
  },
  {
    id: 2,
    icon: 'conclusion',
    title: 'Вывод средств',
    name: 'conclusion',
    visibility: false,
    handler: function () {
      const stateStore = useStateStore()
      stateStore.globalPopupsModules.conclusion.visibility = true
    },
  },
  {
    id: 3,
    icon: 'logout',
    title: 'Выход',
    name: 'logout',
    visibility: false,
    handler: async function () {
      await sessionStorage.clear()
      location.reload()
    },
  },
])

export function useData() {
  return {
    accountMenu,
    desktopLinks,
    mobileLinks
  }
}
