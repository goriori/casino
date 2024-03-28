<script setup>
import { useRouter } from 'vue-router'
import {
  onChangeHiddenPassword,
  onChangeHiddenPasswordConfirm,
  onRegistration,
  onRegistrationTelegram,
  openAuthorization,
} from '@/components/modules/registration/RegistrationModule.events.js'
import {
  pswrdHidden,
  formReg,
  pswrdCnfrmHidden,
  targetEntity,
} from '@/components/modules/registration/RegistrationModule.options.js'

import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import EmailIcon from '@/components/ui/icons/authorization/EmailIcon.vue'
import HiddenIcon from '@/components/ui/icons/authorization/HiddenIcon.vue'
import TelegramIcon from '@/components/ui/icons/authorization/TelegramIcon.vue'
import NotHiddenIcon from '@/components/ui/icons/authorization/NotHiddenIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { useStateStore } from '@/store/stateStore.js'

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
        @click="stateStore.globalPopupsModules.registration.visibility = false"
      />
    </div>
    <div class="authorization-info">
      <h1>Регистрация</h1>
      <p>
        Заполните форму<br />
        для создания вашего профиля
      </p>
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
    <div class="authorization-form">
      <div class="form-field" v-if="targetEntity === 'email'">
        <label>Почта</label><br />
        <div class="form-field-input">
          <input
            type="text"

            placeholder="Ввести логин"
            id="reg-login"
            v-model="formReg.username"
          />
          <EmailIcon />
        </div>
      </div>
      <div class="form-field" v-if="targetEntity === 'phone'">
        <label>Телефон</label><br />
        <div class="form-field-input">
          <input
            type="text"
            placeholder="Ввести номер телефона"
            v-model="formReg.phone"
          />
        </div>
      </div>
      <div class="form-field">
        <label>Пароль</label><br />
        <div class="form-field-input">
          <input
            :type="pswrdHidden ? 'password' : 'text'"
            placeholder="Ввести пароль"
            id="reg-password"
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
            id="reg-confirm-password"
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
          <span @click="openAuthorization">Войти</span>
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
