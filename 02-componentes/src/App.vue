<template>
  <h1>Lista de POST</h1>
  <PostContainer/>
  <CounterOption/>
</template>

<script>
import PostContainer from './components/PostContainer.vue';
import CounterOption from './components/counterOption.vue';
export default {
  name: 'App',
  components: {
    PostContainer,
    CounterOption
  }
}
</script>

<style>
  h1 {
    text-align: center;
    color: #42b983;
  }
</style>
