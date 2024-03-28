import { ref } from 'vue'

const searchValue = ref('')
const filtersCategory = ref([
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
const filters = ref({
  category: {
    active: false,
    values: filtersCategory,
  },
  providers: {
    active: false,
    values: filtersCategory,
  },
})

// eslint-disable-next-line func-style
export function useData() {
  return {
    filters,
    searchValue,
    filtersCategory,
  }
}