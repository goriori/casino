<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AccountModule from '@/components/modules/account/AccountModule.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
const settingStore= useSettingsStore()
const linkToChat = `https://t.me/user?id=${settingStore.settings.tg_id}`
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <div class="page-message">
        <p>Напишите нам для вывода средств</p>
        <BaseButton color="primary" outline>
          <a :href="linkToChat" target="_blank" class="btn-text"
            >Связаться с нами</a
          >
        </BaseButton>
      </div>
      <AccountModule />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.page {
  color: #fff;

  &-modules {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px 48px;
    @media (max-width: $md2 + px) {
      padding: 20px;
    }
  }

  &-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ef5a5a;
    border-radius: 16px;
    padding: 10px 20px;

    @media (max-width: $md4 + px) {
      flex-direction: column;
      gap: 18px;
      padding-bottom: 18px;
      div {
        width: 100%;
      }
    }
  }
}

.btn-text {
  color: #fff;
}
</style>