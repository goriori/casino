<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import CaseCard from '@/components/ui/cards/case/CaseCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import { useCaseStore } from '@/store/cases/caseStore.js'
import { onMounted } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'

const stateStore = useStateStore()
const sessionStore = useSessionStore()
const caseStore = useCaseStore()
const splideOptions = {
  rewind: false,
  perPage: 3,
  type: 'loop',
  wheel: true,
  breakpoints: {
    1240: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
}
const onOpenCase = async (caseId) => {
  if (sessionStore.session.token) await caseStore.openCase(caseId)
  else stateStore.globalPopupsModules.authorization.visibility = true
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
      </Splide>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'CasesModule';
</style>
