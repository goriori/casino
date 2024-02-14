import { ref } from 'vue'
import { randomAllPrise, randomPeoples, randomTopWin } from '@/components/modules/statistics/StatisticsModule.events.js'

export const statistics = ref([
  {
    id: 1,
    image: '/images/statistics/1.png',
    title: 'Топ выйгрыш за сутки',
    value: randomTopWin(),
  },
  {
    id: 2,
    image: '/images/statistics/2.png',
    title: 'Всего разыгрывается',
    value: randomAllPrise(),
  },
  {
    id: 3,
    image: '/images/statistics/3.png',
    title: 'Игроков онлайн',
    value: randomPeoples(),
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
