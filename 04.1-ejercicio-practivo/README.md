# 📝 Ejercicio Práctico: Gestión de Profesores

### Objetivo:
Crear un formulario dinámico para registrar profesores utilizando los conceptos aprendidos hasta ahora en Vue.js. Este ejercicio pondrá en práctica el uso de directivas como `v-model`, `v-for`, `v-bind`, `v-on`, y el manejo de formularios con bindeo bidireccional.

---

## 🛠️ Requisitos:

1. **Formulario de Registro:**
   - Crear un formulario que permita registrar la información de un profesor.
   - Campos requeridos:
     - **Nombre Completo** (input de texto).
     - **DNI / NIE** (input de texto).
     - **Asignaturas** (input de texto con botón para agregar múltiples asignaturas).
     - **Email** (input de tipo email).
     - **Documentación entregada** (checkbox).
   - Validar que todos los campos sean obligatorios antes de permitir el registro.

2. **Tabla de Profesores Registrados:**
   - Mostrar en una tabla los datos de los profesores registrados.
   - Cada fila debe incluir:
     - Nombre completo.
     - DNI / NIE.
     - Lista de asignaturas.
     - Email.
     - Estado de la documentación (Entregada o No entregada).

3. **Interactividad:**
   - Usar `v-model` para enlazar los datos del formulario con las propiedades del componente.
   - Usar `v-for` para renderizar dinámicamente las asignaturas y los profesores registrados.
   - Usar `v-on` para manejar eventos como el envío del formulario y la adición de asignaturas.

4. **Estilo:**
   - Aplicar estilos para que el formulario y la tabla sean visualmente atractivos y estén bien organizados.

---

## 💡 Pistas:

### Pista 1:
<details>
<summary>Haz clic aquí para desbloquear la primera pista</summary>
Crea variables reactivas con `ref` para almacenar los datos del formulario:
- `name` para el nombre completo.
- `dni` para el DNI / NIE.
- `subject` para las asignaturas.
- `email` para el correo electrónico.
- `isDocumented` para el estado de la documentación.
</details>

### Pista 2:
<details>
<summary>Haz clic aquí para desbloquear la segunda pista</summary>
Crea un array reactivo llamado `teachers` para almacenar los profesores registrados. Cada profesor debe ser un objeto con las propiedades: `name`, `dni`, `subjects`, `email`, y `isDocumented`.
</details>

### Pista 3:
<details>
<summary>Haz clic aquí para desbloquear la tercera pista</summary>
Usa `v-model` en los campos del formulario para enlazar los datos del formulario con las variables reactivas creadas en la primera pista.
</details>

### Pista 4:
<details>
<summary>Haz clic aquí para desbloquear la cuarta pista</summary>
Crea un método para agregar asignaturas al array `subjects` cuando el usuario haga clic en el botón "Agregar". Usa `v-on:click` o su abreviatura `@click` para manejar este evento.
</details>

### Pista 5:
<details>
<summary>Haz clic aquí para desbloquear la quinta pista</summary>
Crea un método para registrar un profesor. Este método debe:
1. Validar que todos los campos estén completos.
2. Agregar un nuevo objeto al array `teachers` con los datos del formulario.
3. Limpiar los campos del formulario después de registrar al profesor.
</details>

### Pista 6:
<details>
<summary>Haz clic aquí para desbloquear la sexta pista</summary>
Usa `v-for` para iterar sobre el array `teachers` y renderizar dinámicamente una tabla con los datos de los profesores registrados.
</details>

### Pista 7:
<details>
<summary>Haz clic aquí para desbloquear la séptima pista</summary>
Aplica estilos CSS para que el formulario y la tabla sean visualmente atractivos. Usa clases como `.form-group` para organizar los campos del formulario y `.table` para estilizar la tabla.
</details>

---

## 📊 Resultado Esperado:
- Un formulario funcional que permita registrar profesores.
- Una tabla que muestre los datos de los profesores registrados.
- Un diseño limpio y organizado.

---

## 📚 Recursos:
- [Documentación de Vue.js sobre Formularios](https://vuejs.org/guide/essentials/forms.html)
- [Documentación de Vue.js sobre List Rendering](https://vuejs.org/guide/essentials/list.html)

---

✨ **Autor:** Eloy Parga  
📅 **Proyecto:** Formación Vue.js  
📁 **Tema:** 04 - Formularios

¡Manos a la obra! 🚀
