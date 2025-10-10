# 🔄 Tema 05 — Comunicación Vertical entre Componentes y Ciclo de Vida en Vue.js

En este tema aprenderemos dos conceptos fundamentales en Vue.js:
la **comunicación vertical** entre componentes (padre → hijo e hijo → padre) y el **ciclo de vida** de los componentes.
Estos conceptos son esenciales para construir aplicaciones modulares y comprender cómo Vue maneja el montaje, actualización y destrucción de los componentes.

---

## 🧭 Introducción

En Vue.js, cada componente pasa por una serie de **etapas de vida** desde que se crea hasta que se elimina del DOM.
Además, los componentes deben **comunicarse entre sí** para compartir datos y eventos, especialmente cuando tienen una relación **padre-hijo**.

En este tema veremos cómo:

* Entender y utilizar los **hooks del ciclo de vida**.
* Implementar **comunicación vertical** usando **props** y **emits**.
* Diferenciar el uso del ciclo de vida en **Options API** y **Composition API**.

---

## 🧩 Diagrama del Ciclo de Vida

El ciclo de vida de un componente Vue puede visualizarse como una secuencia de etapas:

```
beforeCreate → created → beforeMount → mounted → beforeUpdate → updated → beforeUnmount → unmounted
```

Cada etapa representa un momento específico del ciclo del componente y nos permite ejecutar código en el momento adecuado.

🖼️ **Ejemplo gráfico (simplificado):**

```text
Creación
 ├─ beforeCreate()
 ├─ created()
Montaje
 ├─ beforeMount()
 ├─ mounted()
Actualización
 ├─ beforeUpdate()
 ├─ updated()
Destrucción
 ├─ beforeUnmount()
 └─ unmounted()
```

---

## ⚙️ Uso del Ciclo de Vida en Options API

En la **Options API**, los hooks del ciclo de vida se definen como métodos dentro del objeto del componente.

```vue
<template>
  <h2>{{ mensaje }}</h2>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'Componente montado correctamente ✅'
    }
  },
  beforeCreate() {
    console.log('beforeCreate → aún no existe la instancia de Vue');
  },
  created() {
    console.log('created → los datos ya están disponibles');
  },
  mounted() {
    console.log('mounted → el componente está en el DOM');
  },
  unmounted() {
    console.log('unmounted → el componente se ha eliminado');
  }
}
</script>
```

---

## 🧠 Uso del Ciclo de Vida en Composition API

En la **Composition API**, utilizamos funciones importadas de Vue para acceder a los hooks.

```vue
<template>
  <h2>{{ mensaje }}</h2>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mensaje = ref('Componente con Composition API');

onMounted(() => {
  console.log('onMounted → el componente está en el DOM');
});

onUnmounted(() => {
  console.log('onUnmounted → el componente se ha eliminado');
});
</script>
```

🔹 **Ventaja:** La Composition API permite agrupar lógica relacionada fácilmente y es más flexible para proyectos grandes.

---

## 🔄 Comunicación Vertical

La **comunicación vertical** se refiere al **flujo de información entre componentes padre e hijo**:

* **Padre → Hijo:** mediante **props**.
* **Hijo → Padre:** mediante **emits**.

---

## 📤 Uso de Props (Padre → Hijo)

Las `props` permiten pasar datos desde un componente padre a un hijo.

**Ejemplo:**

```vue
<!-- ComponentePadre.vue -->
<template>
  <ComponenteHijo :mensaje="mensajePadre" />
</template>

<script setup>
import ComponenteHijo from './ComponenteHijo.vue';
const mensajePadre = 'Hola desde el componente padre 👋';
</script>
```

```vue
<!-- ComponenteHijo.vue -->
<template>
  <p>{{ mensaje }}</p>
</template>

<script setup>
defineProps({
  mensaje: String
});
</script>
```

---

## 📩 Uso de Emits (Hijo → Padre)

`emits` permiten que un componente hijo envíe eventos hacia su padre.

**Ejemplo:**

```vue
<!-- ComponenteHijo.vue -->
<template>
  <button @click="$emit('saludo', '¡Hola desde el hijo!')">Enviar saludo</button>
</template>

<script setup>
defineEmits(['saludo']);
</script>
```

```vue
<!-- ComponentePadre.vue -->
<template>
  <ComponenteHijo @saludo="recibirSaludo" />
</template>

<script setup>
import ComponenteHijo from './ComponenteHijo.vue';

function recibirSaludo(mensaje) {
  console.log(mensaje);
}
</script>
```

---

## 💬 Conclusiones

En este tema aprendimos:

* Qué es el **ciclo de vida** de un componente y cómo aprovechar sus hooks.
* Cómo se diferencian las implementaciones entre **Options API** y **Composition API**.
* Cómo realizar **comunicación vertical** entre componentes usando **props** y **emits**.

Estos conceptos son la base para construir aplicaciones **reactivas, modulares y mantenibles** en Vue.js.

---

## 📚 Recursos Recomendados

* [Documentación oficial — Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)
* [Documentación oficial — Props y Emits](https://vuejs.org/guide/components/props.html)
* [Video YouTube](https://www.youtube.com/watch?v=snHa8kRPjH8&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&index=6)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 05 - Comunicación Vertical entre Componentes y Ciclo de Vida

¡Sigue avanzando! Cada componente tiene su historia… y su ciclo de vida. 🚀


