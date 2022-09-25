<template>
    <div class="flex-1 md:flex pt-12">
        <div class="lg:basis-44">
            <Menu />
        </div>
        <div class="flex justify-center grow ">
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
    