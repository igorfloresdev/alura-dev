<script lang="ts" setup>
import { ref } from 'vue'
import Input from './Input.vue';
import Select from './Select.vue';
import Subtitle from './Subtitle.vue';
import Button from './Button.vue';

const emits = defineEmits(['editorColor'])

const nome: String = ""

const showLog = (): void => {
  console.log(nome)
}

</script>
<template>
  <div class="mb-4">
    <Subtitle text="SEU PROJETO" />
  </div>
  <div>
    <Input v-model="nome" type="text" id="exampleFormControlInput1" placeholder="Nome do seu projeto" />
  </div>
  <div class="mt-4">
    <Input type="text" id="exampleFormControlInput1" height="80" placeholder="Descrição do seu projeto" />
  </div>
  <div class="mt-10">
    <Subtitle text="PERSONALIZAÇÃO" />
  </div>
  <div class="md:flex lg:block mt-4">
    <div class="md:w-full md:mr-4">
      <Select>
        <option selected>Javascript</option>
        <option value="1">Php</option>
        <option value="2">Python</option>
        <option value="3">Java</option>
      </Select>
    </div>
    <div class="mt-4 md:mt-0 md:w-full lg:mt-4">
      <Input type="color" id="exampleFormControlInput1" />
    </div>
  </div>
  <div class="flex space-x-2 justify-center mt-12">
    <Button @click="showLog()" text="Salvar projeto" class="bg-[#5081FB] text-[#051D3B]" />
  </div>
</template>