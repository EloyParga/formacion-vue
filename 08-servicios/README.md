# ⚙️ Tema 08 — Servicios en Vue.js

En este tema aprenderemos a **trabajar con servicios** en Vue.js, una técnica esencial para separar la **lógica de negocio** del **código de presentación** en nuestros componentes.
Gracias a los servicios, podemos manejar de forma ordenada la **comunicación con APIs**, realizar **peticiones HTTP** y mantener nuestro proyecto **limpio, reutilizable y fácil de mantener**.


## 🧠 ¿Qué es un servicio?

Un **servicio** es un archivo JavaScript que se encarga de manejar la lógica de comunicación con una API o fuente de datos externa.
Su principal objetivo es **separar la lógica de negocio** (peticiones, procesamiento de datos, validaciones, etc.) del componente que los usa.

📦 En otras palabras:

```
Componente → Servicio → API
```

De esta forma, el componente solo se encarga de **mostrar los datos**, mientras que el servicio se encarga de **obtenerlos o procesarlos**.

---

## 🧩 Estructura básica de un servicio

Los servicios suelen ubicarse dentro de una carpeta llamada `services` dentro de `src`:

```
src/
 ┣ components/
 ┣ services/
 ┃ ┗ usersService.js
 ┗ App.vue
```

Ejemplo básico de un servicio usando **Axios** 👇

```js
// 📁 src/services/usersService.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};
```

✅ Este servicio:

* Llama a una API externa.
* Devuelve los datos procesados.
* Maneja posibles errores.

---

## 🧭 Usando un servicio en un componente

Una vez creado el servicio, lo importamos dentro de un componente Vue:

```vue
<template>
  <div>
    <h2>Lista de usuarios</h2>
    <p v-if="loading">Cargando usuarios...</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} — {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUsers } from '../services/usersService.js';

const users = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    users.value = await getUsers();
  } finally {
    loading.value = false;
  }
});
</script>
```

🔹 Con esto conseguimos:

* Código más limpio.
* Separación clara de responsabilidades.
* Facilidad para **reutilizar** el servicio en otros componentes.

---

## 🧱 Option API vs Composition API

En Vue podemos usar los servicios de dos formas según la **API** que utilicemos.

### 🔸 Option API

```vue
<script>
import { getUsers } from '../services/usersService.js';

export default {
  data() {
    return {
      users: [],
      loading: true
    };
  },
  async mounted() {
    try {
      this.users = await getUsers();
    } finally {
      this.loading = false;
    }
  }
};
</script>
```

### 🔸 Composition API (con `<script setup>`)

Ya lo vimos arriba: usamos `ref()` y `onMounted()` para manejar la lógica reactiva.
Esta forma es más moderna y recomendada en proyectos nuevos.

---

## 🎨 Buenas prácticas al trabajar con servicios

✅ **1. Centraliza la lógica de negocio**
Todos los accesos a APIs deberían pasar por los servicios, no directamente desde los componentes.

✅ **2. Maneja los errores adecuadamente**
Siempre usa `try/catch` y muestra mensajes de error claros al usuario.

✅ **3. Usa variables de entorno**
Define la URL base de tu API en un archivo `.env` para no tenerla hardcodeada:

```
VITE_API_URL=https://jsonplaceholder.typicode.com
```

Luego, puedes usarla en tu servicio:

```js
const API_URL = import.meta.env.VITE_API_URL + '/users';
```

✅ **4. Reutiliza y organiza**
Crea un archivo por tipo de recurso (`usersService.js`, `postsService.js`, etc.).

---

## 💬 Conclusión

* Los **servicios** son una herramienta clave para mantener un código **ordenado y mantenible**.
* Permiten separar la lógica de negocio de los componentes, facilitando su reutilización.
* Junto con la **Composition API**, ofrecen una estructura moderna y profesional.

---

## 📚 Recursos recomendados

* [📘 Documentación oficial de Vue.js — Reusabilidad y composición](https://vuejs.org/guide/reusability/composables.html)
* [🧾 Axios — Documentación oficial](https://axios-http.com/docs/intro)
* [🎥 Video: Cómo trabajar con servicios en Vue.js (YouTube)](https://www.youtube.com/watch?v=qZXt1Aom3Cs)
* [💡 Blog: Separación de responsabilidades con servicios en Vue 3](https://vuejsdevelopers.com/)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 08 - Servicios

💬 “Un buen servicio hace que tu componente respire limpio y libre de lógica innecesaria.” 🚀

