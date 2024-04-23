<script setup>
import { useSettingsStore } from '@/store/settings/settingStore.js'
import { onMounted } from 'vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'
import StatusTypeCard from '@/components/ui/cards/status/StatusTypeCard.vue'

const settingStore = useSettingsStore()
const urlAPI = window.API
onMounted(async () => {
  await settingStore.getStatuses()
})
</script>

<template>
  <section class="profile__statuses-module">
    <div class="profile__statuses-module-sections">
      <p>Опыт</p>
      <p>Привелегии</p>
      <p>Бонус</p>
      <p>Курс обмена</p>
    </div>
    <div >
      <ContentLoader
        type="status-card"
        color="secondary"
        v-if="!settingStore.statuses"
      >
        <rect width="400" height="200" />
      </ContentLoader>
      <Transition name="fade">
        <div class="profile__statuses-module-list" v-if="settingStore?.statuses">
          <StatusTypeCard
            v-for="status in settingStore.statuses"
            :key="status.id"
            :statusId="status.id"
            :statusImage="urlAPI + status.icon"
            :statusPircent="status.bonus"
            :statusBonus="status.pay_bonus"
            :statusMinExp="status.exp"
            :statusRatio="status.ratio"
            :statusTitle="status.title"
          />
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'ProfileStatusesModule';
</style>
