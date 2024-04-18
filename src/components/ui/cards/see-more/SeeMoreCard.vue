<script setup>
import SeeMoreIcon from '@/components/ui/icons/other/SeeMoreIcon.vue'
</script>

<template>
  <article class="see-more">
    <div class="see-container">
      <SeeMoreIcon color="#d5a848" />
      <p>Посмотреть еще</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.see {
  &-more {
    width: 100%;
    background-color: #1e1e1e;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    &:active {
      transition: 0.1s opacity ease-in-out;
      opacity: 0.5;
    }
  }

  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex: 1 0 100px;
    color: #d5a848;
  }
}
</style>
