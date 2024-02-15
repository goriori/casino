<script setup>
import { useRouter } from 'vue-router'
import AccountButton from '@/components/ui/buttons/account/AccountButton.vue'
import { useStateStore } from '@/store/stateStore.js'

const router = useRouter()
const stateStore = useStateStore()

const onAuthorization = () =>
  (stateStore.globalPopupsModules.authorization.visibility = true)
</script>

<template>
  <AccountButton name="signin" @click="onAuthorization" />
</template>

<style scoped lang="scss"></style>
