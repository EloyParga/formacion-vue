/* Ejemplo de v-for */
// Permite renderizar listas de elementos a partir de un array.

<template>
    <div>
        <h2>Directiva Iterativa (v-for)</h2>
        <h3>Array de Strings</h3>
        <!-- Array sin id -->
        <ul>
            <li v-for="(country, index) in countries" :key="index">
                {{ index + 1 }} - {{ country }}
            </li>
        </ul>

        <h3>Array de Objetos</h3>  
        <!-- Array con id -->
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.id }} - {{ user.name }} - {{ user.age }} años
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    //Array de Strings
    let countries = ref([
        'España', 'México', 'Argentina', 'Colombia', 'Perú'
    ]);
    //Array de Objetos
    let users = ref([
        { id: 1, name: 'Juan', age: 30 },
        { id: 2, name: 'María', age: 25 },
        { id: 3, name: 'Pedro', age: 35 },
        { id: 4, name: 'Ana', age: 28 },
    ]);
</script>

<style scoped>
    .iterativa-container {
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

  h3 {
    margin-top: 15px;
    color: #333;
  }

  .list {
    list-style: none;
    padding: 0;
  }

  .list li {
    padding: 5px 0;
    border-bottom: 1px solid #eee;
  }

  .list li:last-child {
    border-bottom: none;
  }
</style>