<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { onMounted } from 'vue'

import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'

const sessionStore = useSessionStore()

</script>

<template>
  <div class="profile-module">
    <div class="profile-module-title">
      <p>Профиль</p>
      <img src="/images/icons/account.svg" alt="" />
    </div>
    <div class="profile-module-info">
      <div class="info-item">
        <h4>Логин/ID</h4>
        <p>
          {{ sessionStore.session.profile?.username }} /
          {{ sessionStore.session.profile?.id }}
        </p>
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
      <!--        <h4>Ввести промокод:</h4>-->
      <!--        <input type="text" placeholder="Прмокод" v-model="promocode" />-->
      <!--        <BaseButton color="primary" outline @click="onSendPromocode"-->
      <!--          >Ввести промокод</BaseButton-->
      <!--        >-->
      <!--      </div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ProfileModule';
</style>
