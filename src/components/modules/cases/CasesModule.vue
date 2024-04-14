<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { useCaseStore } from '@/store/cases/caseStore.js'
import { onMounted } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'
import CaseCard from '@/components/ui/cards/case/CaseCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import RouletteIcon from '@/components/ui/icons/other/RouletteIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import '@splidejs/vue-splide/css'

const stateStore = useStateStore()
const sessionStore = useSessionStore()
const caseStore = useCaseStore()
const splideOptions = {
  rewind: false,
  perPage: 3,
  wheel: false,
  breakpoints: {
    1240: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
}
const onOpenCase = async (caseId, price, prizes = []) => {
  if (sessionStore.session.token) {
    stateStore.globalPopupsModules.caseOpen.caseId = caseId
    stateStore.globalPopupsModules.caseOpen.price = price
    stateStore.globalPopupsModules.caseOpen.prizes = [...prizes]
    stateStore.globalPopupsModules.caseOpen.visibility = true
  } else stateStore.globalPopupsModules.authorization.visibility = true
}

const onSpin = () => {
  if (!sessionStore.session.profile) {
    stateStore.globalPopupsModules.authorization.visibility = true
  } else {
    stateStore.globalPopupsModules.roulette.visibility = true
  }
}
onMounted(async () => {
  await caseStore.getCases()
})
</script>

<template>
  <section class="cases__module">
    <div class="cases__module-title">
      <PopularIcon />
      <h3>Топ кейсов</h3>
    </div>
    <div class="cases__module-list">
      <Splide :options="splideOptions" aria-label="My Favorite Images">
        <SplideSlide
          v-for="caseItem in caseStore.cases"
          :key="caseItem"
          class="slide"
        >
          <CaseCard
            :caseId="caseItem.id"
            :caseTitle="caseItem.title"
            :casePrice="caseItem.price"
            :casePrizes="caseItem.items"
            :openHandler="onOpenCase"
            class="cases__module-item"
          />
        </SplideSlide>
        <SplideSlide class="slide">
          <div class="roulette__module">
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
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'CasesModule';
</style>
