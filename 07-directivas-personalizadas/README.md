# 🧩 Tema 07 — Directivas Personalizadas en Vue.js

En este tema aprenderás a crear **tus propias directivas personalizadas** en Vue.js.
Las directivas son una de las herramientas más potentes del framework: te permiten **manipular directamente el DOM** o **agregar comportamientos reutilizables** a los elementos de tu aplicación.

---

## 📘 ¿Qué es una Directiva en Vue?

Una **directiva** es un atributo especial que le dice a Vue que haga algo con un elemento del DOM.
Ya conoces algunas directivas **integradas**, como:

* `v-model` → Enlaza datos del componente con inputs.
* `v-if` / `v-else` → Renderiza condicionalmente.
* `v-for` → Itera listas.
* `v-bind` → Enlaza atributos dinámicos.
* `v-on` → Escucha eventos.

👉 Pero también puedes **crear tus propias directivas** para extender el comportamiento de Vue.

---

## 🧠 ¿Para qué sirven las Directivas Personalizadas?

Las directivas personalizadas son útiles cuando necesitas **manipular elementos del DOM** directamente o **aplicar lógica común** a varios componentes.

### 🔹 Ejemplos de usos típicos:

* Enfocar automáticamente un campo de texto al cargarse (`v-focus`).
* Detectar clics fuera de un elemento (`v-click-outside`).
* Aplicar estilos dinámicos o animaciones personalizadas.
* Controlar la visibilidad de un elemento según permisos de usuario (`v-permission`).

---

## 🔹 Ejemplo básico: Directiva `v-focus`

```vue
<template>
  <div>
    <input v-focus placeholder="El cursor aparecerá aquí automáticamente" />
  </div>
</template>

<script setup>
// Definimos la directiva personalizada
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</script>
```

### 🧩 Explicación:

* **`el`** → es el elemento del DOM al que se aplica la directiva.
* **`mounted`** → es el *hook* del ciclo de vida de la directiva (se ejecuta cuando el elemento está en el DOM).
* Aquí simplemente usamos `el.focus()` para enfocar el input.

---

## 🔹 Ejemplo intermedio: Directiva `v-color`

```vue
<template>
  <div>
    <p v-color="'red'">Este texto será rojo.</p>
    <p v-color="'blue'">Este texto será azul.</p>
  </div>
</template>

<script setup>
const vColor = {
  mounted(el, binding) {
    el.style.color = binding.value
  },
  updated(el, binding) {
    el.style.color = binding.value
  }
}
</script>
```

### 🧩 Explicación:

* **`binding.value`** → obtiene el valor pasado a la directiva (`'red'`, `'blue'`, etc.).
* **`mounted` / `updated`** → aseguran que el color se aplique y actualice cuando cambie el valor.

---

## 🔹 Ejemplo avanzado: Directiva `v-visible`

```vue
<template>
  <div>
    <button @click="toggle">Mostrar / Ocultar</button>
    <p v-visible="isVisible">Este texto puede ocultarse dinámicamente.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(true)
const toggle = () => (isVisible.value = !isVisible.value)

const vVisible = {
  mounted(el, binding) {
    el.style.display = binding.value ? '' : 'none'
  },
  updated(el, binding) {
    el.style.display = binding.value ? '' : 'none'
  }
}
</script>
```

🧩 En este caso, la directiva cambia dinámicamente el estilo `display` del elemento según el valor booleano (`true` o `false`).

---

## 🧠 Hooks del Ciclo de Vida de las Directivas

Cada directiva puede implementar **hooks** (funciones) que se ejecutan en momentos específicos:

| Hook            | Cuándo se ejecuta                         | Ejemplo                       |
| --------------- | ----------------------------------------- | ----------------------------- |
| `created`       | Antes de insertar el elemento en el DOM   | Preparar valores iniciales    |
| `beforeMount`   | Justo antes de montar el elemento         | Configurar observadores       |
| `mounted`       | Cuando el elemento está montado en el DOM | Manipular el DOM directamente |
| `beforeUpdate`  | Antes de actualizar el elemento           | Limpiar efectos previos       |
| `updated`       | Cuando el elemento o su valor cambian     | Aplicar cambios al DOM        |
| `beforeUnmount` | Antes de eliminar el elemento             | Detener listeners o timers    |
| `unmounted`     | Después de eliminar el elemento           | Limpiar recursos              |

---

## 💬 Buenas prácticas

✅ Usa directivas **solo cuando necesites manipular el DOM directamente**.
✅ Si tu lógica depende de datos o componentes, probablemente sea mejor usar **props o composables**.
✅ Prefiere nombres **descriptivos** (`v-focus`, `v-autosize`, `v-draggable`, etc.).
✅ Mantén las directivas **pequeñas y reutilizables**.
✅ Regístralas global o localmente según necesidad.

---

## 🌐 Registro de Directivas

Puedes registrar una directiva:

### 🔸 Localmente (solo en un componente)

```js
<script>
export default {
  directives: { focus: vFocus }
}
</script>
```

### 🔸 Globalmente (disponible en toda la app)

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.mount('#app')
```

---

## 💡 Ejercicio sugerido

Crea una directiva `v-autosize` que **ajuste automáticamente** la altura de un `<textarea>` según el texto que escribas.

---

## 📚 Recursos Recomendados

* [Documentación oficial de Vue.js — Custom Directives](https://vuejs.org/guide/reusability/custom-directives.html)
* [Vue Mastery: Custom Directives Tutorial](https://www.vuemastery.com/)
* [Vue School: Directives Deep Dive](https://vueschool.io/)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 07 - Directivas Personalizadas

¡Domina las directivas y lleva tu control del DOM al siguiente nivel! 🚀

