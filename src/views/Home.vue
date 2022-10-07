<script lang="ts" setup>
import { ref } from 'vue'
import CodeEditor from "@/components/CodeEditor.vue";
import Project from "@/components/Project.vue";
</script>
<template>
  <div class="grow mb-10">
    <CodeEditor  />
  </div>
  <div class="lg:basis-64 lg:ml-20">
    <Project />
  </div>
</template>
<style scoped>

</style>
    