/* Ejemplo de Renderizados Selectivos  ( v-if, v-else, v-else-if, v-show)*/
// Las Directivas van a estar relacionados con el renderizado del Virtual DOM

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

</style>