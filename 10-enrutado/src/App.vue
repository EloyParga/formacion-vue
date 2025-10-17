<template>
  <div id="app">
    <!-- Recomendado hacer esto en un componente a parte -->
    <nav>
      <RouterLink to="/">Inicio</RouterLink> |
      <RouterLink to="/about">Sobre Nosotros</RouterLink> |
      <RouterLink to="/contactos">Contactos</RouterLink> |
      <RouterLink to="/servicios">Servicios</RouterLink> |
      <RouterLink to="/blog">Blog</RouterLink>
    </nav>

    <!-- Aquí se mostrarán las vistas -->
    <RouterView />
  </div>
</template>

<script setup>
// No necesitas importar nada más, Vue Router lo hace automáticamente
</script>

<style lang="scss" scoped>
  nav {
    margin: 20px;
  }
  a {
    text-decoration: none;
    color: #42b983;
    font-weight: bold;
  }
  a.router-link-exact-active {
    color: #35495e;
  }
</style>
