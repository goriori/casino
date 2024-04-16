<script setup>
import MoneyPrizeIcon from '@/components/ui/icons/prizes/MoneyPrizeIcon.vue'
import DropdownIcon from '@/components/ui/icons/other/DropdownIcon.vue'

const props = defineProps({
  prizes: {
    type: Array,
    default: [],
  },
})
const emits = defineEmits(['showPrizeDescription'])
console.log(props.prizes)
const showPrizeDescription = (prize) => {
  emits('showPrizeDescription', prize.id)
}
</script>

<template>
  <section class="card_case-prizes">
    <h2>Призы</h2>
    <div class="card_case-content">
      <div class="card_case-prize" v-for="prize in prizes" :key="prize.id">
        <div class="card_case-prize-title" @click="showPrizeDescription(prize)">
          <component :is="prize.icon" />
          <p>{{ prize.title }}</p>
          <DropdownIcon v-if="prize.haveContent" />
        </div>
        <Transition name="fade">
          <div
            class="card_case-prize-description"
            v-if="prize?.description && prize.showContent"
          >
            {{ prize.description }}
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

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

    @media (max-width: $md5 + px) {
      grid-template-columns: repeat(2, 130px);
    }
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
    font-size: 16px;
    @media (max-width: $md5 + px) {
      font-size: 10px;
    }
  }

  &-prize-description {
    font-size: 12px;
    color: #bbbbbb;
  }
}
</style>
