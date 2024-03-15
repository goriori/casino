<script setup>
import ProfileStatusCard from '@/components/ui/cards/status/ProfileStatusCard.vue'
import { useStateStore } from '@/store/stateStore.js'

const stateStore = useStateStore()
const onOpenStatusList = () => {
  stateStore.globalPopupsModules.statusesList.visibility = true
}
</script>

<template>
  <div class="profile__status-module">
    <h2>Мой статус</h2>
    <div class="profile__status-card">
      <ProfileStatusCard :actionHandler="onOpenStatusList" />
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
