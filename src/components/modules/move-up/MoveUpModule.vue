<script setup>
import MoveUpIcon from '@/components/ui/icons/other/MoveUpIcon.vue'
import { moveTopUp } from '@/components/modules/move-up/MoveUpModule.events.js'
</script>

<template>
  <MoveUpIcon @click="moveTopUp" />
</template>

<style scoped lang="scss"></style>
