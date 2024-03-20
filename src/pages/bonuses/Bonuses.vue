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
        <h2>Пополнени счет <span>впервые</span> и получи дополнительно</h2>
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
      <div class="page-modules">
        <PersonalBonusesModule />
        <div class="modules-middle">
          <PromocodeModule />
          <SpinRoulette />
        </div>
        <LoyaltyProgramModule />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
p {
  color: #fff;
  font-weight: bold;
}

#toBonusAccount {
  height: 90px;
  width: 100%;
  max-width: 572px;

  p {
    font-size: 32px;
    color: #d5a748;
  }
}

#toWithdrawal {
  width: 100%;
  max-width: 337px;
}

.page {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 53px;

  &-modules {
    display: flex;
    flex-direction: column;
    gap: 53px;
  }

  &-preview {
    width: 100%;
    max-width: 1792px;
    min-height: 765px;
    padding: 40px 0;
    border-radius: 36px;
    background-image: url('/images/bonuses/preview.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    h2 {
      font-size: 48px;
    }

    span {
      color: #d5a748;
    }
  }
}

.preview {
  &-actions {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
}

.modules {
  &-middle {
    display: flex;
    gap: 200px;
    padding: 0 200px;
  }
}
</style>
