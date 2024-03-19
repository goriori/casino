<script setup>
import CheckMarkIcon from '@/components/ui/icons/other/CheckMarkIcon.vue'
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
    <div class="profile__statuses-module-list">
      <ContentLoader
        type="status-card"
        color="secondary"
        v-if="!settingStore.statuses"
      >
        <rect width="400" height="200" />
      </ContentLoader>
      <StatusTypeCard
        v-for="status in settingStore.statuses"
        :key="status.id"
        :statusImage="urlAPI + status.icon"
        :status-min-exp="status.exp"
        :statusRatio="status.ratio"
        :statusTitle="status.title"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.profile__statuses {
  &-module {
    border-radius: 36px;
    padding: 40px;
    background: #2c2c2c;

    &-sections {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #bbbbbb;
      font-size: 14px;
      font-weight: 400;
      margin: 0 0 40px 0;
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 40px;
      overflow-y: auto;
      max-height: 500px;
    }
  }


}
</style>
