# 🌱 Tema 01 — Fundamentos de Vue.js

En este primer tema aprenderemos los **conceptos esenciales de Vue.js**, uno de los frameworks más populares y potentes para crear interfaces de usuario interactivas.
Comprenderemos qué es Vue, cómo se estructura una aplicación, las distintas formas de instalarlo y cómo se organiza su flujo interno.

---

## 🌀 ¿Qué es Vue.js?

**Vue.js** es un **framework progresivo** de JavaScript para construir interfaces de usuario.
Su enfoque es incremental: puedes usarlo para mejorar una página existente o para construir **aplicaciones SPA (Single Page Applications)** completas.

Vue destaca por ser:

* 🧩 **Reactivo**: los cambios en los datos se reflejan automáticamente en la vista.
* ⚙️ **Declarativo**: describes el resultado y Vue se encarga de cómo lograrlo.
* 🚀 **Ligero y rápido**: con un tamaño reducido y excelente rendimiento.
* 💡 **Fácil de aprender**: su curva de aprendizaje es más suave que la de otros frameworks como React o Angular.

![Logo Vue.js](https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg)

---

## 🏗️ Patrón de Arquitectura: MVVM

Vue se basa en el patrón **MVVM (Model-View-ViewModel)**, que separa la lógica de negocio de la interfaz de usuario:

| Parte              | Descripción                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| **Model (M)**      | Contiene los datos y la lógica de negocio.                                   |
| **View (V)**       | Representa la interfaz de usuario (HTML + CSS).                              |
| **ViewModel (VM)** | Actúa como un puente entre la vista y el modelo, gestionando la reactividad. |

📊 **Esquema visual del patrón MVVM:**

```
 ┌─────────────┐        ┌──────────────┐        ┌─────────────┐
 │   Model     │ <----> │  ViewModel   │ <----> │    View     │
 └─────────────┘        └──────────────┘        └─────────────┘
```

Este patrón permite que los datos y la interfaz estén **sincronizados automáticamente**, gracias al sistema reactivo de Vue.

---

## ⚙️ Cómo usar Vue: CDN vs CLI

Existen dos formas principales de empezar a usar Vue.js:

### 🔹 1. Usando un **CDN**

Ideal para proyectos pequeños o para experimentar rápidamente.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primer Vue</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{ mensaje }}</h1>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return { mensaje: '¡Hola desde Vue CDN!' }
      }
    })
    app.mount('#app')
  </script>
</body>
</html>
```

✅ **Ventajas:**

* Rápido y sin instalación.
* Perfecto para prototipos o demos.

❌ **Desventajas:**

* No escalable para proyectos grandes.
* Sin herramientas de compilación modernas.

---

### 🔹 2. Usando el **CLI o Vite**

Para proyectos reales y escalables, usamos herramientas como **Vite**, que permiten una configuración profesional con soporte para módulos, hot reload, y más.

---

## 🚀 Creando un Proyecto Vue con Vite

Para crear un nuevo proyecto con **Vite**, sigue estos pasos:

```bash
# 1️⃣ Crear un nuevo proyecto
npm create vite@latest mi-proyecto

# 2️⃣ Seleccionar "Vue" o "Vue + JavaScript"
# 3️⃣ Acceder al directorio
cd mi-proyecto

# 4️⃣ Instalar dependencias
npm install

# 5️⃣ Iniciar el servidor de desarrollo
npm run dev
```

Tu servidor estará disponible normalmente en:
📍 `http://localhost:5173/`

---

## 🗂️ Estructura de Archivos en un Proyecto Vue

Una vez creado el proyecto, encontrarás una estructura similar a esta:

```
mi-proyecto/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js
    ├── App.vue
    └── components/
        └── HelloWorld.vue
```

🔍 **Descripción:**

* **index.html:** punto de entrada del proyecto.
* **main.js:** archivo principal donde se monta la aplicación Vue.
* **App.vue:** componente raíz que contiene la estructura base.
* **components/:** carpeta para componentes reutilizables.
* **vite.config.js:** configuración del entorno Vite.

---

## 🔄 Flujo y Punto de Entrada

El flujo de ejecución básico en un proyecto Vue con Vite es el siguiente:

```
index.html → main.js → App.vue → Componentes hijos
```

📘 **Ejemplo de `main.js`:**

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

👉 Aquí, Vue crea una instancia de la aplicación y la **monta en el elemento con id="app"** definido en `index.html`.

---

## 🧩 Estructura básica de un componente

Los componentes en Vue se definen usando la extensión `.vue` y tienen **tres secciones principales**:

```vue
<template>
  <h1>{{ mensaje }}</h1>
</template>

<script>
export default {
  data() {
    return { mensaje: 'Hola desde mi primer componente' }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</
```
