<template>
    <div class="example-form">
        <h2>Ejemplo Práctico</h2>
        <form>
            <div class="form-group">
                <label for="inputText">Nombre:</label>
                <input id="inputText" type="text" v-model="inputText" placeholder="Escribe tu nombre" />
            </div>
            <div class="form-group">
                <label>
                    <input type="checkbox" v-model="agree" />
                    Acepto términos y condiciones
                </label>
            </div>

            <div class="form-group">
                <select v-model="country">
                    <option value="ESP"> ESPAÑA </option>
                    <option value="UK"> REINO UNIDO </option>
                    <option value="USA"> ESTADOS UNIDOS </option>
                </select>
            </div>
        </form>
        <p class="output">Texto ingresado: <strong>{{ inputText }}</strong></p>
        <p class="output">Acepta términos: <strong>{{ agree ? 'Sí' : 'No' }}</strong></p>
        <p class="output">País seleccionado: <strong>{{ country }}</strong></p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    let inputText = ref('');
    let agree = ref(false);
    let country = ref('ESP');
</script>

<style scoped>
.example-form {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #42b983;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.output {
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
}

strong {
  color: #42b983;
}
</style>