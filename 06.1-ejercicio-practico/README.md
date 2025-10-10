Perfecto 😎 Aquí tienes el README para el **ejercicio práctico 06.1 — Factura con datos computados**, siguiendo el formato de tus anteriores README:

---

# 📝 Ejercicio Práctico 06.1: Factura con Datos Computados

### Objetivo:

Crear un componente de **factura dinámica** donde los **impuestos** se calculen automáticamente como un **dato computado** vinculado directamente con el contenido de la factura. Cada vez que el usuario actualice la información (precio o cantidad de productos), los impuestos y el total de la factura se recalcularán **en tiempo real**.

---

## 🛠️ Requisitos:

1. **Formulario de Productos:**

   * Crear un formulario que permita agregar productos a la factura.
   * Campos por producto:

     * **Nombre del producto** (input de texto)
     * **Cantidad** (input numérico)
     * **Precio unitario** (input numérico)
   * Validar que todos los campos estén completos y sean correctos antes de añadir el producto.

2. **Lista de Productos:**

   * Mostrar los productos agregados en una tabla o lista.
   * Cada fila debe mostrar:

     * Nombre del producto
     * Cantidad
     * Precio unitario
     * Subtotal por producto (Cantidad × Precio unitario)

3. **Cálculo de impuestos y total:**

   * Crear un **dato computado** que calcule los impuestos (por ejemplo, 21% del subtotal de la factura).
   * Crear otro **dato computado** que calcule el **total final** sumando subtotal + impuestos.
   * Los cálculos deben actualizarse automáticamente cuando se cambien los datos de los productos.

4. **Interactividad:**

   * Usar `v-model` para enlazar los campos de cada producto con variables reactivas.
   * Usar `computed` para los impuestos y el total.
   * Usar `v-for` para mostrar dinámicamente la lista de productos.
   * Opcional: añadir un botón para eliminar productos de la lista.

5. **Estilo:**

   * Aplicar estilos para que la factura sea clara y legible.
   * Resaltar el total final y los impuestos.
   * Alinear columnas correctamente en la tabla de productos.

---

## 💡 Pistas:

### Pista 1:

<details>
<summary>Haz clic aquí para desbloquear la primera pista</summary>
Crea un array reactivo llamado `productos` para almacenar los productos de la factura. Cada producto debe ser un objeto con las propiedades: `nombre`, `cantidad` y `precio`.
</details>

### Pista 2:

<details>
<summary>Haz clic aquí para desbloquear la segunda pista</summary>
Usa `v-model` en los campos del formulario para enlazar cada propiedad del nuevo producto con variables reactivas (`nombre`, `cantidad`, `precio`) antes de agregarlo al array.
</details>

### Pista 3:

<details>
<summary>Haz clic aquí para desbloquear la tercera pista</summary>
Crea un método `agregarProducto()` que agregue el objeto del producto al array `productos` y limpie los campos del formulario.
</details>

### Pista 4:

<details>
<summary>Haz clic aquí para desbloquear la cuarta pista</summary>
Crea un dato computado `subtotal` que recorra todos los productos y sume `cantidad × precio` de cada uno.
</details>

### Pista 5:

<details>
<summary>Haz clic aquí para desbloquear la quinta pista</summary>
Crea un dato computado `impuestos` que calcule un porcentaje (por ejemplo, 21%) sobre el `subtotal`.
</details>

### Pista 6:

<details>
<summary>Haz clic aquí para desbloquear la sexta pista</summary>
Crea un dato computado `total` que sume `subtotal + impuestos`. Todos los datos deben actualizarse automáticamente cuando se modifiquen los productos.
</details>

### Pista 7:

<details>
<summary>Haz clic aquí para desbloquear la séptima pista</summary>
Usa `v-for` para iterar sobre el array `productos` y mostrar los datos en una tabla. Añade el `subtotal`, `impuestos` y `total` al final de la tabla.
</details>

### Pista 8:

<details>
<summary>Haz clic aquí para desbloquear la octava pista</summary>
Aplica estilos CSS para resaltar los totales y mejorar la legibilidad: bordes, sombreado de filas, colores para los totales y alineación de columnas numéricas.
</details>

---

## 📊 Resultado Esperado:

* Un formulario funcional que permita agregar productos a la factura.
* Una lista o tabla que muestre los productos agregados con su subtotal.
* Los **impuestos** y el **total final** se actualizan automáticamente en tiempo real cuando se modifica cualquier dato de los productos.
* Diseño limpio y visualmente atractivo.

---

## 📚 Recursos:

* [Documentación de Vue.js sobre Computed](https://vuejs.org/guide/essentials/computed.html)
* [Documentación de Vue.js sobre List Rendering](https://vuejs.org/guide/essentials/list.html)
* [Documentación de Vue.js sobre Form Binding (`v-model`)](https://vuejs.org/guide/essentials/forms.html)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 06.1 - Ejercicio Práctico: Factura Computada

¡Pon a prueba tus conocimientos de **reactividad** y **datos computados** en Vue! 🚀

---

Si quieres, puedo hacer también un **mini ejemplo de código base para este ejercicio** en Composition API listo para que los alumnos lo completen paso a paso.
¿Quieres que haga eso?
