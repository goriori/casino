<script setup>
import AccountButton from '@/components/ui/buttons/account/AccountButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="personal__account-module" @click="router.push('/account')">
    <AccountButton name="personal" />
  </div>
</template>

<style scoped lang="scss"></style>
