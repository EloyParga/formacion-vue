# 🖥️ Tema 04 — Formularios en Vue.js

En este tema aprenderemos cómo trabajar con formularios en Vue.js utilizando la directiva `v-model`. Esta directiva es fundamental para crear un **bindeo bidireccional** entre los datos del componente y los campos del formulario, permitiendo que los cambios en el formulario se reflejen automáticamente en los datos y viceversa.

---

## 📘 Explicación del Bindeo Bidireccional

El **bindeo bidireccional** es una característica que permite sincronizar los datos del componente con los valores de los campos del formulario. Esto significa que:
- Si el usuario modifica el valor de un campo del formulario, el dato en el componente se actualiza automáticamente.
- Si el dato en el componente cambia, el valor del campo del formulario también se actualiza.

La directiva `v-model` simplifica este proceso al manejar automáticamente los eventos de entrada y la actualización de datos.

---

## 🔹 Bindeo Bidireccional (`v-model`)

### Ejemplo básico:
```vue
<template>
  <div>
    <h2>Bindeo Bidireccional con v-model</h2>
    <input v-model="nombre" placeholder="Escribe tu nombre" />
    <p>Hola, {{ nombre }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let nombre = ref('');
</script>
```

En este ejemplo:
- El campo de entrada (`<input>`) está vinculado al dato `nombre`.
- Al escribir en el campo, el valor de `nombre` se actualiza automáticamente.
- El cambio en `nombre` se refleja en el mensaje `Hola, {{ nombre }}!`.

---

## 🔹 Utilidades de `v-model`

### 1. **Checkboxes**
Puedes usar `v-model` para trabajar con checkboxes y manejar valores booleanos o arrays.

#### Ejemplo:
```vue
<template>
  <div>
    <h3>Checkbox con v-model</h3>
    <label>
      <input type="checkbox" v-model="aceptaTerminos" />
      Acepto los términos y condiciones
    </label>
    <p>Estado: {{ aceptaTerminos ? 'Aceptado' : 'No aceptado' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let aceptaTerminos = ref(false);
</script>
```

### 2. **Selects**
`v-model` también funciona con menús desplegables (`<select>`).

#### Ejemplo:
```vue
<template>
  <div>
    <h3>Select con v-model</h3>
    <select v-model="paisSeleccionado">
      <option value="es">España</option>
      <option value="mx">México</option>
      <option value="ar">Argentina</option>
    </select>
    <p>País seleccionado: {{ paisSeleccionado }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let paisSeleccionado = ref('es');
</script>
```

---

## 💬 Conclusión

El uso de `v-model` en formularios simplifica enormemente la sincronización de datos entre el DOM y el componente. Es una herramienta poderosa para manejar formularios de manera reactiva y eficiente.

---

## 📚 Recursos Recomendados

- [Documentación oficial de Vue.js sobre v-model](https://vuejs.org/guide/essentials/forms.html)
- [Video YouTube](https://www.youtube.com/watch?v=snHa8kRPjH8&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&index=5)

---

✨ **Autor:** Eloy Parga  
📅 **Proyecto:** Formación Vue.js  
📁 **Tema:** 04 - Formularios

¡Sigue practicando y domina el manejo de formularios en Vue.js! 🚀
