<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { computed, onMounted, ref } from 'vue'
import { useStateStore } from '@/store/stateStore.js'

const props = defineProps({
  gameItem: {
    type: Object,
    default: {},
  },
})
const sessionStore = useSessionStore()
const stateStore = useStateStore()
const generateImgLink = `${window.API}/frontend/Default/ico/${props.gameItem.name}.jpg`

const redirectLink = computed(
  () =>
    `${window.API}/game/${props.gameItem.name}?user_id=${sessionStore.session.profile?.id}`
)

const redirectToGame = () => (window.location.href = redirectLink.value)
const onClickGame = () => {
  if (sessionStore.session.token) {
    redirectToGame()
  } else {
    stateStore.globalPopupsModules.authorization.visibility = true
  }
}
</script>

<template>
  <div class="card" @click="onClickGame">
    <div class="card-game">
      <img loading="lazy" decoding="async" :src="generateImgLink" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'GameCard';
</style>
