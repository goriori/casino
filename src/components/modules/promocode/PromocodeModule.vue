<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { ref } from 'vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import CoinsIcon from '@/components/ui/icons/other/CoinsIcon.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'
import { ERRORS } from '@/configs/errors.js'
import { SUCCESS } from '@/configs/success.js'

const promocode = ref('')
const paymentStore = usePaymentStore()
const sessionStore = useSessionStore()
const stateStore = useStateStore()
const onSendPromocode = () => {
  if (!sessionStore.session.profile) {
    stateStore.globalPopupsModules.authorization.visibility = true
  } else {
    paymentStore.sendPromocode(promocode.value).then((response) => {
      const error = response.error
      const success = response.success
      if (error === 'Pincode not exist') {
        stateStore.globalPopupMessages.error.show(
          ERRORS.ERROR_NOT_FOUND_PROMOCODE.MESSAGE
        )
      } else if (success === 'success') {
        stateStore.globalPopupMessages.success.show(
          SUCCESS.SUCCESS_PROMOCODE.MESSAGE
        )
      } else {
        stateStore.globalPopupMessages.error.show(ERRORS.ERROR_SERVER.MESSAGE)
      }
    })
    promocode.value = ''
  }
}
</script>

<template>
  <div class="promocode__module">
    <h2>Промокод</h2>
    <div class="promocode__module-icon">
      <CoinsIcon />
    </div>
    <div class="personal__bonuses-promo">
      <input type="text" placeholder="Введите промокод" v-model="promocode" />
      <BaseButton color="white" id="send-promo" @click="onSendPromocode">
        <p>Применить</p>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PromocodeModule';
</style>
