import { onMounted, onUnmounted, ref } from 'vue'

export const useReloadInterval = () => {
  const reloadInterval = ref(null)

  const startReload = () => {
    reloadInterval.value = setInterval(() => {
      location.reload()
    }, 180000) // 180000 ms = 3 min
  }

  const stopReload = () => {
    clearInterval(reloadInterval.value)
  }

  onMounted(() => {
    startReload()
  })

  onUnmounted(() => {
    clearInterval(reloadInterval.value)
  })
  return {
    stopReload,
  }
}
