<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Input from './components/Input.vue';
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="px-4">
    <header class="flex pt-7 items-center">
      <div class="grow md:grow-0 lg:basis-64">
        <img src="./assets/logo.svg" alt="Logo Alura-Dev">
      </div>
      <div class="w-5 h-5 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
            fill="#fff" />
        </svg>
      </div>
      <div class="hidden md:flex md:grow justify-center">
        <Input type="text" class="lg:max-w-[70%] md:max-w-[90%]" id="exampleFormControlInput1"
          placeholder="Busque por algo" />
      </div>
      <div class="w-5 h-5 ml-9 md:ml-0 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
          <path
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            fill="#fff" />
        </svg>
      </div>
      <div class="hidden lg:flex basis-64 justify-end items-center">
        <img src="@/assets/photo.png" class="rounded-full" alt="Avatar" />
        <span class="ml-2 text-white">Harry</span>
      </div>
    </header>
    <div class="flex flex-col lg:flex-row pt-12">
      <div class="hidden lg:block lg:basis-64">
        <Menu />
      </div>
        <RouterView />
    </div>
  </div>
</template>

<style>
html {
  background-color: #051D3B;
}

#app {
  font-family: 'infer', sans-serif;
}
</style>
