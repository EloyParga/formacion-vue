<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/auth">Acceso</router-link>
    </nav>
    <router-view/>
  </header> 
</template>

<script setup>

</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  nav {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;

    a{
       text-decoration: none;
       color: #42b983;
       font-weight: bold;
     }
     &.router-link-exact-active {
      color: #35495e;
    }
  }

</style>
