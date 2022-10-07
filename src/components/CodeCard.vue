<script lang="ts" setup>
import CodeTextArea from "./CodeTextArea.vue";
import CodeComunityDesc from "./CodeComunityDesc.vue";
</script>
<template>
  <div class="code-card mb-8">
    <CodeTextArea />
    <div class="p-6">
      <CodeComunityDesc />
    </div>
  </div>
</template>
<style scoped>
.code-card {
  @apply 
  bg-black/[0.16] 
  rounded-lg 
  shadow-lg
}
</style>