<script lang="ts" setup>
import { ref } from 'vue'
import Button from './Button.vue'
import CodeTextArea from './CodeTextArea.vue'
</script>
<template>
  <div class="flex justify-center grow">
    <div class="h-[492px] grow p-8 rounded-lg bg-[#6BD1FF]" :class="class">
      <CodeTextArea />
    </div>
  </div>
  <div class="flex space-x-2 justify-center mt-8">
    <Button text="VISUALIZAR COM HIGHLIGHT" class="bg-[#5081FB]/[.08] text-white" />
  </div>
</template>