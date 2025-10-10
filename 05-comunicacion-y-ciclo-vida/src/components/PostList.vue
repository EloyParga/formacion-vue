<template>
  <div class="container">
    <h2>Post List</h2>
    <div class="post-details">
        <PostDetails 
            v-for="post in info" 
            :key="post.id" 
            :title="post.title" 
            :content="post.content"
            @showAlert="showAlert('Hello from ' + post.title + ' (Enviado desde el Padre)')"
        /> 
    </div>
  </div>
</template>

<script setup>
  import PostDetails from './PostDetails.vue';
  let info = [ 
    { id: 1, title: 'Post 1', content: 'Contenido del post 1' },
    { id: 2, title: 'Post 2'},
    { id: 3, title: 'Post 3', content: 'Contenido del post 3' }
  ];

  function showAlert(msg) {
    alert(msg);
  }
</script>

<style scoped>
  .post-details {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
</style>