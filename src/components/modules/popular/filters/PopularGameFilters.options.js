import { computed, ref } from 'vue'

const searchValue = ref('')
const filters = ref({
  providers: {
    active: false,
    values: [],
  },
})

const colorSearchIcon = computed(() => {
  return searchValue.value.length > 0 ? '#D5A848' : 'white'
})

// eslint-disable-next-line func-style
export function useData() {
  return {
    filters,
    searchValue,
    colorSearchIcon,
  }
}
