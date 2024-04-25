import { ref, onMounted, onUnmounted } from 'vue'

export const useDeviceType = () => {
  const isMobile = ref(false)

  const checkDeviceType = () => {
    isMobile.value =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    console.log('isMobile', isMobile.value)
  }

  onMounted(() => {
    checkDeviceType()
    window.addEventListener('resize', checkDeviceType)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkDeviceType)
  })

  return { isMobile: isMobile.value }
}
