<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CasePrizeCard from '@/components/ui/cards/case/CasePrizeCard.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { onMounted, ref } from 'vue'
import { useStateStore } from '@/store/stateStore.js'
import { useCaseStore } from '@/store/cases/caseStore.js'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'

const props = defineProps({
  isPopup: {
    type: Boolean,
    default: false,
  },
  price: {
    required: true,
    default: '7000₽',
  },
})
const stateStore = useStateStore()
const caseStore = useCaseStore()
const splideRef = ref(null)
const extensions = { AutoScroll }
const splideOption = ref({
  type: 'loop',
  rewind: true,
  perPage: 6,
  wheel: true,
  autoScroll: {
    speed: 0,
    autoStart: true,
    pauseOnHover: false,
  },
  breakpoints: {
    1240: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
})

const onStartPlay = (e) => {
  if (splideRef.value) {
    splideRef.value.options.autoScroll.speed = 90
    caseStore.openCase(stateStore.globalPopupsModules.caseOpen.caseId)
    const timerRoulette = setInterval(() => {
      if (splideRef.value.options.autoScroll.speed === 0) {
        stateStore.globalPopupsModules.casePrize.visibility = true
        stateStore.globalPopupsModules.caseOpen.visibility = false
        clearInterval(timerRoulette)
      }
      splideRef.value.options.autoScroll.speed -= 10
    }, 1000)
  }
}
</script>

<template>
  <div class="case">
    <section class="case-close" v-if="isPopup">
      <CloseIcon
        @click="stateStore.globalPopupsModules.caseOpen.visibility = false"
      />
    </section>
    <div class="case-head">Ультра кейс</div>
    <Transition name="fade">
      <div class="case-fortune">
        <img class="case-winner" src="/images/cases/prizes/winner.svg" />
        <div class="case-card">
          <Splide
            :options="splideOption"
            :extensions="extensions"
            class="slider"
            ref="splideRef"
            @splide:autoplay:play="onStartPlay"
          >
            <SplideSlide
              v-for="prize in stateStore.globalPopupsModules.caseOpen.prizes"
              :key="prize.id"
              class="slide"
            >
              <CasePrizeCard
                :color="prize.color"
                :type="prize.type"
                :title="prize.title"
                class="case-card-prize"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </Transition>

    <div class="case-action">
      <div class="case-price">{{ price }}</div>
      <BaseButton size="small" class="case-btn" @click="onStartPlay"
        >Крутить
      </BaseButton>
    </div>
    <div class="case-about">
      <div class="case-about-title">Содержание кейса</div>
      <div class="case-about-body">
        <CasePrizeCard
          v-for="prize in stateStore.globalPopupsModules.caseOpen.prizes"
          :key="prize.id"
          :type="prize.type"
          :title="prize.title"
          class="case-about-item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'CaseOpenModule';
</style>
