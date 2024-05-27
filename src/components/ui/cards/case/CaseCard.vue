<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import DropdownIcon from '@/components/ui/icons/other/DropdownIcon.vue'
import { computed, ref, shallowRef } from 'vue'
import CasePrizes from '@/components/ui/cards/case/CasePrizes.vue'
import RoulettePrizeIcon from '@/components/ui/icons/prizes/RoulettePrizeIcon.vue'
import MoneyPrizeIcon from '@/components/ui/icons/prizes/MoneyPrizeIcon.vue'
import ExpPrizeIcon from '@/components/ui/icons/prizes/ExpPrizeIcon.vue'

const props = defineProps({
  caseId: {
    type: Number,
    default: null,
  },
  caseImage: {
    type: String,
    default: '/images/cases/defaultCase.svg',
  },
  caseTitle: {
    type: String,
    default: 'Ультра кейс',
  },
  casePrice: {
    type: [Number, String],
    default: 7000,
  },
  casePrizes: {
    type: Array,
    default: [],
  },
  openHandler: {
    type: Function,
    default: () => {},
  },
})
const buildPrizes = (() => {
  return props.casePrizes.map((item) => ({
    ...item,
    icon: (() => {
      if (item.type === 'roulette') return shallowRef(RoulettePrizeIcon)
      else if (item.type === 'balance') return shallowRef(MoneyPrizeIcon)
      else return shallowRef(ExpPrizeIcon)
    })(),
    showContent: false,
    get haveContent() {
      return item.description !== null
    },
  }))
})()
const showPrize = ref(false)
const sizeChip = computed(() => (showPrize.value ? '100%' : '80%'))
const prizes = ref([...buildPrizes])

const showPrizeDescription = (id) => {
  const stateShow = prizes.value.find((prize) => prize.id === id).showContent
  prizes.value.find((prize) => prize.id === id).showContent = !stateShow
}
</script>

<template>
  <article :class="['card_case', { 'card_case-active': showPrize }]">
    <div class="card_case-left">
      <div
        :class="['card_case-image', { 'card_case-image-active': showPrize }]"
      >
        <img :src="caseImage" alt="keys_image" />
        <div class="card_case-show" @click="showPrize = !showPrize">
          <p>{{ showPrize ? 'Скрыть призы' : 'Призы' }}</p>
          <DropdownIcon />
        </div>
      </div>
      <div class="card_case-title" v-if="!showPrize">
        <strong>{{ caseTitle }}</strong>
      </div>
    </div>

    <CasePrizes
      :prizes="prizes"
      v-if="showPrize"
      @showPrizeDescription="showPrizeDescription"
    />
    <div :class="['card_case-right', { 'card_case-right-active': showPrize }]">
      <div class="card_case-title" v-if="showPrize">
        <strong>{{ caseTitle }}</strong>
      </div>
      <div class="card_case-right">
        <div class="card_case-price">
          <strong>{{ casePrice }} Р</strong>
          <p>Цена ключа</p>
        </div>
        <BaseButton
          color="primary"
          id="open_keys"
          @click="openHandler(caseId, casePrice, casePrizes)"
        >
          <p>Открыть</p>
        </BaseButton>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.card_case {
  position: relative;
  background: #2c2c2c;
  border-radius: 36px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: $md4 + px) {
    padding: 10px 20px;
  }

  &-active {
    flex-direction: column;
    gap: 50px;
  }

  &-left {
    display: flex;
    flex-direction: column;
  }

  &-image {
    position: relative;
    max-width: 160px;
    max-height: 140px;
    top: -50px;
    left: 0;
    transition: all 0.3s ease-in-out;
    @media (max-width: $md1 + px) {
      max-width: 110px;
    }

    &-active {
      transform: translate(-50%, 0);
      left: 50%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-title {
    font-size: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
    @media (max-width: $md1 + px) {
      font-size: 22px;
      max-width: 200px;
    }
    @media (max-width: $md2 + px) {
      font-size: 15px;
      max-width: 150px;
    }
  }

  &-show {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transform: translate(-50%, -50%);
    background: #2c2c2c;
    padding: 10px 20px;
    border-radius: 36px;
    cursor: pointer;
    font-size: 14px;
    width: v-bind(sizeChip);
  }

  &-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30px;
    text-align: end;

    .card_case-title {
    }

    &-active {
      flex-direction: row;
      justify-content: space-between;
      align-items: end;
    }
  }

  &-price {
    display: flex;
    flex-direction: column;
    gap: 10px;

    strong {
      font-size: 32px;
      color: $primary;
      @media (max-width: $md1 + px) {
        font-size: 22px;
      }
      @media (max-width: $md2 + px) {
        font-size: 15px;
      }
    }

    p {
      font-size: 14px;
      color: #bbbbbb;
    }
  }
}

#open_keys {
  @media (max-width: $md1 + px) {
    max-width: 100px;
  }

  p {
    font-size: 16px;
    color: #fff;
  }
}
</style>
