<script lang="ts" setup>
  const props = defineProps({
    type: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type:String
    },
    height: {
      type: String
    },
    class: {
      type: String
    }
  })
</script>
<template>
  <input :type="type" class="input" :class="class" :style="'height: ' + height + 'px'" :id="id" :placeholder="placeholder" />
</template>
<style>
  .input {
      @apply
        form-control
        block
        w-full
        h-14
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-white/[.16]
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-white
        focus:bg-black/[.40]
        focus:outline-none
    }
  .input::-webkit-color-swatch {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      @apply
        rounded
        border-0
    }
</style>