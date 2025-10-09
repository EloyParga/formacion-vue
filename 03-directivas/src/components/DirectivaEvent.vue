<template>
    <div>
        <h2>Directiva de Eventos (v-on)</h2>

        <button @click="alert('Has hecho click')">Haz Click</button>
        <button v-on:click="alert('Has hecho click')">Haz Click</button>
        <button @dblclick="alert('Has hecho doble click')">Doble Click</button>
        <button @mouseover="alert('Has pasado el ratón por encima')">Mouse Over</button>
        <button @mouseout="alert('Has sacado el ratón de encima')">Mouse Out</button>

    </div>
</template>

<script setup>
    let alert = (msg) => {
        window.alert(msg);
    }
</script>

<style>
    .event-container {
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

  button {
    margin: 5px;
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #369870;
  }
</style>
