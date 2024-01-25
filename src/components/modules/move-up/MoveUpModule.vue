<script setup>
import { moveTopUp } from '@/components/modules/move-up/MoveUpModule.events.js'
import MoveUpIcon from '@/components/ui/icons/other/MoveUpIcon.vue'


</script>

<template>
  <MoveUpIcon @click="moveTopUp" />
</template>

<style scoped lang="scss"></style>
