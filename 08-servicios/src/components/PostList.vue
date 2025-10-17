<template>
  <div>
    <h1>Lista de POSTS</h1>
    ul
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
  </div>
</template>

<script setup>
    import PostService from "../services/PostService.js";
    import { onMounted, ref } from "vue";

    const service = new PostService();
    const posts = service.getAllPosts();

    onMounted(async () => {
      await service.fetchAll();
    });
</script>

<style scoped></style>
