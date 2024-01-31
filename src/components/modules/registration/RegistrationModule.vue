<script setup>
import { useRouter } from 'vue-router'
import {
  onChangeHiddenPassword,
  onChangeHiddenPasswordConfirm,
  onRegistration,
  onRegistrationTelegram,
} from '@/components/modules/registration/RegistrationModule.events.js'
import {
  pswrdHidden,
  formReg,
  pswrdCnfrmHidden,
  regMessages,
} from '@/components/modules/registration/RegistrationModule.options.js'

import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import EmailIcon from '@/components/ui/icons/authorization/EmailIcon.vue'
import HiddenIcon from '@/components/ui/icons/authorization/HiddenIcon.vue'
import TelegramIcon from '@/components/ui/icons/authorization/TelegramIcon.vue'
import NotHiddenIcon from '@/components/ui/icons/authorization/NotHiddenIcon.vue'
import PopupSuccessRegistration from '@/components/modules/registration/popups/popup-success/PopupSuccessRegistration.vue'
import PopupErrorServerRegistration from '@/components/modules/registration/popups/popup-error-server/PopupErrorServerRegistration.vue'
import PopupErrorValidRegistration from '@/components/modules/registration/popups/popup-error-valid/PopupErrorValidRegistration.vue'

const router = useRouter()
</script>

<template>
  <div class="authorization-module">
    <div class="authorization-popups">
      <Teleport to="body">
        <Transition name="slide">
          <PopupSuccessRegistration
            v-if="regMessages.success"
            @close="regMessages.success = false"
          />
        </Transition>
        <Transition name="slide">
          <PopupErrorServerRegistration
            v-if="regMessages.error"
            @close="regMessages.error = false"
          />
        </Transition>
        <Transition name="slide">
          <PopupErrorValidRegistration
            v-if="regMessages.isValid"
            @close="regMessages.isValid = false"
          />
        </Transition>
      </Teleport>
    </div>
    <div class="authorization-info">
      <h1>Регистрация</h1>
      <p>
        Заполните форму<br />
        для создания вашего профиля
      </p>
    </div>

    <div class="authorization-form">
      <div class="form-field">
        <label>Логин</label><br />
        <div class="form-field-input">
          <input
            type="text"
            placeholder="Ввести логин"
            v-model="formReg.username"
          />
          <EmailIcon />
        </div>
      </div>
      <div class="form-field">
        <label>Пароль</label><br />
        <div class="form-field-input">
          <input
            :type="pswrdHidden ? 'password' : 'text'"
            placeholder="Ввести пароль"
            v-model="formReg.password"
          />
          <NotHiddenIcon v-if="!pswrdHidden" @click="onChangeHiddenPassword" />
          <HiddenIcon v-else @click="onChangeHiddenPassword" />
        </div>
      </div>
      <div class="form-field">
        <label>Подтвердите пароль</label><br />
        <div class="form-field-input">
          <input
            :type="pswrdCnfrmHidden ? 'password' : 'text'"
            placeholder="Ввести пароль"
            v-model="formReg.password_confirmation"
          />
          <NotHiddenIcon
            v-if="!pswrdCnfrmHidden"
            @click="onChangeHiddenPasswordConfirm"
          />
          <HiddenIcon v-else @click="onChangeHiddenPasswordConfirm" />
        </div>
      </div>
    </div>

    <div class="authorization-accept">
      <div class="authorization-accept-item">
        <div class="accept-item-field checkbox">
          <input type="checkbox" />
          <div class="authorization-registration-info">
            <p>
              Я прочитал и согласен с
              <span>Правилами Использования Сервиса</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="authorization-form-send">
      <BaseButton color="primary" @click="onRegistration(router)">
        <div class="btn-send-form">Зарегистрироваться</div>
      </BaseButton>
    </div>

    <div class="authorization-registration">
      <div class="authorization-registration-info">
        <p>
          У вас уже есть профиль?
          <span @click="router.push('/authorization')">Войти</span>
        </p>
      </div>

      <div class="authorization-registration-info">
        <p>
          Я прочитал и согласен с
          <span>Правилами Использования Сервиса</span>
        </p>
      </div>
      <BaseButton color="primary" outline @click="onRegistrationTelegram">
        <div class="btn-registration">
          <p>Зарегестрироваться через</p>
          <span>Telegram</span>
          <TelegramIcon />
        </div>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'RegistrationModule';
</style>
