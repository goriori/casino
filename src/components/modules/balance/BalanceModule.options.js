import { ref } from 'vue'

export const btnActive = ref(false)

export const navigation = [
  {
    id: 1,
    icon: 'account',
    title: 'Личный кабинет',
  },
  {
    id: 2,
    icon: 'score',
    title: 'Пополнение счета',
  },
  {
    id: 3,
    icon: 'conclusion',
    title: 'Вывод средств',
  },
  {
    id: 4,
    icon: 'support',
    title: 'Тех. поддержка',
  },
]
