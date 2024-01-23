<script setup>
import SupportModule from '@/components/modules/support/SupportModule.vue'
import ChatIcon from '@/components/ui/icons/footer/ChatIcon.vue'
import MoveUpModule from '@/components/modules/move-up/MoveUpModule.vue'
import PopupPolicy from '@/components/ui/popups/PopupPolicy/PopupPolicy.vue'
import PopupGamingPolicy from '@/components/ui/popups/PopupGamingPolicy/PopupGamingPolicy.vue'
import PopupKYCPolicy from '@/components/ui/popups/popupKYCPolicy/popupKYCPolicy.vue'
import PopupFairnessPolicy from '@/components/ui/popups/PopupFairnessPolicy/PopupFairnessPolicy.vue'
import PopupRestraintPolicy from '@/components/ui/popups/PopupRestraintPolicy/PopupRestraintPolicy.vue'
import PopupPrivacyPolicy from '@/components/ui/popups/PopupPrivacyPolicy/PopupPrivacyPolicy.vue'
import PopupTermsPolicy from '@/components/ui/popups/PopupTermsPolicy/PopupTermsPolicy.vue'

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
import PopupPolicy from '@/components/ui/popups/PopupPolicy/PopupPolicy.vue'
import { togglePrivacy } from './Footer.events.js'
import { isPolicyOpen } from './Footer.options.js'
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
        <img src="/images/logo.svg" alt="" />
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
      <MoveUpModule />
    </div>
  </footer>
</template>

<style scoped lang="scss">
hr {
  display: flex;
  height: 0.5px;
  background: rgba(204, 204, 204, 0.5);
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
  background: #1d2345;
  gap: 48px;

  &-links {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    font-size: 20px;
    font-weight: 500;
    gap: 160px;

    &-item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 36px;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;

    &-reserved {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 36px;
    }

    &-payments {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 26px;

      &-images {
        display: flex;
        align-items: center;
        gap: 60px;
      }
    }
  }

  &-support-actions {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 635px;
  }
}
</style>
