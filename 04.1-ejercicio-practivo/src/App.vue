<script setup>
  import TeacherForm from './components/TeacherForm.vue';
</script>

<template>
  <div id="app">
    <h1>Registro de Profesores</h1>
    <div class="form-container">
      <TeacherForm />
    </div>
  </div>
</template>

<style scoped>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f8ff;
    padding: 20px;
    min-height: 100vh;
  }
</style>
