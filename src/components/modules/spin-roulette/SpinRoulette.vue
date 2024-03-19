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
    <h2>Вращать рулетку</h2>
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
.roulette__module {
  display: flex;
  flex-direction: column;

  &-card {
    border-radius: 36px;
    background: #2c2c2c;
    padding: 12px 40px 20px 40px;
    flex: 1 0 190px;
  }

  &-icon {
    position: relative;
    top: 30px;
    flex: 1 0 154px;
  }
}

.card__content {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-head {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;

    h3 {
      font-size: 32px;
      font-weight: 700;
    }

    p {
      font-size: 14px;
      color: #bbbbbb;
    }
  }

  &-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    h2 {
      font-size: 32px;
      font-weight: 700;
    }

    p {
      color: #fff;
    }
  }
}
</style>
