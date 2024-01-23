<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AuthorizationModule from '@/components/modules/authorization/AuthorizationModule.vue'
</script>
<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <AuthorizationModule/>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.page {
  color: #fff;
  &-modules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 48px 28px;
  }
}


</style>