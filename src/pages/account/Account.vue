<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AccountModule from '@/components/modules/account/AccountModule.vue'
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <AccountModule />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.page {
  color: #fff;
  &-modules {
    padding: 24px 48px;
  }
}
</style>
