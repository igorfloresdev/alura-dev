<script setup lang="ts">
import Subtitle from "./Subtitle.vue";
import MenuItem from "./MenuItem.vue"
</script>
<template>
  <div>
    <Subtitle text="MENU" />
  </div>
  <div class="flex mt-4">
    <MenuItem selected text="Editor de Código" icon="icon_code.svg"/>
  </div>
  <div class="flex mt-4">
    <MenuItem text="Comunidade" icon="icon_users.svg"/>
  </div>
</template>
<style scoped>
</style>