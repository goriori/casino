<script setup>
import RouletteIcon from '@/components/ui/icons/other/RouletteIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'


const sessionStore = useSessionStore()
const stateStore = useStateStore()
const onSpin = () => {
  if (!sessionStore.session.profile) {
    stateStore.globalPopupsModules.authorization.visibility = true
  } else {
    stateStore.globalPopupsModules.roulette.visibility = true
  }
}
</script>

<template>
  <div class="roulette__module">
    <h2 >Вращать рулетку</h2>
    <RouletteIcon class="roulette__module-icon" />
    <div class="roulette__module-card">
      <div class="card__content">
        <div class="card__content-head">
          <h3>350 Р</h3>
          <p>Стоимость одного вращения</p>
        </div>
        <div class="card__content-section">
          <h2>Колесо фортуны</h2>
          <BaseButton @click="onSpin">
            <p>Вращать</p>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'SpinRoulette';
</style>
