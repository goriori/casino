<script setup>
import { useRouter } from 'vue-router'
import {
  openAbout,
  openFAQ,
  openPrivileges,
  openTermCondition,
  openCombatingMoneyLaundering,
  openPrivacyPolicy,
} from './Footer.events.js'
import {
  isFAQOpen,
  isAboutOpen,
  isTermsConditionOpen,
  isPrivacyPolicyOpen,
  isCombatingMoneyLaunderingOpen,
} from './Footer.options.js'
import SupportModule from '@/components/modules/support/SupportModule.vue'
import PopupFAQ from '@/components/ui/popups/popup-faq/PopupFAQ.vue'
import PopupAbout from '@/components/ui/popups/popup-about/PopupAbout.vue'
import PopupTermsCondition from '@/components/ui/popups/popup-term-conditions/PopupTermsCondition.vue'
import PopupCombatingMoneyLaundering from '@/components/ui/popups/popup-combating-money-laundering/PopupCombatingMoneyLaundering.vue'
import PopupPrivacyPolicy from '@/components/ui/popups/popup-privacy-policy/PopupPrivacyPolicy.vue'

const router = useRouter()
</script>

<template>
  <footer class="footer">
    <TransitionGroup name="fade">
      <PopupFAQ v-if="isFAQOpen" />
      <PopupAbout v-if="isAboutOpen" />
      <PopupTermsCondition v-if="isTermsConditionOpen" />
      <PopupCombatingMoneyLaundering v-if="isCombatingMoneyLaunderingOpen" />
      <PopupPrivacyPolicy v-if="isPrivacyPolicyOpen" />
    </TransitionGroup>
    <h3>Legacy</h3>
    <div class="footer-links">
      <div class="footer-links-item">
        <p @click="openFAQ">FAQ</p>
        <p @click="openAbout">О нас</p>
        <p @click="openPrivileges">Привелегии</p>
      </div>
      <div class="footer-links-item">
        <p @click="openTermCondition">Правила и условия</p>
        <p @click="openPrivacyPolicy">Политика конфиденциальности</p>
        <p @click="openCombatingMoneyLaundering">Борьба с отмыванием денег</p>
      </div>
    </div>
    <hr />
    <div class="footer-info">
      <div class="footer-info-reserved">
        <img src="/images/logo.svg" alt="" @click="router.push('/')" />
        <p>© Casino | All rights reserved</p>
      </div>
      <div class="footer-info-payments">
        <div class="footer-info-payments-images">
          <img src="/images/icons/visa.svg" alt="" />
          <img src="/images/icons/mastercard.svg" alt="" />
        </div>
        <p>
          All trademarks, logos and brand names are the property of their
          respective owners.
        </p>
      </div>
    </div>
    <hr />
    <div class="footer-support-actions">
      <SupportModule />
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import 'Footer';
</style>
