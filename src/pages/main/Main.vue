<script setup>
import { startItems } from '@/pages/main/Main.options.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import ArrowHowStartIcon from '@/components/ui/icons/other/ArrowHowStartIcon.vue'
import AboutInfoIcon from '@/components/ui/icons/other/AboutInfoIcon.vue'
import StatisticsModule from '@/components/modules/statistics/StatisticsModule.vue'
import CasesModule from '@/components/modules/cases/CasesModule.vue'
import CategoryList from '@/components/modules/category-list/CategoryList.vue'
import FilterCategoriesModule from '@/components/modules/filter-categories/FilterCategoriesModule.vue'
import SearchGamesModule from '@/components/modules/search-games/SearchGamesModule.vue'
</script>
<template>
  <div class="page">
    <Header />
    <div class="page-container container">
      <div class="page-modules">
        <StatisticsModule />
        <CasesModule />
        <div class="modules-filters">
          <FilterCategoriesModule />
          <SearchGamesModule />
        </div>
        <div class="modules-categories">
          <CategoryList />
        </div>
      </div>
      <div class="page-how_start">
        <div class="how_start-title">
          <ArrowHowStartIcon />
          <p>Как начать</p>
        </div>
        <div class="how_start-list">
          <div
            class="how_start-item"
            v-for="startItem in startItems"
            :key="startItem.id"
          >
            <div class="how_start-item-image">
              <img :src="startItem.img" alt="" />
            </div>
            <div class="how_start-item-content">
              <div class="how_start-item-title">{{ startItem.title }}</div>
              <div class="how_start-item-description">
                {{ startItem.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-about">
        <div class="about-content">
          <div class="about-title">
            <AboutInfoIcon />
            <p>О нашем казино</p>
          </div>
          <div class="about-description">
            Надёжная площадка для выгодной и безопасной игры в автоматы.
            Посетителям клуба предложен широкий ассортимент азартных игр. В
            коллекцию входят традиционные слоты с барабанами и линиями выплат, а
            также известные настольные развлечения. Зарегистрированные
            пользователи могут получать бонусы, принимать участие в турнирах,
            лотереях и различных акциях. Личная информация клиентов хранится в
            строгой конфиденциальности.
          </div>
        </div>
        <div class="about-image">
          <img src="/images/about/about.png" alt="" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.keys_card {
  max-width: 550px;
}

@import 'Main';
</style>
