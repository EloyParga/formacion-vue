<template>
  <div class="app-container">
    <h1>Directivas Vue</h1>
    <div class="components-grid">
      <div class="component">
        <DirectivasSelectivas />
      </div>
      <div class="component">
        <DirectivaIterativa />
      </div>
      <div class="component">
        <DirectivaUnidireccional />
      </div>
      <div class="component">
        <DirectivaBidireccional />
      </div>
      <div class="component">
        <DirectivaEvent />
      </div>
    </div>
  </div>
</template>

<script setup>
  import DirectivasSelectivas from './components/DirectivasSelectivas.vue';
  import DirectivaIterativa from './components/DirectivaIterativa.vue';
  import DirectivaUnidireccional from './components/DirectivaUnidireccional.vue';
  import DirectivaBidireccional from './components/DirectivaBidireccional.vue';
  import DirectivaEvent from './components/DirectivaEvent.vue';
</script>

<style scoped>
  .app-container {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #42b983;
    margin-bottom: 30px;
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .component {
    padding: 15px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
