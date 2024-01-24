<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { onMounted } from 'vue'
import {
  fullName,
  isEditBirthday,
  isEditFullName
} from './ProfileModule.options.js'
import {
  onChangeStateEditBirthday,
  onChangeStateEditFullName
} from '@/components/modules/account/modules/profile/ProfileModule.events.js'

const sessionStore = useSessionStore()

onMounted(async () => {
  await sessionStore.getInfoSession()
})
</script>

<template>
  <div class="profile-module">
    <div class="profile-module-title">
      <p>Профиль</p>
      <img src="/images/icons/account.svg" alt="">
    </div>
    <div class="profile-module-info">
      <div class="info-item">
        <h4>Логин/ID</h4>
        <p>{{ sessionStore.session.profile?.username }}</p>
      </div>
      <div class="info-item">
        <h4>Дата регистрации</h4>
        <p>
          {{
            new Date(
              sessionStore.session.profile?.created_at
            ).toLocaleDateString() || '00.00.0000'
          }}
        </p>
      </div>
<!--      <div class="info-item">-->
<!--        <h4>Имя, Фамилия</h4>-->
<!--        <div class="field-container" v-if="isEditFullName">-->
<!--          <input type="text" placeholder="Введите Имя и Фамилию" />-->
<!--          <div class="field-action" @click="onChangeStateEditFullName">-->
<!--            Сохранить-->
<!--          </div>-->
<!--        </div>-->
<!--        <p v-if="!isEditFullName" @click="onChangeStateEditFullName">-->
<!--          {{ fullName }}-->
<!--        </p>-->
<!--      </div>-->
<!--      <div class="info-item">-->
<!--        <h4>Дата рождения:</h4>-->
<!--        <div class="field-container" v-if="isEditBirthday">-->
<!--          <input type="text" placeholder="Введите дату рождения" />-->
<!--          <div class="field-action" @click="onChangeStateEditBirthday">-->
<!--            Сохранить-->
<!--          </div>-->
<!--        </div>-->
<!--        <p v-if="!isEditBirthday" @click="onChangeStateEditBirthday">-->
<!--          {{-->
<!--            new Date(-->
<!--              sessionStore.session.profile?.birthday-->
<!--            ).toLocaleDateString() || '00.00.0000'-->
<!--          }}-->
<!--        </p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ProfileModule';
</style>
