<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import PersonalBonusesModule from '@/components/modules/personal-bonuses/PersonalBonusesModule.vue'
import LoyaltyProgramModule from '@/components/modules/loyalty-program/LoyaltyProgramModule.vue'
import PromocodeModule from '@/components/modules/promocode/PromocodeModule.vue'

import SpinRoulette from '@/components/modules/spin-roulette/SpinRoulette.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'
import { useRouter } from 'vue-router'

const stateStore = useStateStore()
const sessionStore = useSessionStore()
const router = useRouter()
const toBonusAccount = () => {
  if (!sessionStore.session.profile) {
    stateStore.globalPopupsModules.authorization.visibility = true
  } else {
    router.push('/account')
  }
}
const openWithdrawal = () => {
  if (!sessionStore.session.profile) {
    stateStore.globalPopupsModules.authorization.visibility = true
  } else {
    stateStore.globalPopupsModules.replenishment.visibility = true
  }
}
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-container container">
      <section class="page-preview">
        <h2>Пополни счет <span>впервые</span> и получи дополнительно</h2>
        <img src="/images/bonuses/percent.png" alt="" />
        <div class="preview-actions">
          <BaseButton color="white" id="toBonusAccount" @click="toBonusAccount">
            <p>К БОНУСНОМУ СЧЕТУ!</p>
          </BaseButton>
          <BaseButton id="toWithdrawal" @click="openWithdrawal">
            <p>Пополнить счет</p>
          </BaseButton>
        </div>
      </section>
      <section class="page-modules">
        <PersonalBonusesModule />
        <div class="modules-middle">
          <PromocodeModule />
          <SpinRoulette />
        </div>
        <LoyaltyProgramModule />
      </section>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import 'Bonuses';
</style>
