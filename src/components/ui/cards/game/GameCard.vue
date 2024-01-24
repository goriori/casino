<script setup>
const props = defineProps({
  gameItem: {
    type: Object,
    default: {},
  },
})

console.log(props.gameItem)
const generateImgLink = `${window.API}/frontend/Default/ico/${props.gameItem.name}.jpg`
const redirectLink = `${window.API}/game/${props.gameItem.name}`
const redirectToGame = () => (window.location.href = redirectLink)
</script>

<template>
  <div class="card" @click="redirectToGame">
    <div class="card-game">
<!--      <img :src="generateImgLink" alt="" />-->
      <img src="/images/cards/game-card.png" alt="" />
      <div class="card-game-title">
        <p>big win</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'GameCard';
</style>
