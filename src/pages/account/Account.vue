<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AccountModule from '@/components/modules/account/AccountModule.vue'
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-container container">
      <div class="page-modules">
        <AccountModule />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import 'Account';
</style>
