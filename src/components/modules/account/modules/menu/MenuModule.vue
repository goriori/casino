<script setup>
import { useData } from '@/components/modules/account/modules/menu/MenuModule.options.js'
import { useMethods } from '@/components/modules/account/modules/menu/MenuModule.events.js'

const { accountMenu, desktopLinks, mobileLinks } = useData()
const { isDeviceType } = useMethods(accountMenu, desktopLinks, mobileLinks)
const deviceType = isDeviceType()
</script>

<template>
  <div class="account-module-mobile-navigation">
    <div
      :class="[
        'navigation',
        {
          desktop: deviceType === 'desktop',
          tablet: deviceType === 'tablet',
          mobile: deviceType === 'mobile',
        },
      ]"
    >
      <div
        class="navigation-item"
        v-for="navMenu in accountMenu"
        :key="navMenu.id"
        @click="navMenu.handler"
      >
        <div class="item" v-if="navMenu.visibility">
          <img :src="`/images/icons/${navMenu.icon}.svg`" alt="" />
          <p>{{ navMenu.title }}</p>
        </div>
      </div>
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

.navigation {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &.desktop {
    flex-direction: row;
  }

  &-item {
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      transition: 0.1s all ease-in-out;

      &:active {
        color: #bbbbbb;
      }
    }
  }
}
</style>
