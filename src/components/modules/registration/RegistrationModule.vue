<script setup>
import {
  onChangeHiddenPassword,
  onChangeHiddenPasswordConfirm,
  onRegistration,
} from '@/components/modules/registration/RegistrationModule.events.js'
import {
  pswrdHidden,
  formReg,
  pswrdCnfrmHidden,
} from '@/components/modules/registration/RegistrationModule.options.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import EmailIcon from '@/components/ui/icons/authorization/EmailIcon.vue'
import HiddenIcon from '@/components/ui/icons/authorization/HiddenIcon.vue'
import TelegramIcon from '@/components/ui/icons/authorization/TelegramIcon.vue'
import NotHiddenIcon from '@/components/ui/icons/authorization/NotHiddenIcon.vue'
</script>

<template>
  <div class="authorization-module">
    <div class="authorization-info">
      <h1>Регистрация</h1>
      <p>
        Заполните форму<br />
        для создания вашего профиля
      </p>
    </div>

    <div class="authorization-form">
      <div class="form-field">
        <label>Имя</label><br />
        <div class="form-field-input">
          <input
            type="text"
            placeholder="Ввести имя"
            v-model="formReg.first_name"
          />
        </div>
      </div>
      <div class="form-field">
        <label>Фамилия</label><br />
        <div class="form-field-input">
          <input
            type="text"
            placeholder="Ввести фамилию"
            v-model="formReg.last_name"
          />
        </div>
      </div>
      <div class="form-field">
        <label>Дата рождения</label><br />
        <div class="form-field-input">
          <input
            type="date"
            placeholder="Ввести дату рождения"
            v-model="formReg.birthday"
          />
        </div>
      </div>
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
      <BaseButton color="primary" @click="onRegistration">
        <div class="btn-send-form">Зарегистрироваться</div>
      </BaseButton>
    </div>

    <div class="authorization-registration">
      <div class="authorization-registration-info">
        <p>
          Я прочитал и согласен с
          <span>Правилами Использования Сервиса</span>
        </p>
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
@import 'RegistrationModule';
</style>
