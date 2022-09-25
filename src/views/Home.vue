<template>
    <div class="flex flex-col lg:flex-row pt-12">
        <div class="order-2 lg:order-none lg:basis-44">
            <Menu />
        </div>
        <div class="grow">
            <CodeEditor />
        </div>
        <div class="lg:basis-44">
            <Menu />
        </div>
    </div>
</template>

<script lang="ts">
import CodeEditor from "@/components/CodeEditor.vue";
import Menu from "@/components/Menu.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        CodeEditor,
        Menu
    }
})
</script>

<style scoped>

</style>
    