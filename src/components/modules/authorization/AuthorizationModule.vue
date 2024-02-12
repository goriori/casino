<script setup>
import { useRouter } from 'vue-router'

import {
  onChangeHiddenPassword,
  onAuthorization,
  onAuthTelegram,
  onRecoveryPassword, onRegistration
} from '@/components/modules/authorization/AuthorizationModule.events.js'
import {
  pswrdHidden,
  formAuth,
  authFields,
  authMessages,
} from '@/components/modules/authorization/AuthorizationModule.options.js'

import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import EmailIcon from '@/components/ui/icons/authorization/EmailIcon.vue'
import HiddenIcon from '@/components/ui/icons/authorization/HiddenIcon.vue'
import TelegramIcon from '@/components/ui/icons/authorization/TelegramIcon.vue'
import PopupSuccessAuthorization from '@/components/modules/authorization/popups/popup-success/PopupSuccessAuthorization.vue'
import PopupErrorAuthorization from '@/components/modules/authorization/popups/popup-error-server/PopupErrorServerAuthorization.vue'
import NotHiddenIcon from '@/components/ui/icons/authorization/NotHiddenIcon.vue'
import PopupErrorValidAuthorization from '@/components/modules/authorization/popups/popup-error-valid/PopupErrorValidAuthorization.vue'

const router = useRouter()
</script>

<template>
  <div class="authorization-module">
    <div class="authorization-popups">
      <Teleport to="body">
        <Transition name="slide">
          <PopupSuccessAuthorization
            v-if="authMessages.success"
            @close="authMessages.success = false"
          />
        </Transition>
        <Transition name="slide">
          <PopupErrorAuthorization
            v-if="authMessages.error"
            @close="authMessages.error = false"
          />
        </Transition>
        <Transition name="slide">
          <PopupErrorValidAuthorization
            v-if="authMessages.isValid"
            @close="authMessages.isValid = false"
          />
        </Transition>
      </Teleport>
    </div>

    <div class="authorization-info">
      <h1>Вход</h1>
      <p>Введите свои учетные данные для доступа к вашему профилю</p>
    </div>

    <div class="authorization-form" ref="authFields">
      <div class="form-field">
        <div class="form-field-input">
          <input
            class="auth-field "
            type="text"
            id="auth-login"
            placeholder="Ввести логин"
            v-model="formAuth.username"
          />
          <EmailIcon />
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
