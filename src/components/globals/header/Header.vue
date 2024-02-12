<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BalanceModule from '@/components/modules/balance/BalanceModule.vue'
import PersonalAccountModule from '@/components/modules/personal-account/PersonalAccountModule.vue'
import SigninModule from '@/components/modules/signin/SigninModule.vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import AccountHeaderIcon from '@/components/ui/icons/header/AccountHeaderIcon.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import BonusHeaderIcon from '@/components/ui/icons/header/BonusHeaderIcon.vue'
import SupportHeaderIcon from '@/components/ui/icons/header/SupportHeaderIcon.vue'
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import AuthorizationModule from '@/components/modules/authorization/AuthorizationModule.vue'

const route = useRoute()
const router = useRouter()
const page = ref(route.name)

const settingStore = useSettingsStore()
const sessionStore = useSessionStore()
const isAuthorized = computed(
  () => sessionStore.session?.token || sessionStore.session?.profile
)
onMounted(async () => {
  await settingStore.getSettings()
})
</script>

<template>
  <header class="header">
    <div class="header-account-icons">
      <div class="icon-account">
        <AccountHeaderIcon />
      </div>
    </div>
    <div class="header-actions">
      <div class="header-actions-bonus">
        <BonusHeaderIcon />
        <p>Бонусы</p>
      </div>
      <div class="header-actions-support">
        <SupportHeaderIcon />
        <p>Техподдержка</p>
      </div>
    </div>
    <div class="header-logo" @click="router.push('/')">
      <img src="https://api.gamesoffutures.ru/logo/logo.png" alt="" />
    </div>
    <div class="header-actions">
      <div class="header-actions-account">
        <div class="action-personal_account" v-if="isAuthorized">
          <PersonalAccountModule />
        </div>
        <div class="action-balance" v-if="isAuthorized">
          <BalanceModule />
        </div>
      </div>
      <div class="header-actions-authorization" v-if="!isAuthorized">
        <SigninModule />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'Header';
</style>
