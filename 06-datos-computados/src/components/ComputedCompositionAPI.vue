// Computadas - Composition API - Vue 3
<template>
  <div>
    <input type="text" v-model="mensaje" placeholder="Escribe un mensaje"/>
    <p>{{ mensaje }}</p>
    <p>{{ mensajeReverse }}</p>
  </div>
</template>

<script>
  import { ref, computed} from 'vue'
    
  let mensaje = ref('')
  const mensajeReverse = computed(() => {
        return mensaje.value.split('').reverse().join('')
    })

     
</script>

<style scoped>
  
</style>