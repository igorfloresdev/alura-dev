<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String,
      required: true
    }
  })
</script>
<template>
  <h2 class="subtitle">{{text}}</h2>
</template>
<style>
  .subtitle {
      @apply
        tracking-10
        text-xs
        text-white
    }
</style>