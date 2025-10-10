<template>
  <div class="post-details">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <button @click="$emit('showAlert')">Show Alert</button>
  </div>
</template>

<script setup>
    defineProps({
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