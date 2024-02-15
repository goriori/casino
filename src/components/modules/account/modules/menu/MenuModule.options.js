import { ref } from 'vue'
import { useStateStore } from '@/store/stateStore.js'

export const accountMenu = ref([
  {
    id: 1,
    icon: 'score',
    title: 'Пополнение счета',
    handler: function () {},
  },
  {
    id: 2,
    icon: 'conclusion',
    title: 'Вывод средств',
    handler: function () {
      const stateStore = useStateStore()
      stateStore.globalPopupsModules.replenishment.visibility = true
    },
  },
  {
    id: 3,
    icon: 'logout',
    title: 'Выход',
    handler: async function () {
      await sessionStorage.clear()
      location.reload()
    },
  },
])