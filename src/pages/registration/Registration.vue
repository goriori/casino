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
@import 'Registration';
</style>
