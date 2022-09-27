<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String
    },
    class: {
      type: String
    }
  })
</script>
<template>
  <button class="button" :class="class">
  {{text}}
  </button>
</template>
<style scoped>
  .button {
    @apply
    inline-block 
        grow 
        px-6
        py-5
        rounded-lg 
        font-medium 
        text-base 
        leading-tight 
        uppercase 
        shadow-md 
        hover:bg-blue-700 
        hover:shadow-lg 
        focus:bg-blue-700 
        focus:shadow-lg 
        focus:outline-none 
        focus:ring-0 
        active:bg-blue-800 
        active:shadow-lg 
        transition duration-150 ease-in-out
    }
</style>