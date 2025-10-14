# 🧩 Tema 02 — Componentes en Vue.js

En este tema aprenderemos a trabajar con **componentes** en Vue.js, entendiendo qué son, cómo se crean y cómo podemos usarlos de forma eficiente.
También veremos las **dos formas principales de trabajar con componentes en Vue 3**: la **Options API** y la **Composition API**, comprendiendo sus diferencias y cuándo conviene utilizar una u otra.

---

## 🧱 ¿Qué son los Componentes?

Los componentes son **bloques reutilizables de interfaz** que permiten dividir una aplicación en partes más pequeñas y manejables.
Cada componente tiene su propia lógica, plantilla (HTML), estilos y comportamiento, lo que mejora la organización y escalabilidad del proyecto.

Un componente en Vue puede entenderse como una “mini aplicación” dentro de otra.

🎯 **Ventajas de usar componentes:**

* Reutilización de código.
* Mantenimiento más sencillo.
* Separación clara de responsabilidades.
* Facilita el trabajo en equipo.

---

## 🔹 Options API

La **Options API** es la forma tradicional de crear componentes en Vue (usada antes de Vue 3).
Se basa en definir las **opciones del componente** dentro del objeto exportado: `data`, `methods`, `computed`, `props`, etc.

### Ejemplo:

```vue
<template>
  <div>
    <h2>Componente con Options API</h2>
    <p>Mensaje: {{ mensaje }}</p>
    <button @click="cambiarMensaje">Cambiar Mensaje</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'Hola desde Options API'
    }
  },
  methods: {
    cambiarMensaje() {
      this.mensaje = 'Mensaje actualizado 🎉';
    }
  }
}
</script>
```

📘 **Características clave:**

* La lógica está organizada por **tipo de opción** (datos, métodos, etc.).
* Es muy **legible para principiantes**.
* Puede resultar **poco flexible** en componentes grandes o complejos.

---

## 🔹 Composition API

La **Composition API**, introducida en Vue 3, es un enfoque más moderno que organiza el código **por funcionalidad** y no por tipo.
Se basa en el uso del **hook `setup()`** y las **funciones reactivas** como `ref()` y `reactive()`.

### Ejemplo:

```vue
<template>
  <div>
    <h2>Componente con Composition API</h2>
    <p>Mensaje: {{ mensaje }}</p>
    <button @click="cambiarMensaje">Cambiar Mensaje</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let mensaje = ref('Hola desde Composition API')

function cambiarMensaje() {
  mensaje.value = 'Mensaje actualizado 🎉'
}
</script>
```

📗 **Características clave:**

* Permite **organizar mejor la lógica** cuando el componente crece.
* Facilita la **reutilización de código** mediante *composables*.
* Es el **estándar recomendado** para nuevos proyectos en Vue 3.

---

## ⚖️ Diferencias entre Options API y Composition API

| Característica          | Options API 🧱                       | Composition API 🧬                  |
| ----------------------- | ------------------------------------ | ----------------------------------- |
| Sintaxis                | Basada en un objeto `export default` | Usa `setup()` y funciones reactivas |
| Organización del código | Por tipo (data, methods, computed)   | Por funcionalidad                   |
| Reutilización           | Más limitada                         | Muy flexible (composables)          |
| Curva de aprendizaje    | Más fácil para principiantes         | Más avanzada, pero potente          |
| Compatibilidad          | Compatible con Vue 2 y 3             | Solo disponible en Vue 3            |

---

## 🧠 Ejemplo práctico de uso de componentes

Supongamos que tenemos un componente `Saludo.vue` y queremos usarlo dentro de `App.vue`:

### `Saludo.vue`

```vue
<template>
  <h3>👋 ¡Hola, {{ nombre }}!</h3>
</template>

<script setup>
defineProps({
  nombre: String
})
</script>
```

### `App.vue`

```vue
<template>
  <div>
    <h1>Bienvenido a mi aplicación Vue</h1>
    <Saludo nombre="Eloy" />
  </div>
</template>

<script setup>
import Saludo from './components/Saludo.vue'
</script>
```

---

## 💬 Conclusión

Vue nos ofrece **dos formas poderosas de trabajar con componentes**:

* La **Options API**, ideal para proyectos pequeños o quienes inician.
* La **Composition API**, pensada para aplicaciones grandes, escalables y más modernas.

Entender ambas te permitirá escribir código más limpio, modular y mantenible.

---

## 📚 Recursos Recomendados

* [📖 Documentación oficial — Componentes en Vue.js](https://vuejs.org/guide/essentials/component-basics.html)
* [🎥 Video: Options API vs Composition API — Explicación clara](https://www.youtube.com/watch?v=3dHNOWTI7H8)
* [📘 Blog: Cuándo usar Composition API](https://vuejsdevelopers.com/2020/03/16/vue-3-composition-api/)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 02 - Componentes

Aprende a **pensar en componentes** y construye interfaces modulares y reutilizables. 🚀

