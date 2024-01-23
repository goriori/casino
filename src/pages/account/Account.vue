<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import AccountModule from '@/components/modules/account/AccountModule.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <div class="page-message">
        <p>Напишите нам для вывода средств</p>
        <BaseButton color="primary" outline>
          <p class="btn-text">Связаться с нами</p>
        </BaseButton>
      </div>
      <AccountModule />
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
    gap: 20px;
    padding: 24px 48px;
  }

  &-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ef5a5a;
    border-radius: 16px;
    padding: 10px 20px;
  }
}

.btn-text {
  color: #fff;
}
</style>
