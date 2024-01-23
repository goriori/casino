<script setup>
import { testOutside, updateStateButton } from '@/components/modules/balance/BalanceModule.events.js'
import {
  btnActive,
  navigation,
} from '@/components/modules/balance/BalanceModule.options.js'
import BalanceButton from '@/components/ui/buttons/balance/BalanceButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import ArrowIcon from '@/components/ui/icons/other/ArrowIcon.vue'
import WithdrawalPopup from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.vue'
</script>

<template>
  <div class="balance-module" v-outside="testOutside" @click.stop>
    <BalanceButton @is-active="updateStateButton" :is-active="btnActive"/>
    <Transition name="fade">
      <div class="balance-module-popup" v-if="btnActive">
        <div class="popup-title">Ваш баланс</div>
        <div class="popup-balances">
          <div class="balance-item">
            <div class="balance-item-name">Основной</div>
            <div class="balance-item-content">
              <CurrencyIcon />
              <p>0.00 ₽</p>
            </div>
          </div>
        </div>
        <div class="popup-navigation">
          <div
            class="navigation-item"
            v-ripple
            v-for="nav in navigation"
            :key="nav.id"
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
    </Transition>
    <Teleport to="body">
      <WithdrawalPopup/>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
@import 'BalanceModule';
</style>
