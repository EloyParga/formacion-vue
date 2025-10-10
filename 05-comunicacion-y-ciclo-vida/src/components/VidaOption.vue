// Componente que muestra el ciclo de vida de un componente en Vue 3 OPCTION API

<template>
  <div>
    
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
    name: 'VidaOption',
    
    created() {
      console.log('Componente creado');
    },
    mounted() {
      console.log('Componente montado');
    },
    updated() {
      console.log('Componente actualizado');
    },
    unmounted() {
      console.log('Componente desmontado');
    }

  })
</script>

<style scoped>
  
</style>
