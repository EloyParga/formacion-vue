<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Iniciar sesión</h1>

      <form @submit.prevent="loginUser">
        <!-- Campo Email -->
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="usuario@ejemplo.com"
            required
          />
        </div>

        <!-- Campo Password -->
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="••••••••"
            required
          />
        </div>

        <!-- Mensaje de error -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

        <!-- Botón -->
        <button type="submit" class="btn-login" @click="authUser">Acceder</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AuthService } from "@/services/AuthService";

let email = ref("");
let password = ref("");

const authUser= async () => {
  const auth = new AuthService();
  const response = await auth.login(email.value, password.value);  
  if (response.success) {
    // Redirigir o actualizar la UI según sea necesario
    console.log("Inicio de sesión exitoso");
  } else {
    errorMessage.value = response.message || "Error al iniciar sesión";
  }
}
</script>

<style scoped lang="scss">
.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #001e50, #00aaff);
  padding: 20px;
}

.auth-card {
  background: #fff;
  padding: 40px 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    margin-bottom: 20px;
    color: #001e50;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    text-align: left;

    label {
      font-weight: 500;
      color: #333;
      display: block;
      margin-bottom: 6px;
    }

    input {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 16px;
      transition: 0.3s;

      &:focus {
        border-color: #00aaff;
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 170, 255, 0.2);
      }
    }
  }

  .error {
    color: #e53935;
    font-weight: 500;
  }

  .btn-login {
    background-color: #001e50;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    transition: background 0.3s;

    &:hover {
      background-color: #002c7a;
    }
  }
}
</style>
