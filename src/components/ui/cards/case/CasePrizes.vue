<script setup>
import MoneyPrizeIcon from '@/components/ui/icons/prizes/MoneyPrizeIcon.vue'
import DropdownIcon from '@/components/ui/icons/other/DropdownIcon.vue'
import { ref } from 'vue'
import ExpPrizeIcon from '@/components/ui/icons/prizes/ExpPrizeIcon.vue'
import RoulettePrizeIcon from '@/components/ui/icons/prizes/RoulettePrizeIcon.vue'

const prizes = ref([
  {
    id: 'awddwapodwposp@o2qe12ek0kdawd',
    title: 'Леньги 4500Р',
    content: [
      'Деньги 4500 Р будут зачислены на ваш баланс.\n' +
        'Отыгрыш не требуется.',
    ],
    icon: MoneyPrizeIcon,
    showContent: false,
    get haveContent() {
      return this.content.length > 0
    },
  },
  {
    id: 'awddwapodwposp@s',
    title: 'Опыт 300',
    content: ['Заработайте 300 опыта. Опыт повышает ваш уровень лояльности.'],
    icon: ExpPrizeIcon,
    showContent: false,
    get haveContent() {
      return this.content.length > 0
    },
  },
  {
    id: 'awddwapodwposp@o2qess12ek0kdawd',
    title: 'Опыт 300',
    content: ['Заработайте 300 опыта. Опыт повышает ваш уровень лояльности.'],
    icon: ExpPrizeIcon,
    showContent: false,
    get haveContent() {
      return this.content.length > 0
    },
  },
  {
    id: 'awd123dwapodwposp@o2qe1xc1232ek0kdawd',
    title: '2 Колесо фортуны',
    content: [],
    icon: RoulettePrizeIcon,
    showContent: false,
    get haveContent() {
      return this.content.length > 0
    },
  },
])
</script>

<template>
  <section class="card_case-prizes">
    <h2>Призы</h2>
    <div class="card_case-content">
      <div class="card_case-prize" v-for="prize in prizes" :key="prize.id">
        <div
          class="card_case-prize-title"
          @click="prize.showContent = !prize.showContent"
        >
          <component :is="prize.icon" />
          <p>{{ prize.title }}</p>
          <DropdownIcon v-if="prize.haveContent" />
        </div>
        <Transition name="fade">
          <div
            class="card_case-prize-description"
            v-if="prize.content.length > 0 && prize.showContent"
          >
            <p v-for="(content, index) in prize.content" :key="index">
              {{ content }}
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card_case {
  &-prizes {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-content: start;
    gap: 20px;
  }

  &-prize {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &-prize-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    p {
      font-size: 16px;
    }
  }

  &-prize-description {
    font-size: 12px;
    color: #bbbbbb;
  }
}
</style>
