<script lang="ts" setup>
  import { ref } from 'vue'
  import Input from './Input.vue';
import Select from './Select.vue';
</script>
<template>
  <h2>SEU PROJETO</h2>
  <div>
    <Input type="text" id="exampleFormControlInput1" placeholder="Nome do seu projeto" />
  </div>
  <div class="mt-4">
    <Input type="text" id="exampleFormControlInput1" height="80" placeholder="Descrição do seu projeto" />
  </div>
  <h2>PERSONALIZAÇÃO</h2>
  <div class="mt-4">
    <Select>
      <option selected>Javascript</option>
      <option value="1">Php</option>
      <option value="2">Python</option>
      <option value="3">Java</option>
    </Select>
  </div>
</template>
<style>

</style>