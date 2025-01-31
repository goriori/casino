import { ref } from 'vue'

export const useTimer = (countdownTime) => {
  const currentTime = ref('')
  const isFinished = ref(false)

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
      const remainingTime = countdownTime - elapsedTime

      if (remainingTime <= 0) {
        isFinished.value = true
        clearInterval(intervalId)
      }

      currentTime.value = formatTime(remainingTime)
    }, 1000)
  }

  return { currentTime, isFinished, startTimer }
}

