<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { onMounted, ref } from 'vue'

const props = defineProps({
  gameItem: {
    type: Object,
    default: {},
  },
})

const sessionStore = useSessionStore()
const generateImgLink = `${window.API}/frontend/Default/ico/${props.gameItem.name}.jpg`

const redirectLink = `${window.API}/game/${props.gameItem.name}?user_id=${sessionStore.session.profile?.id}`

const redirectToGame = () => (window.location.href = redirectLink)
</script>

<template>
  <div class="card" @click="redirectToGame">
    <div class="card-game">
      <img :src="generateImgLink" alt="" />
      <!--      <img src="/images/cards/game-card.png" alt="" />-->
      <div class="card-game-title">
        <p :style="{ fontSize: gameItem.title.length > 6 ? '16px' : '42px' }">
          {{ gameItem.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'GameCard';
</style>
