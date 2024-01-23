import { ref} from 'vue'

export const useTimer = (timeLimit) => {
  const currentTime = ref(0)
  const isTimerExpired = ref(false)

  const startTimer = () => {
    const startTime = Date.now()

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime >= timeLimit) {
        isTimerExpired.value = true
        clearInterval(intervalId)
      }
      currentTime.value = elapsedTime
    }, 1000)
  }

  return { currentTime, isTimerExpired, startTimer }
}
