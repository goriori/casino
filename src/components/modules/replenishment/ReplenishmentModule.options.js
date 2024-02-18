import { ref } from 'vue'

const stateManipulate = ref('replenishment')
const historyStateManipulate = ref([])

const stateMessage = ref('none')

const stateSum = ref(0)

export function useData() {
  return {
    stateManipulate,
    historyStateManipulate,
    stateSum,
    stateMessage,
  }
}
