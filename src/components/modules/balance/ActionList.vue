<script setup>
import { navigationAuthorized } from '@/components/modules/balance/BalanceModule.options.js'
import router from '@/router/index.js'
import ArrowIcon from '@/components/ui/icons/other/ArrowIcon.vue'
</script>

<template>
  <div class="popup-navigation-authorized">
    <div
      class="navigation-item"
      v-ripple
      v-for="nav in navigationAuthorized"
      :key="nav.id"
      @click="nav.handler(router)"
    >
      <div class="navigation-item-content">
        <img :src="`/images/icons/${nav.icon}.svg`" alt="" />
        <p>{{ nav.title }}</p>
      </div>
      <div class="navigation-item-action">
        <ArrowIcon />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  &-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 31px 36px;
    border-top: 1px solid #fff;

    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

    }

    &-action {
      transform: rotate(90deg);
    }
  }
}
</style>
