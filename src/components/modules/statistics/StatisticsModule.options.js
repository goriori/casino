import { ref } from 'vue'

export const statistics = ref([
  {
    id: 1,
    image: '/images/statistics/1.png',
    title: 'Топ выйгрыш за сутки',
    value: '25 000 $',
  },
  {
    id: 2,
    image: '/images/statistics/2.png',
    title: 'Всего разыгрывается',
    value: '1 125 000 $',
  },
  {
    id: 3,
    image: '/images/statistics/3.png',
    title: 'Игроков онлайн',
    value: '784',
  },
  {
    id: 4,
    image: '/images/statistics/4.png',
    title: 'Среднее время вылаты',
    value: '5 мин',
  },
])

export const slides = ref([
  {
    id: 1,
    slideName: 'Welcome',
    path: '/images/statistics/slide_1.png',
  },
  {
    id: 2,
    slideName: 'Welcome',
    path: '/images/statistics/slide_1.png',
  },
  {
    id: 3,
    slideName: 'Welcome',
    path: '/images/statistics/slide_1.png',
  },
])
