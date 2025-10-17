<template>
    <div>
        <h1>Artículo de Blog</h1>
        <p>Has seleccionado el artículo con ID: {{ $route.params.id }}</p>
        <p>Contenido del artículo...</p>
        <p>ID del artículo usando ref: {{ articleId }}</p>
    </div>
</template>

<script setup>
    import { onMounted , ref} from 'vue';
    import { useRoute } from 'vue-router';
    
    let articleId = ref('');
    onMounted(() =>{
        const $route = useRoute();
        articleId.value = $route.params.id;
    })
</script>