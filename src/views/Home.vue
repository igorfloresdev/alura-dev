<script lang="ts" setup>
import { ref } from 'vue'
import CodeEditor from "@/components/CodeEditor.vue";
import Project from "@/components/Project.vue";
import Menu from "@/components/Menu.vue";
</script>
<template>
  <div class="flex flex-col lg:flex-row pt-12">
    <div class="hidden lg:block lg:basis-64">
      <Menu />
    </div>
    <div class="grow mb-10">
      <CodeEditor />
    </div>
    <div class="lg:basis-64">
      <Project />
    </div>
  </div>
</template>
<style scoped>
</style>
    