// Componente que muestra el ciclo de vida de un componente usando Composition API
<template>
  <div>
    
  </div>
</template>

<script setup>
   import { onMounted, onUpdated, onUnmounted } from 'vue'; 

   onMounted(() => {
     console.log('Componente montado - Composition API');
   });

    onUpdated(() => {
      console.log('Componente actualizado - Composition API');
    });

    onUnmounted(() => {
      console.log('Componente desmontado - Composition API');
    });
</script>

<style scoped>
  
</style>