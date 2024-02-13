<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import PersonalBonusesModule from '@/components/modules/personal-bonuses/PersonalBonusesModule.vue'
import LoyaltyProgramModule from '@/components/modules/loyalty-program/LoyaltyProgramModule.vue'
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-container container">
      <div class="page-modules">
        <PersonalBonusesModule />
        <LoyaltyProgramModule/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.page {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 53px;

  &-modules {
    display: flex;
    flex-direction: column;
    gap: 53px;
  }
}
</style>
