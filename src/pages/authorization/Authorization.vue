<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AuthorizationModule from '@/components/modules/authorization/AuthorizationModule.vue'

const router = useRouter()
onMounted(async () => {

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
