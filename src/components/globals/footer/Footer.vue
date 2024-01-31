<script setup>
import { useRouter } from 'vue-router'
import {
  openGamingPolicy,
  openPolicy,
  openKYCPolicy,
  openFairnessPolicy,
  openRestraintPolicy,
  openPrivacyPolicy,
  openTermsPolicy,
} from './Footer.events.js'
import {
  isPolicyOpen,
  isGamingPolicyOpen,
  isKYCPolicyOpen,
  isFairnessPolicyOpen,
  isRestraintPolicyOpen,
  isPrivacyPolicyOpen,
  isTermsPolicyOpen,
} from './Footer.options.js'
import SupportModule from '@/components/modules/support/SupportModule.vue'
import PopupPolicy from '@/components/ui/popups/popup-policy/PopupPolicy.vue'
import PopupGamingPolicy from '@/components/ui/popups/popup-gaming-policy/PopupGamingPolicy.vue'
import PopupKYCPolicy from '@/components/ui/popups/popup-kyc-policy/popupKYCPolicy.vue'
import PopupFairnessPolicy from '@/components/ui/popups/popup-fairness-policy/PopupFairnessPolicy.vue'
import PopupRestraintPolicy from '@/components/ui/popups/popup-restraint-policy/PopupRestraintPolicy.vue'
import PopupPrivacyPolicy from '@/components/ui/popups/popup-privacy-policy/PopupPrivacyPolicy.vue'
import PopupTermsPolicy from '@/components/ui/popups/popup-terms-policy/PopupTermsPolicy.vue'


const router = useRouter()

</script>

<template>
  <footer class="footer">
    <TransitionGroup name="fade">
      <PopupPolicy v-if="isPolicyOpen" />
      <PopupGamingPolicy v-if="isGamingPolicyOpen" />
      <PopupKYCPolicy v-if="isKYCPolicyOpen" />
      <PopupFairnessPolicy v-if="isFairnessPolicyOpen" />
      <PopupRestraintPolicy v-if="isRestraintPolicyOpen" />
      <PopupPrivacyPolicy v-if="isPrivacyPolicyOpen" />
      <PopupTermsPolicy v-if="isTermsPolicyOpen" />
    </TransitionGroup>
    <h3>Legacy</h3>
    <div class="footer-links">
      <div class="footer-links-item">
        <p @click="openPolicy">Dispute Resolution Policy</p>
        <p @click="openGamingPolicy">Responsible Gaming Policy</p>
        <p @click="openKYCPolicy">KYC Policy</p>
      </div>
      <div class="footer-links-item">
        <p @click="openFairnessPolicy">Fairness Policy</p>
        <p @click="openRestraintPolicy">Self-Restraint Policy</p>
      </div>
      <div class="footer-links-item">
        <p @click="openPrivacyPolicy">Privacy Notice</p>
        <p @click="openTermsPolicy">Terms and Conditions</p>
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
