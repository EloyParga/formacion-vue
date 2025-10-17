# 🧭 Tema 10 — Enrutado en Vue.js

El enrutado (routing) en Vue.js nos permite crear aplicaciones de una sola página (**SPA - Single Page Applications**) en las que podemos navegar entre diferentes vistas **sin recargar la página**.
Gracias a **Vue Router**, podemos definir rutas, pasar parámetros y controlar la navegación de manera fluida y reactiva.

---

## 🚀 Introducción

Por defecto, una aplicación Vue muestra un solo componente (`App.vue`).
Sin embargo, en aplicaciones reales necesitamos varias **vistas** (por ejemplo: *Inicio, Productos, Detalle, Contacto*).
Para eso usamos **Vue Router**, el sistema oficial de enrutamiento de Vue.

Vue Router nos permite:

* Crear rutas que apunten a diferentes componentes.
* Navegar entre páginas sin recargar.
* Pasar parámetros entre vistas.
* Aplicar estilos y clases activas a los enlaces.

---

## 🧩 Instalación de Vue Router

Si has creado el proyecto con **Vite**, instálalo manualmente:

```bash
npm install vue-router@4
```

Luego, crea una carpeta `src/router/` con un archivo `index.js`:

```js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
```

Y conéctalo a la aplicación en `main.js`:

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
```

---

## 🧭 Enrutado en Vue

En Vue usamos las etiquetas especiales:

* `<RouterLink>` para crear enlaces entre rutas.
* `<RouterView>` para renderizar el componente asociado a la ruta activa.

```vue
<template>
  <div>
    <nav>
      <RouterLink to="/">Inicio</RouterLink> |
      <RouterLink to="/about">Sobre Nosotros</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
```

---

## 🛠️ Creando nuevas rutas

Cada ruta debe tener:

* `path`: la URL.
* `name`: un identificador único.
* `component`: el componente que se muestra.

Ejemplo de agregar una vista de Contacto:

```js
import ContactView from "../views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/contact", component: ContactView },
];
```

---

## 🎨 Estilos en `<RouterLink>`

Vue Router agrega automáticamente la clase `.router-link-exact-active` al enlace activo.
Puedes aprovecharlo para destacar la ruta seleccionada:

```vue
<style scoped>
nav {
  margin: 16px;
}
a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  margin: 0 6px;
}
a.router-link-exact-active {
  color: #35495e;
  text-decoration: underline;
}
</style>
```

---

## 📦 Rutas con parámetros

Podemos definir rutas dinámicas para mostrar información específica, por ejemplo un detalle de usuario o producto:

```js
{
  path: "/usuario/:id",
  name: "usuario",
  component: () => import("../views/UsuarioView.vue"),
}
```

* `:id` es un parámetro dinámico.
* Se accede desde el componente con el objeto **`$route.params`**.

---

## 🧠 Buenas prácticas: llamada a rutas

En lugar de escribir rutas manualmente en strings, usa **nombres de rutas** definidos en el router.
Esto mejora el mantenimiento y reduce errores.

```vue
<RouterLink :to="{ name: 'usuario', params: { id: 5 } }">
  Ver usuario 5
</RouterLink>
```

También puedes navegar desde el script con:

```js
import { useRouter } from "vue-router";

const router = useRouter();
router.push({ name: "about" });
```

---

## 🔄 Paso de parámetros con RouterLink

Podemos pasar parámetros fácilmente usando **binding dinámico** (`:to`):

```vue
<RouterLink :to="{ name: 'usuario', params: { id: 1 } }">
  Ver usuario 1
</RouterLink>
```

Esto generará automáticamente una URL como:
`/usuario/1`

---

## 📖 Lectura de parámetros desde el componente

Para acceder a los parámetros desde el componente de destino (`UsuarioView.vue`):

```vue
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log("ID del usuario:", route.params.id);
</script>
```

---

## 🧩 Conclusión

El sistema de enrutado de Vue Router es esencial para construir aplicaciones modernas y escalables.
Permite una navegación fluida, parámetros dinámicos y separación lógica de vistas, haciendo nuestras SPA más ordenadas y fáciles de mantener.

---

## 📚 Recursos recomendados

* 📘 [Documentación oficial de Vue Router](https://router.vuejs.org/)
* 🎥 [Curso de Vue 3 - Enrutamiento explicado](https://www.youtube.com/watch?v=f2K1bG9rF5g)
* 💡 [Ejemplo práctico con rutas dinámicas](https://stackblitz.com/edit/vue-router-example)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 10 - Enrutado

> 🚀 ¡Domina el enrutado y lleva tus aplicaciones Vue al siguiente nivel!
