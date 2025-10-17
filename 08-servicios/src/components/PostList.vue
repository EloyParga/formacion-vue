<template>
  <div>
    <h1>Lista de POSTS</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
    import PostService from "../services/PostService.js";
    import { onMounted } from "vue";

    const service = new PostService();
    const posts = service.getAllPosts();

    onMounted(async () => {
      await service.fetchAll();
    });

</script>

<style scoped></style>
