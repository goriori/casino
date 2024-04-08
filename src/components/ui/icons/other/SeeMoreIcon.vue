<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="17"
    viewBox="0 0 25 17"
    fill="none"
  >
    <path
      d="M6.60621 3.55338C8.13349 1.92428 10.2669 1 12.5 1C14.7331 1 16.8665 1.92428 18.3938 3.55338L21 6.5C22 7.5 23.224 8.5 24.5 8.5C23.224 8.5 22 9.5 21 10.5L18.3938 13.4466C16.8665 15.0757 14.7331 16 12.5 16C10.2669 16 8.13348 15.0757 6.60621 13.4466L4 10.5C3 9.5 1.77603 8.5 0.5 8.5C1.77603 8.5 3 7.5 4 6.5L6.60621 3.55338Z"
      :stroke="color"
    />
    <path
      d="M10 8.5C10 7.1193 11.1193 6 12.5 6C13.8807 6 15 7.1193 15 8.5C15 9.8807 13.8807 11 12.5 11C11.1193 11 10 9.8807 10 8.5Z"
      :stroke="color"
    />
  </svg>
</template>

<style scoped lang="scss"></style>
