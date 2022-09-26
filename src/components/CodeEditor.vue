<script lang="ts" setup>
  import { ref } from 'vue'
</script>
<template>
    <div class="flex justify-center grow">
        <div class="h-[492px] grow lg:max-w-[70%] p-8 rounded-lg bg-[#6BD1FF]">
            <div class="w-full h-full p-4 rounded-lg bg-[#141414]">
                <span class="bullet bg-[#FF5F56]"></span>
                <span class="bullet bg-[#FFBD2E] ml-2"></span>
                <span class="bullet bg-[#27C93F] ml-2"></span>
                <textarea class="code-editor" id="exampleFormControlTextarea1"></textarea>
            </div>
        </div>
    </div>
    <div class="flex space-x-2 justify-center mt-8">
        <button type="button"
            class="btn-highlight">Visualizar com highlight</button>
    </div>
</template>
<style scoped>
    .btn-highlight {
      @apply
        inline-block 
        grow 
        lg:max-w-[70%] 
        px-6 py-5 bg-[#5081FB]/[.08] 
        rounded-lg 
        text-white 
        font-medium 
        text-xs 
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
    .bullet {
      @apply
        w-3 h-3
        inline-block
        rounded-full
    }
    .code-editor {
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