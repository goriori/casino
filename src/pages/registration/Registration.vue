<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import RegistrationModule from '@/components/modules/registration/RegistrationModule.vue'
</script>
<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <RegistrationModule />
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
