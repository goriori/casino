<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { onMounted, ref } from 'vue'

const props = defineProps({
  gameItem: {
    type: Object,
    default: {},
  },
})
const emits = defineEmits(['unauthorized'])
const sessionStore = useSessionStore()
const generateImgLink = `${window.API}/frontend/Default/ico/${props.gameItem.name}.jpg`

const redirectLink = `${window.API}/game/${props.gameItem.name}?user_id=${sessionStore.session.profile?.id}`

const redirectToGame = () => (window.location.href = redirectLink)
const onClickGame = () => {
  if (sessionStore.session.token) {
    redirectToGame()
  } else {
    emits('unauthorized')
  }
}
</script>

<template>
  <div class="card" @click="onClickGame">
    <div class="card-game">
      <img loading="lazy" decoding="async" :src="generateImgLink" alt="" />
      <div class="card-game-title">
        <p>
          {{ gameItem.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'GameCard';
</style>
