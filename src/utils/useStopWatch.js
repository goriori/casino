import { ref } from 'vue'

export const useStopWatch = (timeLimit) => {
  const currentTime = ref(0)
  const isTimerExpired = ref(false)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }
  const startTimer = () => {
    const startTime = Date.now()

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime >= timeLimit) {
        isTimerExpired.value = true
        clearInterval(intervalId)
      }
      currentTime.value = formatTime(elapsedTime)
    }, 1000)
  }

  return { currentTime, isTimerExpired, startTimer }
}
