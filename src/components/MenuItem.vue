<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String
    },
    icon: {
      type: String
    },
    selected: {
      type: Boolean
    }
  })

  const imageUrl = new URL(`../assets/${props.icon}`, import.meta.url).href

</script>
<template>
  <button class="menu-item" :class="selected ? 'selected' : ''">
    <div class="item-icon flex justify-center">
      <img class="w-6 w-6" :src="imageUrl" alt="">
    </div>
    {{text}}
  </button>
</template>
<style scoped>
  .menu-item {
    @apply
      flex
      items-center
      text-white/[0.56]
      hover:text-white
      hover:duration-300
  }

  .menu-item:hover .item-icon {
    @apply
      transition
      duration-300
      bg-[#5081FB]/[0.30]
    
  }

  .menu-item:hover .item-icon img {
    filter: opacity(100%);
    @apply
      transition
      duration-300
  }

  .item-icon{
    @apply
      w-12
      h-12
      mr-4
      bg-[#5081FB]/[0.16]
      rounded-lg
  }

  .item-icon img{
    filter: opacity(48%)
  }

  .selected {
    @apply
      transition
      text-white
  }

  .selected .item-icon {
    @apply
      transition
      bg-[#5081FB]
  }

  .selected img {
    filter: opacity(100%)
  }
</style>