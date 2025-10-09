/* Ejemplo de Renderizados Selectivos  ( v-if, v-else, v-else-if, v-show )*/
// Las Directivas van a estar relacionados con el renderizado del Virtual DOM
// Diferencias: v-if elimina el elemento del DOM y v-show solo lo oculta

<template>
    <div>
        <h2>Renderizados Selectivos</h2>
        
        <p v-if="age >= 18">Eres mayor de edad</p>
        <p v-else>Eres menor de edad</p>
        <p v-show="age >= 18">Eres mayor de edad</p>
        <p v-show="age < 18">Eres menor de edad</p>

    </div>
</template>

<script setup>
    let age = 10;
</script>

<style scope>
    .selectivas-container {
    padding: 15px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #42b983;
    margin-bottom: 10px;
  }

  .mayor {
    color: #2d862d;
    font-weight: bold;
  }

  .menor {
    color: #d9534f;
    font-weight: bold;
  }
</style>