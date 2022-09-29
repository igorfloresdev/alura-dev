<script setup lang="ts">
import Subtitle from "./Subtitle.vue";
import MenuItem from "./MenuItem.vue"
import { reactive, ref } from "vue";
import router from "@/router";

const menuItems: {name: string; icon: string; routerPath: string; selected: boolean}[] = reactive([
  {
    name: "Editor de Código",
    icon: "icon_code.svg",
    routerPath: "/",
    selected: true
  },
  {
    name: "Comunidade",
    icon: "icon_users.svg",
    routerPath: "/comunity",
    selected: false
  }
])

const goToRouter = ((routerPath: string, index: number):void => {
  menuItems.forEach(menuItem => menuItem.selected = false)
  menuItems[index].selected = true
  router.push(routerPath)
})

</script>
<template>
  <div>
    <Subtitle text="MENU" />
  </div>
  <div class="flex mt-4" v-for="(menuItem, index) in menuItems">
    <MenuItem @click="goToRouter(menuItem.routerPath, index)" :selected="menuItem.selected" :text="menuItem.name" :icon="menuItem.icon"/>
  </div>
</template>
<style scoped>
</style>