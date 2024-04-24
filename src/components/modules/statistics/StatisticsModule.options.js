import { ref } from 'vue'

export const statistics = ref([
  {
    id: 1,
    image: '/images/statistics/1.png',
    title: 'Топ выигрыш за сутки',
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
    title: 'Среднее время выплаты',
    keyValue: 'pay',
  },
])

export const slides = ref([
  {
    id: 1,
    slideName: 'Welcome',
    path: '/images/statistics/slide_1.png',
    srcSet:
      '/images/statistics/slide_1.png 1920w, /images/statistics/slide_1_mb.png 800w',
  },
  {
    id: 2,
    slideName: 'Welcome',
    path: '/images/statistics/slide_2.jpg',
    srcSet: '',
  },
  {
    id: 3,
    slideName: 'Welcome',
    path: '/images/statistics/slide_3.jpg',
    srcSet:
      '/images/statistics/slide_3.jpg 1920w, /images/statistics/slide_3_mb.jpg 800w',
  },
  {
    id: 3,
    slideName: 'Welcome',
    path: '/images/statistics/slide_4.jpg',
    srcSet: '/images/statistics/slide_4.jpg 1920w, /images/statistics/slide_4_mb.jpg 800w,',
  },
])
