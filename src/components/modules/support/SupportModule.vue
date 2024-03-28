<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'

const email = 'help.spincity@gmail.com'
const onClick = () => {
  const a = document.createElement('a')
  a.href = `mailto:${email}&body=Техподдержка?subject=Вопрос`
  a.click()
}
</script>

<template>
  <div class="support-module">
    <BaseButton rounded="full" color="secondary" @click="onClick">
      <div class="support-content">
        <img src="/images/icons/email.svg" alt="" />
        <div class="support-text">
          <p class="support-text-title">Поддержка</p>
          <p>{{ email }}</p>
        </div>
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'SupportModule';
</style>
