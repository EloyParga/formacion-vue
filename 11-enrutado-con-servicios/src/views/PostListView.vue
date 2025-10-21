<template>
    <div>
      <h1> Listado de posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
    import { onMounted, defineComponent } from 'vue';
    import PostService from '../services/PostService';
    const service = new PostService();
    const posts = service.getPosts();
  
    onMounted (async () => {
      const data = await service.fetchAll();
    });
  </script>
  
  <style scoped lang="scss">
    
  </style>