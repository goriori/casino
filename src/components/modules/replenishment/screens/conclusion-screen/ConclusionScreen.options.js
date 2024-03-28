import { ref } from 'vue'

const cnclsnForm = ref({
  card: '',
  sum: '',
  date: '',
  user_id: '',
})

const statusTranslation = ref(false)

export function useData() {
  return {
    cnclsnForm,
    statusTranslation,
  }
}
