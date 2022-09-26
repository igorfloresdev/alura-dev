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
    }
  })
</script>
<template>
  <input :type="type" class="input" :style="'height: ' + height + 'px'" :id="id" :placeholder="placeholder" />
</template>
<style>
  .input {
      @apply
        lg:max-w-[70%]
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
        focus:text-gray-700 focus:bg-white focus:outline-none
    }
</style>