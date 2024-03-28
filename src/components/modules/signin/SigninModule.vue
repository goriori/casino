<script setup>
import { useRouter } from 'vue-router'
import AccountButton from '@/components/ui/buttons/account/AccountButton.vue'
const router = useRouter()

</script>

<template>
  <AccountButton name="signin" @click="router.push('/authorization')" />
</template>

<style scoped lang="scss"></style>