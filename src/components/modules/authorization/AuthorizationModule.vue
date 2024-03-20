<script setup>
import { useRouter } from 'vue-router'
import {
  onChangeHiddenPassword,
  onAuthorization,
  onAuthTelegram,
  onRecoveryPassword,
  onRegistration,
} from '@/components/modules/authorization/AuthorizationModule.events.js'
import {
  pswrdHidden,
  formAuth,
  authFields,
  targetEntity,
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useStateStore } from '@/store/stateStore.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import EmailIcon from '@/components/ui/icons/authorization/EmailIcon.vue'
import HiddenIcon from '@/components/ui/icons/authorization/HiddenIcon.vue'
import TelegramIcon from '@/components/ui/icons/authorization/TelegramIcon.vue'
import NotHiddenIcon from '@/components/ui/icons/authorization/NotHiddenIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'

const props = defineProps({
  isPopup: {
    type: Boolean,
    default: false,
  },
})
const router = useRouter()
const stateStore = useStateStore()
</script>

<template>
  <div class="authorization-module">
    <div class="authorization-head" v-if="isPopup">
      <CloseIcon
        @click="stateStore.globalPopupsModules.authorization.visibility = false"
      />
    </div>
    <div class="authorization-info">
      <h1>Вход</h1>
      <p>Введите свои учетные данные для доступа к вашему профилю</p>
    </div>
    <div class="authorization-target">
      <div
        :class="['target-item ', { active: targetEntity === 'email' }]"
        @click="targetEntity = 'email'"
      >
        Почта
      </div>
      <div
        :class="['target-item ', { active: targetEntity === 'phone' }]"
        @click="targetEntity = 'phone'"
      >
        Телефон
      </div>
    </div>
    <div class="authorization-form" ref="authFields">
      <div class="form-field" v-if="targetEntity === 'email'">
        <div class="form-field-input">
          <input
            class="auth-field"
            type="text"
            id="auth-login"
            placeholder="Ввести почту"
            v-model="formAuth.username"
          />
          <EmailIcon />
        </div>
      </div>
      <div class="form-field" v-if="targetEntity === 'phone'">
        <div class="form-field-input">
          <input
            class="auth-field"
            type="text"
            id="auth-login"
            placeholder="Ввести логин"
            v-model="formAuth.username"
          />
        </div>
      </div>
      <div class="form-field">
        <div class="form-field-input">
          <input
            class="auth-field"
            id="auth-password"
            :type="pswrdHidden ? 'password' : 'text'"
            placeholder="Ввести пароль"
            v-model="formAuth.password"
          />
          <NotHiddenIcon v-if="!pswrdHidden" @click="onChangeHiddenPassword" />
          <HiddenIcon v-else @click="onChangeHiddenPassword" />
        </div>
      </div>
    </div>

    <div class="authorization-accept">
      <div class="authorization-accept-item">
        <div class="accept-item-field">
          <input type="checkbox" />
          <label>Напомнить через 30 дней</label>
        </div>
        <div class="accept-item-support" @click="onRecoveryPassword">
          <span>Забыли пароль?</span>
        </div>
      </div>
    </div>

    <div class="authorization-form-send">
      <BaseButton color="primary" @click="onAuthorization(router)">
        <div class="btn-send-form">Войти в профиль</div>
      </BaseButton>
    </div>

    <div class="authorization-registration">
      <div class="authorization-registration-info">
        У вас нет профиля?
        <span @click="onRegistration">Создать профиль</span>
      </div>
      <BaseButton color="primary" outline @click="onAuthTelegram">
        <div class="btn-registration">
          <p>Войти через</p>
          <span>Telegram</span>
          <TelegramIcon />
        </div>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'AuthorizationModule';
</style>
