<script setup>
import { useRouter } from 'vue-router'
import {
  closePopupReplenishment,
  testOutside,
  updateStateButton,
  onCloseMenu,
} from '@/components/modules/balance/BalanceModule.events.js'
import {
  btnActive,
  navigationAuthorized,
  popupReplenishment,
  popupSetting,
} from '@/components/modules/balance/BalanceModule.options.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import BalanceButton from '@/components/ui/buttons/balance/BalanceButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import ArrowIcon from '@/components/ui/icons/other/ArrowIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import ReplenishmentModule from '@/components/modules/replenishment/ReplenishmentModule.vue'

const router = useRouter()
const sessionStore = useSessionStore()
</script>

<template>
  <div class="balance-module" v-outside="testOutside" @click.stop>
    <BalanceButton
      @is-active="updateStateButton"
      :is-active="btnActive"
      :balance="sessionStore.session.profile?.balance"
    />
    <Transition name="fade">
      <div class="balance-module-popup" v-if="btnActive">
        <div class="popup-title">
          Ваш баланс
          <CloseIcon @click="onCloseMenu" class="popup-title-close" />
        </div>
        <div class="popup-balances">
          <div class="balance-item">
            <div class="balance-item-name">Основной</div>
            <div class="balance-item-content">
              <CurrencyIcon />
              <p>{{ sessionStore.session.profile?.balance }} ₽</p>
            </div>
          </div>
          <div class="balance-item">
            <div class="balance-item-name">Баллов</div>
            <div class="balance-item-content">
              <CurrencyIcon />
              <p>{{ sessionStore.session.profile?.bonus }} ₽</p>
            </div>
          </div>
        </div>
        <div class="popup-navigation">
          <div class="popup-navigation-authorized">
            <div
              class="navigation-item"
              v-ripple
              v-for="nav in navigationAuthorized"
              :key="nav.id"
              @click="nav.handler(router)"
            >
              <div class="navigation-item-content">
                <img :src="`/images/icons/${nav.icon}.svg`" alt="" />
                <p>{{ nav.title }}</p>
              </div>
              <div class="navigation-item-action">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <Teleport to="body">
      <Transition name="fade">
        <ReplenishmentModule
          :setting="popupSetting"
          @close="closePopupReplenishment"
          v-if="popupReplenishment"
          @click.stop
        />
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
@import 'BalanceModule';
</style>
