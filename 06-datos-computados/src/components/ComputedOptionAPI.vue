// Computadas - Option API - Vue 2/3
<template>
  <div>
    <input type="text" v-model="mensaje" placeholder="Escribe un mensaje..." />
    <p>{{ mensajeReverse }}</p>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ComputedOptionAPI',
    data() {
      return {
        mensaje: ''
      }
    },
    computed: {
      mensajeReverse() {
        return this.mensaje.split('').reverse().join('')
      }
    }
  })
</script>

<style scoped>
  
</style>