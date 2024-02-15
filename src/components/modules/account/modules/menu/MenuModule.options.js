import { ref } from 'vue'

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
    handler: function () {},
  },
  {
    id: 3,
    icon: 'logout',
    title: 'Выход',
    handler: function () {},
  },
])