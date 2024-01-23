<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BalanceModule from '@/components/modules/balance/BalanceModule.vue'
import PersonalAccountModule from '@/components/modules/personal-account/PersonalAccountModule.vue'
import CashierModule from '@/components/modules/cashier/CashierModule.vue'
import SigninModule from '@/components/modules/signin/SigninModule.vue'

const route = useRoute()
const router = useRouter()
const page = ref(route.name)
const isAuthorizationPage =
  page.value === 'authorization' || page.value === 'registration'
console.log(page.value)
</script>

<template>
  <header class="header">
    <div class="header-logo" @click="router.push('/')">
      <img src="/images/logo.svg" alt="" />
    </div>
    <div class="header-actions">
      <div class="header-actions-account" v-if="!isAuthorizationPage">
        <PersonalAccountModule />
        <BalanceModule />
        <CashierModule />
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
