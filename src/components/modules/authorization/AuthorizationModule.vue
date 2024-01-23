<script setup>
import { onChangeHiddenPassword, onAuthorization } from '@/components/modules/authorization/AuthorizationModule.events.js'
import {
  pswrdHidden,
  formAuth,
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import EmailIcon from '@/components/ui/icons/authorization/EmailIcon.vue'
import HiddenIcon from '@/components/ui/icons/authorization/HiddenIcon.vue'
import TelegramIcon from '@/components/ui/icons/authorization/TelegramIcon.vue'
import NotHiddenIcon from '@/components/ui/icons/authorization/NotHiddenIcon.vue'
</script>

<template>
  <div class="authorization-module">
    <div class="authorization-info">
      <h1>Вход</h1>
      <p>Введите свои учетные данные для доступа к вашему профилю</p>
    </div>

    <div class="authorization-form">
      <div class="form-field">
        <label>Логин</label><br />
        <div class="form-field-input">
          <input
            type="text"
            placeholder="Ввести логин"
            v-model="formAuth.username"
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
        <div class="accept-item-support">
          <span>Забыли пароль?</span>
        </div>
      </div>
    </div>

    <div class="authorization-form-send">
      <BaseButton color="primary" @click="onAuthorization">
        <div class="btn-send-form">Войти в профиль</div>
      </BaseButton>
    </div>

    <div class="authorization-registration">
      <div class="authorization-registration-info">
        <p>Впервые на сайте?</p>
        <span>Создать профиль</span>
      </div>
      <BaseButton color="primary" outline>
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
@import 'AuthorizationModule';
</style>
