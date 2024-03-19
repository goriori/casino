<script setup>
import ProfileStatusCard from '@/components/ui/cards/status/ProfileStatusCard.vue'
import { useStateStore } from '@/store/stateStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'

const stateStore = useStateStore()
const sessionStore = useSessionStore()
const onOpenStatusList = () => {
  stateStore.globalPopupsModules.statusesList.visibility = true
}
</script>

<template>
  <div class="profile__status-module">
    <h2>Мой статус</h2>
    <div class="profile__status-card">
      <ContentLoader
        type="default-card"
        v-if="!sessionStore.session.profile"
      >
        <rect width="400" height="200" />
      </ContentLoader>
      <ProfileStatusCard
        v-else
        :actionHandler="onOpenStatusList"
        :status="sessionStore.session.profile?.stair_status.title"
        :exp="sessionStore.session.profile?.stair_status.exp"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile__status {
  &-module {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
