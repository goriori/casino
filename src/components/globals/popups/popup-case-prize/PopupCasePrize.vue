<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { computed } from 'vue'
import { useStateStore } from '@/store/stateStore.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { useCaseStore } from '@/store/cases/caseStore.js'

const caseStore = useCaseStore()
const stateStore = useStateStore()
const imgUrl = computed(() => {
  return {
    roulette: '/images/cases/prizes/roulette.png',
    balance: '/images/cases/prizes/exp.png',
    coin: '/images/cases/prizes/exp.png',
  }[caseStore.casePrize?.type]
})
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="winn__prize">
        <div class="winn__prize-title">
          <strong> Выйгрыш </strong>
          <CloseIcon
            @click="stateStore.globalPopupsModules.casePrize.visibility = false"
          />
        </div>
        <div class="winn__prize-content">
          <div class="winn__prize-icon">
            <img :src="imgUrl" alt="image prize" />
          </div>
          <div class="winn__prize-title">Вы выйграли приз!</div>
          <section>
            <h3>Ваш приз:</h3>
            <span>+{{ caseStore.casePrize?.title }}</span>
          </section>
          <BaseButton
            @click="stateStore.globalPopupsModules.casePrize.visibility = false"
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
