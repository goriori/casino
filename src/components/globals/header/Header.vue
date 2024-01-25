<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BalanceModule from '@/components/modules/balance/BalanceModule.vue'
import PersonalAccountModule from '@/components/modules/personal-account/PersonalAccountModule.vue'
import CashierModule from '@/components/modules/cashier/CashierModule.vue'
import SigninModule from '@/components/modules/signin/SigninModule.vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import AccountHeaderIcon from '@/components/ui/icons/header/AccountHeaderIcon.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'

const route = useRoute()
const router = useRouter()
const page = ref(route.name)
const isAuthorizationPage =
  page.value === 'authorization' || page.value === 'registration'
const settingStore = useSettingsStore()
const sessionStore = useSessionStore()
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
    <div class="header-logo" @click="router.push('/')">
      <img src="/images/logo.svg" alt="" />
    </div>
    <div class="header-actions">
      <div class="header-actions-account" v-if="!isAuthorizationPage">
        <div
          class="action-personal_account"
          v-if="sessionStore.session?.token || sessionStore.session?.profile"
        >
          <PersonalAccountModule />
        </div>
        <BalanceModule />
      </div>
      <div class="header-actions-authorization" v-if="isAuthorizationPage">
        <SigninModule />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'Header';
</style>
