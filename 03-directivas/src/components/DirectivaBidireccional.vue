<template>
    <div>
        <h2>Ejemplo Práctico</h2>
        <form>
            <input type="text" v-model="inputText" />
        </form>
        <p>{{ inputText }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    let inputText = ref('');
</script>

<style scoped>
</style>