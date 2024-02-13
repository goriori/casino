<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { fetchEntityData } from '@/pages/main/Main.events.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import ArrowHowStartIcon from '@/components/ui/icons/other/ArrowHowStartIcon.vue'
import { startItems } from '@/pages/main/Main.options.js'
import AboutInfoIcon from '@/components/ui/icons/other/AboutInfoIcon.vue'
import StatisticsModule from '@/components/modules/statistics/StatisticsModule.vue'

const ProvidersModule = defineAsyncComponent(() =>
  import('@/components/modules/providers/ProvidersModule.vue')
)
const PopularGameModule = defineAsyncComponent(() =>
  import('@/components/modules/popular/PopularGameModule.vue')
)
onMounted(async () => {
  await fetchEntityData()
})
</script>
<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <StatisticsModule />
      <!--      <div class="modules-providers">-->
      <!--        <ProvidersModule />-->
      <!--      </div>-->
      <div class="modules-popular">
        <PopularGameModule />
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
          Перед вами полноценное Kaзинo с качественным наполнением из
          современных игровых автоматов. Пройдя регистрацию, вы получите доступ
          к лицензированным автоматам, и возможность заработать реальные деньги,
          которые можно вывести любым удобным способом, включая платежные
          системы Европы и стран СНГ. 95 % игровых автоматов доступны для
          загрузки с планшета или телефона. Сервис адаптирован для большинства
          смартфонов и сохраняет функционал десктопного издания.
        </div>
      </div>
      <div class="about-image">
        <img src="/images/about/about.png" alt="" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import 'Main';
</style>
