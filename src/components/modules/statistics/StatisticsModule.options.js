import { ref } from 'vue'


export const statistics = ref([
  {
    id: 1,
    image: '/images/statistics/1.png',
    title: 'Топ выйгрыш за сутки',
    keyValue: 'top',
  },
  {
    id: 2,
    image: '/images/statistics/2.png',
    title: 'Всего разыгрывается',
    keyValue: 'total',
  },
  {
    id: 3,
    image: '/images/statistics/3.png',
    title: 'Игроков онлайн',
    keyValue: 'online',
  },
  {
    id: 4,
    image: '/images/statistics/4.png',
    title: 'Среднее время вылаты',
    keyValue: 'pay',
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
    path: '/images/statistics/slide_2.jpg',
  },
  {
    id: 3,
    slideName: 'Welcome',
    path: '/images/statistics/slide_3.jpg',
  },
])
