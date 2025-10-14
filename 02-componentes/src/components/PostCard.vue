<template>
    <div class="post-card">
        <h3>{{ title }}</h3>
        <p>{{ body }}</p>
        <PostBtn />
    </div>
</template>

<script>
    import PostBtn from './PostBtn.vue';
    export default {
        name: 'PostCard',
        components: {
            PostBtn
        },
        props: {
            title: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .post-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        margin: 16px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .post-card h3 {
        margin: 0 0 8px;
    }

    .post-card p {
        margin: 0 0 16px;
        color: #555;
    }
</style>