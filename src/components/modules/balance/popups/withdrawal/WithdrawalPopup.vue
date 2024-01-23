<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import WalletIcon from '@/components/ui/icons/other/WalletIcon.vue'
import USDTIcon from '@/components/ui/icons/other/USDTIcon.vue'
import ReplenishmentScreen
  from '@/components/modules/balance/popups/withdrawal/screens/replenishment-screen/ReplenishmentScreen.vue'
</script>

<template>
  <div class="popup">
    <div class="popup-bg"></div>
    <div class="popup-withdrawal">
      <div class="popup-withdrawal-navigation">
        <div class="navigation-back">
          <BaseButton color="primary" outline>
            <div class="btn-back-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5 7C18.5 6.60113 18.2122 6.27778 17.8571 6.27778L2.69485 6.27778L6.74028 1.73291C6.99133 1.45087 6.99133 0.993579 6.74028 0.711534C6.48923 0.429488 6.0822 0.429488 5.83115 0.711534L0.688288 6.48931C0.437237 6.77136 0.437237 7.22864 0.688288 7.51069L5.83115 13.2885C6.0822 13.5705 6.48923 13.5705 6.74028 13.2885C6.99133 13.0064 6.99133 12.5491 6.74028 12.2671L2.69485 7.72222L17.8571 7.72222C18.2122 7.72222 18.5 7.39887 18.5 7Z"
                  fill="#5570FB"
                />
              </svg>
              <p>Назад</p>
            </div>
          </BaseButton>
        </div>
        <div class="navigation-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15 28.125C7.75126 28.125 1.875 22.2487 1.875 15C1.875 7.75126 7.75126 1.875 15 1.875C22.2487 1.875 28.125 7.75126 28.125 15C28.125 22.2487 22.2487 28.125 15 28.125ZM15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#BBBBBB"
            />
            <path
              d="M8.71209 8.71209C9.0782 8.34597 9.6718 8.34597 10.0379 8.71209L15 13.6742L19.9621 8.71209C20.3282 8.34597 20.9218 8.34597 21.2879 8.71209C21.654 9.0782 21.654 9.6718 21.2879 10.0379L16.3258 15L21.2879 19.9621C21.654 20.3282 21.654 20.9218 21.2879 21.2879C20.9218 21.654 20.3282 21.654 19.9621 21.2879L15 16.3258L10.0379 21.2879C9.6718 21.654 9.0782 21.654 8.71209 21.2879C8.34597 20.9218 8.34597 20.3282 8.71209 19.9621L13.6742 15L8.71209 10.0379C8.34597 9.6718 8.34597 9.0782 8.71209 8.71209Z"
              fill="#BBBBBB"
            />
          </svg>
        </div>
      </div>
      <ReplenishmentScreen/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'WithdrawalPopup';
</style>
