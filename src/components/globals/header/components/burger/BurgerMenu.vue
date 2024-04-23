<script setup>
import SupportHeaderIcon from '@/components/ui/icons/header/SupportHeaderIcon.vue'
import BonusHeaderIcon from '@/components/ui/icons/header/BonusHeaderIcon.vue'
import BurgerHeaderIocn from '@/components/ui/icons/header/BurgerHeaderIocn.vue'
import { useRouter } from 'vue-router'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { ref } from 'vue'

const settingStore = useSettingsStore()
const router = useRouter()
const visibility = ref(false)
const changeVisibility = () => (visibility.value = !visibility.value)
const redirectToSupports = () => {
  const telegramLink = window.TG_BOT
  const a = document.createElement('a')
  a.href = telegramLink
  a.target = '_blank'
  a.click()
}
</script>

<template>
  <div class="header-burger">
    <div class="header-burger-icons">
      <div class="icon-burger">
        <BurgerHeaderIocn @click="changeVisibility" />
      </div>
    </div>
    <Transition name="slide">
      <div class="header-burger-menu" v-if="visibility">
        <div class="header-burger-menu-head">
          <CloseIcon @click="changeVisibility" />
        </div>
        <div class="header-burger-menu-logo">
          <img src="https://api.gamesoffutures.ru/logo/logo.png" alt="" />
        </div>
        <div class="header-burger-menu-list">
          <div class="header-burger-menu-item" @click="router.push('/bonuses')">
            <BonusHeaderIcon />
            <p>Бонусы</p>
          </div>
          <hr />
          <div class="header-burger-menu-item" @click="redirectToSupports">
            <SupportHeaderIcon />
            <p>Техподдержка</p>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

hr {
  height: 1px;
  background: #fff;
}

svg {
  max-width: 20px;
}

.header {
  &-burger {
    display: none;
    @media (max-width: $md4 + px) {
      display: block;
      cursor: pointer;
    }
    &-menu {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: #262626;
      left: 0;
      top: 0;
      z-index: 10;
      padding: 30px 26px;
      display: flex;
      flex-direction: column;
      gap:26px;

      &-head {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      &-logo {
        margin: 0 auto;
        max-width: 104px;
        max-height: 54px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
