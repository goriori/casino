import { ref } from 'vue'

export const alertMessage = ref('none')

export const isLoad = ref(true)

export const isLoadContent = ref(false)

export const isShowAll = ref(false)
export const searchValue = ref('')
export const filtersCategory = ref([
  {
    id: 1,
    title: 'Популярные',
  },
  {
    id: 2,
    title: 'Новинки',
  },
  {
    id: 3,
    title: 'Самый большой приз',
  },
  {
    id: 4,
    title: 'Рулетка',
  },
  {
    id: 5,
    title: 'Популярные',
  },
  {
    id: 6,
    title: 'Новинки',
  },
  {
    id: 7,
    title: 'Самый большой приз',
  },
  {
    id: 8,
    title: 'Рулетка',
  },
])
