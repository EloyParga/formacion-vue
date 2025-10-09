<template>
  <div id="app">
    <h1>Formularios</h1>

    <div class="form-container">
      <ExampleForm />
    </div>
   
  </div>
</template>

<script setup>
import ExampleForm from './components/ExampleForm.vue'
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  min-height: 100vh;
}

h1 {
  color: #42b983;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>