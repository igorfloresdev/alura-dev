<script lang="ts" setup>
  const props = defineProps({
    class: {
      type: String
    }
  })
</script>
<template>
  <div class="w-full h-full p-4 rounded-lg bg-[#141414]">
      <span class="bullet bg-[#FF5F56]"></span>
      <span class="bullet bg-[#FFBD2E] ml-2"></span>
      <span class="bullet bg-[#27C93F] ml-2"></span>
      <textarea class="code-textarea" id="exampleFormControlTextarea1"></textarea>
  </div>
</template>
<style scoped>
    .bullet {
      @apply
        w-3 h-3
        inline-block
        rounded-full
    }
    .code-textarea {
      font-family: 'Roboto Mono', monospace;
      font-size: 14px;
      line-height: 18px;
      
      @apply
        form-control
        block
        w-full h-[346px]
        mt-6 font-normal
        text-white
        bg-transparent
        m-0
        border-transparent
        resize-none focus:border-transparent
        focus:ring-0 focus:outline-none
    }
</style>