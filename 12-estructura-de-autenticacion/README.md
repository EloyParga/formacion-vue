
# 🔐 Tema 12 — Estructuras de Autenticación en Vue.js

En este tema aprenderemos a crear **estructuras de autenticación** en aplicaciones Vue.js, entendiendo cómo manejar el **inicio de sesión**, el **registro**, la **gestión de usuarios autenticados** y la **protección de rutas** del enrutador.

La autenticación es una parte esencial en cualquier aplicación moderna: permite controlar el acceso a determinadas secciones de la app y proteger los datos del usuario.

---

## 📘 Introducción

En Vue, la autenticación no está incluida por defecto, pero podemos implementarla fácilmente combinando:

* **Vue Router** → para controlar el acceso a las rutas.
* **Servicios de autenticación** → para centralizar la lógica de login/logout.
* **LocalStorage o SessionStorage** → para guardar el token o sesión.
* **Pinia o Vuex (opcional)** → para manejar el estado global del usuario.

El objetivo es crear una estructura **segura, reutilizable y escalable**.

---

## 🧩 Estructura básica de autenticación

Una estructura común de autenticación en Vue puede verse así:

```
src/
 ┣ 📂router/
 ┃ ┗ index.js
 ┣ 📂views/
 ┃ ┣ LoginView.vue
 ┃ ┣ RegisterView.vue
 ┃ ┗ DashboardView.vue
 ┣ 📂services/
 ┃ ┗ AuthService.js
 ┣ 📂store/
 ┃ ┗ userStore.js (opcional)
 ┗ App.vue
```

---

## 🔹 Desarrollo del servicio de autenticación

Creamos un servicio que gestione toda la lógica relacionada con el login, logout y verificación del usuario.

```js
// src/services/AuthService.js
export default {
  login(email, password) {
    if (email === "admin@vue.com" && password === "123456") {
      const user = { email, token: "abc123token" };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } else {
      throw new Error("Credenciales incorrectas");
    }
  },

  logout() {
    localStorage.removeItem("user");
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }
};
```

---

## 🔹 Integración en el componente de Login

```vue
<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="loginUser">
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Contraseña" type="password" required />
      <button type="submit">Entrar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/AuthService.js";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

async function loginUser() {
  try {
    await AuthService.login(email.value, password.value);
    router.push("/dashboard");
  } catch (e) {
    error.value = e.message;
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
}
.error {
  color: red;
}
</style>
```

---

## 🔹 Protección de rutas con Vue Router

Podemos proteger rutas añadiendo **guardas de navegación**:

```js
// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import AuthService from "../services/AuthService.js";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  { 
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !AuthService.isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
```

Esto garantiza que un usuario **no pueda acceder a rutas privadas** sin estar autenticado.

---

## 🔹 Buenas prácticas

✅ **Centraliza la lógica de autenticación**
Guarda todo el código de login/logout en un único servicio (`AuthService.js`).

✅ **Evita guardar contraseñas en el cliente**
Solo guarda tokens o identificadores seguros.

✅ **Usa router guards para proteger rutas sensibles**
Así evitas accesos no deseados desde el navegador.

✅ **Desloguea correctamente**
Limpia el estado y redirige al usuario a `/login`.

✅ **Usa Pinia o Vuex si tu app crece**
Para compartir el estado del usuario autenticado en varios componentes.

---

## 💬 Conclusión

Con esta estructura puedes implementar **autenticación básica en Vue.js** sin depender de librerías externas.
Si más adelante deseas trabajar con **JWT**, **OAuth** o **Firebase Auth**, esta misma base te servirá como punto de partida sólido.

---

## 📚 Recursos Recomendados

* [Documentación oficial de Vue Router](https://router.vuejs.org/)
* [MDN: Autenticación y autorización](https://developer.mozilla.org/es/docs/Web/Security/Authentication)
* [Tutorial sobre autenticación en Vue.js con LocalStorage (YouTube)](https://www.youtube.com/watch?v=ol_F7wQbJY8)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 12 - Estructuras de Autenticación

💡 *“Autenticar no es solo iniciar sesión, es proteger la experiencia del usuario.”* 🔒


