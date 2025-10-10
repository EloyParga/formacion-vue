
# 🖥️ Tema 06 — Datos Computados en Vue.js

En este tema aprenderemos cómo trabajar con **datos computados** en Vue.js, tanto en **Option API** como en **Composition API**. Los datos computados son valores que se derivan de otros datos reactivos y se recalculan automáticamente cuando esos datos cambian, permitiendo que la interfaz se mantenga sincronizada de manera eficiente.

---

## 📘 ¿Qué son los datos computados?

Los **datos computados** (`computed`) son propiedades que **dependen de otros datos reactivos** y se actualizan automáticamente cuando esos datos cambian. Son útiles para:

* Realizar transformaciones de datos sin modificar el estado original.
* Evitar recalcular valores manualmente en el template.
* Mantener la interfaz sincronizada de manera declarativa.

Ejemplo conceptual:

* Si tienes un dato `mensaje = 'Hola'`, un dato computado puede ser `mensajeReverse = 'aloH'`.
* Cada vez que `mensaje` cambie, `mensajeReverse` se recalcula automáticamente.

---

## 🔹 Computed en Option API

En la **Option API** (Vue 2 y Vue 3) los datos computados se declaran dentro de la opción `computed` del componente.

### Ejemplo: `ComputedOptionAPI.vue`

```vue
<template>
  <div>
    <input type="text" v-model="mensaje" placeholder="Escribe un mensaje..." />
    <p>Mensaje original: {{ mensaje }}</p>
    <p>Mensaje invertido: {{ mensajeReverse }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComputedOptionAPI',
  data() {
    return {
      mensaje: ''
    }
  },
  computed: {
    mensajeReverse() {
      return this.mensaje.split('').reverse().join('')
    }
  }
})
</script>
```

✅ Características:

* La propiedad computada `mensajeReverse` **depende de `mensaje`**.
* Se recalcula automáticamente al cambiar `mensaje`.
* Sintaxis agrupada por opciones (`data`, `computed`, etc.).

---

## 🔹 Computed en Composition API

En la **Composition API** (Vue 3) se usan funciones reactivas (`ref`, `computed`) dentro de `<script setup>` o `setup()`.

### Ejemplo: `ComputedCompositionAPI.vue`

```vue
<template>
  <div>
    <input type="text" v-model="mensaje" placeholder="Escribe un mensaje"/>
    <p>Mensaje original: {{ mensaje }}</p>
    <p>Mensaje invertido: {{ mensajeReverse }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const mensaje = ref('');

const mensajeReverse = computed(() => {
  return mensaje.value.split('').reverse().join('');
});
</script>
```

✅ Características:

* `mensaje` es un dato reactivo (`ref`).
* `mensajeReverse` es un **valor computado** que depende de `mensaje`.
* Agrupa la lógica relacionada, facilitando la **reutilización y escalabilidad**.
* Compatible con `<script setup>` para sintaxis más limpia.

---

## 🔹 Diferencias entre Option API y Composition API

| Aspecto              | Option API                                            | Composition API                                  |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| Sintaxis             | Agrupada por opciones (`data`, `computed`, `methods`) | Agrupada por lógica (reactiva y funcional)       |
| Reactividad          | `this.mensaje` dentro de `computed`                   | `mensaje.value` dentro de `computed`             |
| Escalabilidad        | Bien para componentes simples                         | Mejor para componentes grandes y lógica compleja |
| Reutilización        | Mixins o helpers                                      | Composables (funciones reactivas reutilizables)  |
| Curva de aprendizaje | Más fácil al inicio                                   | Requiere entender `ref`, `reactive`, `computed`  |

---

## 💡 Consejos prácticos

1. Usa **computed** siempre que necesites derivar datos de otros reactivos.
2. Evita recalcular manualmente dentro del template con funciones; usa `computed` para optimizar.
3. Si estás empezando, prioriza **Composition API** ya que es el enfoque futuro de Vue 3.
4. Combina `computed` con `watch` para casos donde necesites **efectos secundarios** basados en cambios de datos.

---

## 📚 Recursos recomendados

* [Documentación oficial Vue.js – Computed](https://vuejs.org/guide/essentials/computed.html)
* [Ejemplos en Composition API y Option API](https://vuejs.org/examples/)

---

## 💬 Conclusión

Los **datos computados** son una de las herramientas más poderosas de Vue para mantener la interfaz reactiva de manera eficiente.
Comprender la diferencia entre **Option API** y **Composition API** te permitirá elegir la mejor estructura según el tamaño y la complejidad de tus componentes.

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 06 - Datos Computados

¡Practica creando tus propios datos computados y experimenta con ambas APIs para entender sus ventajas! 🚀

