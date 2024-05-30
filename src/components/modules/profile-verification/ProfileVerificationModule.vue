<script setup>
import { useSessionStore } from '@/store/session/sessionStore.js'
import { onMounted, ref } from 'vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'
import TextTooltip from '@/components/ui/tooltips/text/TextTooltip.vue'

const sessionStore = useSessionStore()
const loadModule = ref(true)

onMounted(() => {
  setTimeout(() => {
    if (sessionStore.session?.profile) loadModule.value = false
    else loadModule.value = false
  }, 2000)
})
</script>

<template>
  <section v-if="loadModule">
    <ContentLoader type="default-card">
      <rect width="200" height="100" />
    </ContentLoader>
  </section>
  <section
    class="profile__verification-module"
    v-if="!loadModule && sessionStore.session?.profile?.show_verified"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      v-if="!sessionStore.session?.profile?.is_verified"
    >
      <rect y="0.528717" width="44" height="44" rx="22" fill="#D20000" />
      <g clip-path="url(#clip0_3714_1512)">
        <path
          d="M22 30C23.1046 30 24 30.8954 24 32C24 33.1046 23.1046 34 22 34C20.8954 34 20 33.1046 20 32C20 30.8954 20.8954 30 22 30Z"
          stroke="white"
        />
        <path
          d="M24 27H20V26.8711C20 21.6447 19.3392 16.4392 18.0332 11.3786L18 11.25V11H26V11.25L25.9668 11.3786C24.6608 16.4392 24 21.6447 24 26.8711V27Z"
          stroke="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3714_1512">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(10 10.5287)"
          />
        </clipPath>
      </defs>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      v-if="sessionStore.session?.profile?.is_verified"
    >
      <rect y="0.528717" width="44" height="44" rx="22" fill="#7AB816 " />
      <path
        d="M18 16.8144V20.243M26 16.8144V20.243M22 34.5287C15.3726 34.5287 10 29.1561 10 22.5287C10 15.9013 15.3726 10.5287 22 10.5287C28.6274 10.5287 34 15.9013 34 22.5287C34 29.1561 28.6274 34.5287 22 34.5287ZM22.42 23.6716H21.58C19.2309 23.6716 16.9194 23.0822 14.8571 21.9573H14.5714V22.5287C14.5714 26.6315 17.8973 29.9573 22 29.9573C26.1026 29.9573 29.4286 26.6315 29.4286 22.5287V21.9573H29.1429C27.0806 23.0822 24.769 23.6716 22.42 23.6716Z"
        stroke="white"
        stroke-width="0.7"
      />
    </svg>
    <div class="profile__verification-message">
      <h3
        class="message-need-verification"
        v-if="!sessionStore.session?.profile?.is_verified"
      >
        Ваш аккаунт не верифицирован
      </h3>
      <h3
        class="message-success-verification"
        v-if="sessionStore.session?.profile?.is_verified"
      >
        Ваш аккаунт верифицирован
      </h3>
      <TextTooltip
        v-if="!sessionStore.session?.profile?.is_verified"
        text="Как верифицировать мой аккаунт?"
        message="Cвяжитесь с техподдержкой для верификации и дальнейших инструкций"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'ProfileVerificationModule';
</style>
