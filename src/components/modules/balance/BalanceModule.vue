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
  popupReplenishment,
  popupSetting,
} from '@/components/modules/balance/BalanceModule.options.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import BalanceButton from '@/components/ui/buttons/balance/BalanceButton.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import ReplenishmentModule from '@/components/modules/replenishment/ReplenishmentModule.vue'
import ActionList from '@/components/modules/balance/ActionList.vue'
import Balance from '@/components/modules/balance/Balance.vue'

const router = useRouter()
const sessionStore = useSessionStore()

</script>

<template>
  <div class="balance-module" v-outside="testOutside" @click.stop>
    <BalanceButton
      v-model="btnActive"
      :balance="sessionStore.session.profile?.balance"
    />
    <Transition name="fade">
      <div class="balance-module-popup" v-if="btnActive">
        <div class="popup-title">
          Ваш баланс
          <CloseIcon @click="onCloseMenu" class="popup-title-close" />
        </div>
        <div class="popup-balances">
          <Balance />
        </div>
        <div class="popup-navigation">
          <ActionList />
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
