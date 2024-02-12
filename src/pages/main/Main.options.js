import { ref } from 'vue'

export const startItems = ref([
  {
    id: 1,
    title: 'Регистрируйтесь',
    img: '/images/how_start/1.svg',
    description:
      'Вам понадобятся только номер мобильного или аккаунт в телеграм',
  },
  {
    id: 2,
    title: 'Пополняйте депозит',
    img: '/images/how_start/2.svg',
    description: 'У нас доступны различные способы для пополнения счета',
  },
  {
    id: 3,
    title: 'Получите бонусы',
    img: '/images/how_start/3.svg',
    description:
      'При регистрации мы начислим вам специальные бонусы к депозиту',
  },
  {
    id: 4,
    title: 'Играйте',
    img: '/images/how_start/4.svg',
    description:
      'Выбирайте понравившиеся слоты и зарабатывайте реальные деньги',
  },
  {
    id: 5,
    title: 'Заберите выйгрыш',
    img: '/images/how_start/5.svg',
    description:
      'Деньги доступны для вывода сразу после отображения на счету игрока',
  },
])
