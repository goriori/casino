<script setup>
import { accountMenu } from '@/components/modules/account/modules/menu/MenuModule.options.js'
</script>

<template>
  <div class="account-module-mobile-navigation">
    <div
      class="navigation-item"
      v-for="navMenu in accountMenu"
      :key="navMenu.id"
      @click="navMenu.handler"
    >
      <img :src="`/images/icons/${navMenu.icon}.svg`" alt="" />
      <p>{{ navMenu.title }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account-module {
  &-mobile-navigation {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.navigation-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  transition: 0.1s all ease-in-out;

  &:active {
    color: #bbbbbb;
  }
}
</style>
