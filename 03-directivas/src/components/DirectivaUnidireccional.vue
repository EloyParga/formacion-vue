/* Ejemplo de v-bind */
// Enlaza dinámicamente atributos o propiedades del DOM con datos del componente.

<template>
    <div>
        <h2>Directiva de enlace Dinámico (v-bind)</h2>

        <h3>Bindeo de Clase</h3>
        <p :class="{'danger' : isError}">El mensaje se ha enviado correctamente</p>
        <button @click="isError = !isError">Toggle Error</button>

        <h3>Bindeo de Estilos</h3>
        <p :style="{ color: isError ? 'red' : 'green', fontWeight: 'bold' }">
            El mensaje se ha enviado correctamente
        </p>
        
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    let isError = ref(true);
</script>

<style scoped>
    .danger {
        color: red;
        font-weight: bold;
    }
</style>