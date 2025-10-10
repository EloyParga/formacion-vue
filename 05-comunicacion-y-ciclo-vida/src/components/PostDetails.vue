<template>
  <div class="post-details">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <button @click="showAlert">Show Alert</button>
  </div>
</template>

<script setup>
    import { defineProps, defineEmits} from 'vue';
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: 'No content available'
        }
    });
    
    // Emitting event is handled directly in the template with $emit
    const emit = defineEmits(['showAlert']);
    
    function showAlert() {
        alert("Boton Click en "+ props.title + " (Enviado desde el Hijo)");
        emit('showAlert');
    }
    

        
</script>

<style scoped>
  .post-details {
    border: 1px solid #ccc;
    padding: 20px;
    width: 30%;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
</style>