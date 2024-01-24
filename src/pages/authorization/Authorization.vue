<script setup>
import { onMounted, ref } from 'vue'
import { onCheckRegistrationFromTelegram } from '@/pages/authorization/Authorization.events.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AuthorizationModule from '@/components/modules/authorization/AuthorizationModule.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tg = ref(window)

onMounted(async () => {
  await onCheckRegistrationFromTelegram(router)
})
</script>
<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <AuthorizationModule />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.page {
  color: #fff;

  &-modules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 48px 28px;
    @media (max-width: $md2 + px) {
      padding: 20px;
    }
  }
}
</style>
