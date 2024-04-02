<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'
import { onMounted, ref } from 'vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'


const stateStore = useStateStore()
const sessionStore = useSessionStore()
const loadModule = ref(true)
const onEditProfile = () =>
  (stateStore.globalPopupsModules.profileEdit.visibility = true)

onMounted(() => {
  setTimeout(() => {
    if (sessionStore.session?.profile) loadModule.value = false
    else loadModule.value = false
  }, 3000)
})
</script>

<template>
  <div v-if="loadModule">
    <ContentLoader type="default-card">
      <rect width="400" height="1000" />
    </ContentLoader>
  </div>
  <div class="profile-module" v-else>
    <div class="profile-module-title">
      <p>Профиль</p>
      <img src="/images/icons/account.svg" alt="" />
    </div>
    <div class="profile-module-info">
      <div class="info-item">
        <h4>Логин/ID</h4>
        <p>
          {{ sessionStore.session.profile?.username }} /
          {{ sessionStore.session.profile?.id }}
        </p>
      </div>
      <div class="info-item">
        <h4>Дата регистрации</h4>
        <p>
          {{
            new Date(
              sessionStore.session.profile?.created_at
            ).toLocaleDateString() || '00.00.0000'
          }}
        </p>
      </div>
      <div class="info-item">
        <h4>Имя, Фамилия</h4>
        <p>
          {{ sessionStore.session.profile?.first_name || 'Имя' }}
          {{ sessionStore.session.profile?.last_name || 'Фамилия' }}
        </p>
      </div>
      <div class="info-item">
        <h4>Дата рождения</h4>
        <p>
          {{
            new Date(
              sessionStore.session.profile?.birthday
            ).toLocaleDateString() || '00.00.0000'
          }}
        </p>
      </div>
      <div class="info-item">
        <h4>Телефон</h4>
        <p>
          {{ sessionStore.session.profile?.phone || 'Не установлен' }}
        </p>
      </div>
      <BaseButton class="btn-edit" @click="onEditProfile">
        <p>Редактировать</p>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ProfileModule';
</style>
