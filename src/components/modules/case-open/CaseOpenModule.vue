<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CasePrizeCard from '@/components/ui/cards/case/CasePrizeCard.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { onMounted, ref } from 'vue'
import { useStateStore } from '@/store/stateStore.js'
import { useCaseStore } from '@/store/cases/caseStore.js'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'

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
const sessionStore = useSessionStore()
const activeSpin = ref(false)
const splideRef = ref(null)
const extensions = { AutoScroll }
const splideOption = ref({
  type: 'loop',
  rewind: true,
  control: false,
  perPage: 6,
  arrows: false,
  pagination: false,
  wheel: false,
  breakpoints: {
    1240: {
      perPage: 3,
    },
    600: {
      perPage: 2,
    },
  },
})
const visibilityPrize = ref(false)

function computedPeerPage() {
  const windowSize = window.innerWidth
  if (windowSize > 1000) return 6
  else if (windowSize > 500) return 4
  else if (windowSize > 300) return 3
  else return 2
}

const initSplideOption = () => {
  Object.assign(splideRef.value.options, splideOption.value)
}
const onSpinWheel = () => {
  splideRef.value.options.autoScroll = {
    speed: 90,
    autoStart: true,
    pauseOnHover: false,
  }
  splideRef.value.splide.Components.AutoScroll.play()
}
const onStopWheel = async () => {
  setTimeout(() => {
    splideRef.value.options.perPage = computedPeerPage()
    const prizeId = caseStore.casePrize.id
    splideRef.value.go(prizeId)
    splideRef.value.splide.Components.AutoScroll.pause()
    showPrize()
  }, 5000)
}
const hidePrize = () => {
  caseStore.casePrize = {}
  visibilityPrize.value = false
  activeSpin.value = true
}
const showPrize = () => {
  visibilityPrize.value = true
  activeSpin.value = false
}
const getPrize = async () => {
  await caseStore.openCase(stateStore.globalPopupsModules.caseOpen.caseId)
}
const updateUserInfo = () => {
  sessionStore.getInfoSession()
}
const onStartPlay = (e) => {
  if (splideRef.value) {
    Promise.resolve()
      .then(hidePrize)
      .then(onSpinWheel)
      .then(getPrize)
      .then(onStopWheel)
      .catch((e) => {
        stateStore.globalPopupMessages.error.show(
          'При прокрутке произошла ошибка '
        )
      })
      .finally(updateUserInfo)
  }
}

onMounted(() => {
  if (splideRef.value) initSplideOption()
})
</script>

<template>
  <div class="case">
    <section class="case-close" v-if="isPopup">
      <CloseIcon
        @click="stateStore.globalPopupsModules.caseOpen.visibility = false"
      />
    </section>
    <section class="case-head">Ультра кейс</section>
    <Transition name="fade">
      <section class="case-fortune">
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
              :data-id="prize.id"
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
      </section>
    </Transition>
    <Transition name="fade">
      <section
        class="case-prize"
        v-if="visibilityPrize && caseStore.casePrize.title"
      >
        <p class="prize-title">
          Вы выйграли:
          <mark class="prize-name">{{ caseStore.casePrize.title }}</mark>
        </p>
      </section>
    </Transition>
    <section class="case-action">
      <div class="case-price">{{ price }}</div>
      <BaseButton
        size="small"
        class="case-btn"
        @click="onStartPlay"
        :disabled="activeSpin"
      >
        {{ visibilityPrize ? 'Крутить еще раз' : 'Крутить' }}
      </BaseButton>
    </section>
    <section class="case-about">
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
    </section>
  </div>
</template>

<style scoped lang="scss">
@import 'CaseOpenModule';
</style>
