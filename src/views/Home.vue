<script lang="ts" setup>
import { ref } from 'vue'
import CodeEditor from "@/components/CodeEditor.vue";
import Project from "@/components/Project.vue";
import Menu from "@/components/Menu.vue";
</script>
<template>
  <div class="flex flex-col lg:flex-row pt-12">
    <div class="hidden lg:block lg:basis-44">
      <Menu />
    </div>
    <div class="grow">
      <CodeEditor />
    </div>
    <div class="lg:basis-44">
      <Project />
    </div>
  </div>
</template>
<style scoped>
</style>
    