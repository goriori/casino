<script setup>
import { onMounted, ref } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import BonusIcon from '@/components/ui/icons/balance/BonusIcon.vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'
import InfoTooltip from '@/components/ui/tooltips/info/InfoTooltip.vue'
import BonusSystemTooltipMessage from '@/components/modules/tooltip-messages/bonus-system/BonusSystemTooltipMessage.vue'

const sessionStore = useSessionStore()
const loadModule = ref(true)
onMounted(() => {
  setTimeout(() => {
    if (sessionStore.session?.profile) loadModule.value = false
    else loadModule.value = false
  }, 2500)
})
</script>

<template>
  <div v-if="loadModule">
    <ContentLoader type="default-card">
      <rect width="1000" height="800" />
    </ContentLoader>
  </div>

  <div class="balance-module" v-else>
    <div class="balance-module-title">
      <p>Балланс</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
      >
        <path
          d="M6.1685 6.545C6.1685 7.07519 5.74628 7.505 5.22544 7.505C4.7046 7.505 4.28238 7.07519 4.28238 6.545C4.28238 6.01481 4.7046 5.585 5.22544 5.585C5.74628 5.585 6.1685 6.01481 6.1685 6.545Z"
          fill="white"
        />
        <path
          d="M7.59955 4.62955C8.31719 4.41964 9.08964 4.305 9.89578 4.305C10.7332 4.305 11.5343 4.42871 12.2753 4.65442C12.608 4.75575 12.9583 4.56337 13.0579 4.22475C13.1574 3.88612 12.9684 3.52947 12.6358 3.42814C11.7774 3.16668 10.8548 3.025 9.89578 3.025C8.97256 3.025 8.0832 3.15629 7.25229 3.39933C6.91857 3.49695 6.72578 3.85147 6.82167 4.19119C6.91756 4.5309 7.26583 4.72717 7.59955 4.62955Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.89588 0.5C6.1518 0.5 2.89012 2.68073 1.9481 5.78H1.25774C0.477154 5.78 -0.114817 6.49645 0.0189302 7.27932L0.338349 9.14897C0.495467 10.0686 1.27958 10.74 2.19657 10.74H2.52693C2.90335 11.3966 3.39191 11.9918 3.96736 12.5087L3.05066 15.6793C2.99471 15.8728 3.03166 16.0818 3.15036 16.2434C3.26906 16.4049 3.45562 16.5 3.65378 16.5H6.1686C6.43443 16.5 6.67152 16.3298 6.76079 16.0749L7.36669 14.345C8.1647 14.5671 9.01489 14.6867 9.89588 14.6867C10.7842 14.6867 11.6412 14.5651 12.445 14.3394L13.1285 16.0957C13.2235 16.3397 13.4552 16.5 13.7131 16.5H16.2279C16.427 16.5 16.6144 16.404 16.733 16.2411C16.8515 16.0783 16.8873 15.8678 16.8294 15.6739L15.8716 12.466C17.2462 11.2101 18.1139 9.50017 18.1139 7.59333C18.1139 7.40719 18.1058 7.22309 18.0899 7.04122C18.4174 6.90053 18.7273 6.70111 18.9752 6.47302C19.3713 6.865 20 6.865 20 5.94006C20 6.225 19.3713 6.225 19.4201 5.90591C19.4725 5.80176 19.5117 5.69256 19.5328 5.5797C19.5874 5.28676 19.513 4.99176 19.2792 4.75378C19.0067 4.47634 18.653 4.48347 18.3907 4.62915C18.1436 4.76633 17.9496 5.03602 17.919 5.34824C17.8885 5.65887 18.0225 5.96305 18.3215 6.18495C18.2196 6.2569 18.11 6.32307 17.9962 6.3809C17.3247 2.97114 13.8668 0.5 9.89588 0.5ZM3.04573 6.55745C3.61694 3.91319 6.39877 1.78 9.89588 1.78C13.8508 1.78 16.8565 4.48575 16.8565 7.59333C16.8565 9.19906 16.072 10.6775 14.7568 11.7507C14.5562 11.9144 14.4738 12.1858 14.5485 12.4362L15.3797 15.22H14.1402L13.3994 13.3164C13.2753 12.9975 12.9262 12.8349 12.608 12.9477C11.7764 13.2426 10.8603 13.4067 9.89588 13.4067C8.93151 13.4067 8.01541 13.2426 7.18373 12.9477C6.85751 12.832 6.50072 13.0059 6.38472 13.3372L5.72528 15.22H4.49419L5.29005 12.4674C5.36257 12.2165 5.27792 11.946 5.07624 11.7841C4.38059 11.2257 3.82967 10.5534 3.46153 9.81145C3.35458 9.59591 3.13756 9.46 2.90035 9.46H2.19657C1.89091 9.46 1.62954 9.23621 1.57716 8.92966L1.25774 7.06H2.43169C2.72689 7.06 2.98233 6.85094 3.04573 6.55745ZM18.9151 5.46044C18.9009 5.53636 18.8613 5.62823 18.7914 5.7299C18.7715 5.71933 18.7531 5.70864 18.736 5.69788C18.5533 5.58293 18.5385 5.4736 18.5445 5.41192C18.5532 5.32413 18.6146 5.23382 18.6917 5.191C18.7535 5.15667 18.7928 5.16379 18.8346 5.20633C18.9152 5.28837 18.9325 5.36672 18.9151 5.46044Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="balance-module-info">
      <div class="balance-module-info-item">
        <div class="item-title">
          <h4>Основной</h4>
        </div>
        <div class="currency">
          <CurrencyIcon />
          <p>{{ sessionStore.session.profile?.balance }}</p>
        </div>
      </div>
      <div class="balance-module-info-item">
        <div class="item-title">
          <InfoTooltip :message="BonusSystemTooltipMessage" class="tooltip" />
          <h4>Бонусы</h4>
        </div>
        <div class="currency">
          <BonusIcon />
          <p>{{ sessionStore.session.profile?.bonus }}</p>
        </div>
      </div>
      <div class="balance-module-info-item">
        <div class="item-title">
          <h4>Валюта:</h4>
        </div>
        <div class="currency">
          <p>RUB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.balance {
  &-module {
    width: 100%;
    height: 100%;
    padding: 18px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    background: #2c2c2c;
    border-radius: 26px;
    font-size: 24px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    flex: 0 0 220px;
    @media (max-width: 1500px) {
      padding: 18px;
    }

    @media (max-width: $md2 + px) {
      font-size: 20px;
      gap: 24px;
    }

    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      color: $white;
      font-weight: 600;
      @media (max-width: $md4 + px) {
        font-size: 18px;
      }
    }

    &-info {
      display: flex;
      justify-content: center;
      align-items: start;
      color: $white;
      gap: 100px;

      @media (max-width: $md2 + px) {
        gap: 24px;
        justify-content: space-around;
        width: 100%;
      }

      &-item {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 26px;
        font-size: 24px;

        @media (max-width: $md2 + px) {
          font-size: 20px;
          gap: 18px;
        }
        @media (max-width: $md4 + px) {
          font-size: 14px;
        }
        @media (max-width: $md5 + px) {
          font-size: 10px;
        }
        h4 {
          font-weight: 500;
        }
      }
    }
  }
}

.currency {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  p {
    color: #d5a748;
    font-weight: 700;
  }
}

.item {
  &-title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    @media (max-width: $md4 + px) {
      max-height: 10px;
    }
    .tooltip {
      flex: 0 0 20px;
    }
  }
}

</style>
