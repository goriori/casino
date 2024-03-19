<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import { computed } from 'vue'
import { useStateStore } from '@/store/stateStore.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'

const bonusStore = useBonusSystemStore()
const stateStore = useStateStore()
const pathToImagePrizes = '/images/roulette/prizes/'
const icon = computed(() => {
  const type = bonusStore.winPrize.type
  return {
    coin: pathToImagePrizes + 'coins.png',
    balance: pathToImagePrizes + 'coins.png',
    free_spin: pathToImagePrizes + 'free_spin.png',
    bonus: pathToImagePrizes + 'bonus.png',
  }[type]
})
const prizeName = computed(() => {
  const type = bonusStore.winPrize.type
  return {
    free_spin: 'Бесплатных вращений',
    coin: 'Опыта',
    balance: 'К балансу',
    bonus: 'К бонусному счету',
  }[type]
})
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="winn__prize">
        <div class="winn__prize-title">
          <strong> Выйгрыш </strong>
          <CloseIcon
            @click="stateStore.globalPopupsModules.winnPrize.visibility = false"
          />
        </div>
        <div class="winn__prize-content">
          <div class="winn__prize-icon">
            <img :src="icon" alt="image prize" />
          </div>
          <div class="winn__prize-title">Вы выйграли приз!</div>
          <section>
            <h3>Ваш вприз:</h3>
            <span>+{{ bonusStore.winPrize.sum }} {{ prizeName }}</span>
          </section>
          <BaseButton
            @click="stateStore.globalPopupsModules.winnPrize.visibility = false"
            ><p>Закрыть</p></BaseButton
          >
        </div>
      </div>
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">
p {
  color: #fff;
}

.winn__prize {
  background: #1e1e1e;
  border-radius: 36px;
  padding: 50px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &-icon {
    max-width: 500px;
    img {
      width: 100%;
      border-radius: 16px;
      object-fit: cover;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
