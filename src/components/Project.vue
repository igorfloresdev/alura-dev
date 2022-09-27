<script lang="ts" setup>
import { ref } from 'vue'
import Input from './Input.vue';
import Select from './Select.vue';
import Subtitle from './Subtitle.vue';
import Button from './Button.vue';
</script>
<template>
  <div class="mb-4">
    <Subtitle text="SEU PROJETO" />
  </div>
  <div>
    <Input type="text" id="exampleFormControlInput1" placeholder="Nome do seu projeto" />
  </div>
  <div class="mt-4">
    <Input type="text" id="exampleFormControlInput1" height="80" placeholder="Descrição do seu projeto" />
  </div>
  <div class="mt-10">
    <Subtitle text="PERSONALIZAÇÃO" />
  </div>  
  <div class="mt-4">
    <Select>
      <option selected>Javascript</option>
      <option value="1">Php</option>
      <option value="2">Python</option>
      <option value="3">Java</option>
    </Select>
  </div>
  <div class="mt-4">
    <Input type="color" id="exampleFormControlInput1"/>
  </div>
  <div class="flex space-x-2 justify-center mt-12">
    <Button text="Salvar projeto" class="bg-[#5081FB] text-[#051D3B]" />
  </div>
</template>