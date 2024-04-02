<script setup>
import ProfileStatusCard from '@/components/ui/cards/status/ProfileStatusCard.vue'
import { useStateStore } from '@/store/stateStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'
import { computed, onMounted } from 'vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'

const stateStore = useStateStore()
const settingStore = useSettingsStore()
const sessionStore = useSessionStore()
const onOpenStatusList = () => {
  stateStore.globalPopupsModules.statusesList.visibility = true
}

const endExp = computed(() => {
  const countStatuses = settingStore.statuses.length - 1
  const indexStatus = settingStore.statuses.findIndex(
    (status) => status.id === sessionStore.session.profile.stair_status?.id
  )
  console.log(indexStatus)
  if (indexStatus === null || indexStatus === undefined) return '∞'
  else if (indexStatus === countStatuses) return '∞'
  else return settingStore.statuses[indexStatus + 1].exp
})

const statusBar = computed(() => {
  const startExp = sessionStore.session.profile?.coins
  return `'${startExp} / ${endExp.value}'`
})

onMounted(async () => {
  await settingStore.getStatuses()
})
</script>

<template>
  <div class="profile__status-module">
    <h2>Мой статус</h2>
    <div class="profile__status-card">
      <ContentLoader type="default-card" v-if="!sessionStore.session.profile">
        <rect width="400" height="200" />
      </ContentLoader>
      <ProfileStatusCard
        v-else
        :actionHandler="onOpenStatusList"
        :status="sessionStore.session.profile?.stair_status.title"
        :statusBar="statusBar"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ProfileStatusModule';
</style>
