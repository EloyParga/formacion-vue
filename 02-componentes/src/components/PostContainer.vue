<template>
    <div class="post-container">
        <PostCard title="My First Post" body="This is the body of my first post." />
        <PostCard title="Another Post" body="Here's some more content for another post." />
        <PostCard title="Yet Another Post" body="Content keeps coming with yet another post." />
    </div>
</template>

<script setup>
    import PostCard from './PostCard.vue';
    
</script>

<style scoped>
    .post-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }
</style>