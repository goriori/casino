<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import DropdownIcon from '@/components/ui/icons/other/DropdownIcon.vue'
import { computed, ref } from 'vue'
import CasePrizes from '@/components/ui/cards/case/CasePrizes.vue'

const props = defineProps({
  keysImage: {
    type: String,
    default: '/images/cases/defaultCase.svg',
  },
  keysTitle: {
    type: String,
    default: 'Ультра кейс',
  },
  keysPrice: {
    type: [Number, String],
    default: 7000,
  },
})

const showPrize = ref(false)
const sizeChip = computed(() => (showPrize.value ? '100%' : '80%'))
</script>

<template>
  <article :class="['card_case', { 'card_case-active': showPrize }]">
    <div class="card_case-left">
      <div
        :class="['card_case-image', { 'card_case-image-active': showPrize }]"
      >
        <img :src="keysImage" alt="keys_image" />
        <div class="card_case-show" @click="showPrize = !showPrize">
          <p>{{ showPrize ? 'Скрыть призы' : 'Призы' }}</p>
          <DropdownIcon />
        </div>
      </div>
      <div class="card_case-title" v-if="!showPrize">
        <strong>{{ keysTitle }}</strong>
      </div>
    </div>

    <CasePrizes v-if="showPrize" />
    <div :class="['card_case-right', { 'card_case-right-active': showPrize }]">
      <div class="card_case-title" v-if="showPrize">
        <strong>{{ keysTitle }}</strong>
      </div>
      <div class="card_case-right">
        <div class="card_case-price">
          <strong>{{ keysPrice }} Р</strong>
          <p>Цена ключа</p>
        </div>
        <BaseButton color="primary" id="open_keys"><p>Открыть</p></BaseButton>
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
    left: 0%;
    transition: all 0.3s ease-in-out;

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
    }

    p {
      font-size: 14px;
      color: #bbbbbb;
    }
  }
}

#open_keys {
  p {
    color: #fff;
  }
}
</style>
