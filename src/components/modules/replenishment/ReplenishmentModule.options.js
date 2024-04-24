import { ref } from 'vue'


export function useData() {
  const stateManipulate = ref('replenishment')
  const historyStateManipulate = ref([])
  const stateMessage = ref('none')
  const stateSum = ref(0)
  return {
    stateManipulate,
    historyStateManipulate,
    stateSum,
    stateMessage,
  }
}
