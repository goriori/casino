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
import BurgerHeaderIocn from '@/components/ui/icons/header/BurgerHeaderIocn.vue'
import BurgerMenu from '@/components/globals/header/components/burger/BurgerMenu.vue'
import MailMessagesModule from '@/components/modules/mail-messages/MailMessagesModule.vue'
import { useStateStore } from '@/store/stateStore.js'

const stateStore = useStateStore()
const settingStore = useSettingsStore()
const sessionStore = useSessionStore()
const route = useRoute()
const router = useRouter()
const page = ref(route.name)
const serverUrl = window.API
const isAuthorized = computed(
  () => sessionStore.session?.token || sessionStore.session?.profile
)
const redirectToBonuses = () => {
  if (sessionStore.session?.profile) router.push('/bonuses')
  else stateStore.globalPopupsModules.authorization.visibility = true
}
const redirectToSupports = () => {
  const telegramLink = window.TG_BOT
  const a = document.createElement('a')
  a.href = telegramLink
  a.target = '_blank'
  a.click()
}

onMounted(async () => {
  await settingStore.getSettings()
})
</script>

<template>
  <header class="header">
    <section class="mobile-left">
      <BurgerMenu />
      <MailMessagesModule />
    </section>
    <div class="header-actions">
      <div class="header-actions-bonus" @click="redirectToBonuses">
        <BonusHeaderIcon />
        <p>Бонусы</p>
      </div>
      <div class="header-actions-support" @click="redirectToSupports">
        <SupportHeaderIcon />
        <p>Техподдержка</p>
      </div>
    </div>
    <div class="header-logo" @click="router.push('/')">
      <img :src="serverUrl + '/logo/logo.png'" alt="" />
    </div>
    <div class="header-actions">
      <div class="header-actions-account">
        <div class="action-mail" v-if="isAuthorized">
          <MailMessagesModule />
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
