<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AuthorizationModule from '@/components/modules/authorization/AuthorizationModule.vue'

const router = useRouter()
onMounted(async () => {})
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
@import 'Authorization';
</style>
