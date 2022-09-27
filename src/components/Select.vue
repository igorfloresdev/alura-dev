<script lang="ts" setup>
  const props = defineProps({
    ariaLabel: {
      type: String
    }
  })
</script>
<template>
  <select class="select-option"
  :aria-label="ariaLabel">
        <slot></slot>
  </select>
</template>
<style>
  .select-option {
      @apply
        form-control
        block
        w-full
        h-14
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-white/[.16]
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:outline-none
    }
</style>