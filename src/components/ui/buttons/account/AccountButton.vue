<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import PersonalAccountIcon from '@/components/ui/icons/account/PersonalAccountIcon.vue'
import SignIcon from '@/components/ui/icons/account/SignIcon.vue'

const props = defineProps({
  name: {
    type: String,
    default: 'personal',
  },
})
</script>

<template>
  <div class="account">
    <BaseButton
      outline
      color="primary"
      shadow="primary"
      v-if="name === 'personal'"
    >
      <div class="account-container account-personal">
        <PersonalAccountIcon />
        <p>Личный кабинет</p>
      </div>
    </BaseButton>

    <BaseButton
      outline
      color="primary"
      shadow="primary"
      v-if="name === 'signin'"
    >
      <div class="account-container account-signin">
        <SignIcon />
        <p>Войти</p>
      </div>
    </BaseButton>

    <BaseButton
      outline
      color="primary"
      shadow="primary"
      v-if="name === 'logout'"
    >
      <div class="account-container account-logout">
        <SignIcon />
        <p>Выйти</p>
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'AccountButton';
</style>
