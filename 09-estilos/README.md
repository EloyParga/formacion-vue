# 🎨 Tema 09 — Preprocesadores de Estilo en Vue.js

En este tema aprenderemos a utilizar **preprocesadores CSS** en nuestros proyectos Vue.js, una herramienta muy útil que nos permite escribir **código CSS más limpio, modular y mantenible**.
Además, veremos cómo instalarlos, configurarlos y usarlos correctamente tanto en proyectos nuevos como existentes.

---

## 🧩 Introducción

Un **preprocesador CSS** es una herramienta que amplía las capacidades del CSS tradicional.
Nos permite usar **variables, funciones, anidación, mixins** y muchas otras características avanzadas que facilitan el desarrollo y mantenimiento de los estilos.

➡️ El preprocesador más común es **Sass/SCSS**, aunque también existen **Less** y **Stylus**.

🟢 **Ventajas principales:**

* Código más **estructurado y reutilizable**
* Permite usar **variables** y **mixins**
* Mejora la **organización de estilos**
* Facilita el trabajo en **equipos grandes**

---

## 🗂️ Buenas Prácticas de Estructura

Cuando trabajes con preprocesadores en Vue, es recomendable mantener una estructura clara dentro del proyecto:

```
src/
│
├── assets/
│   ├── styles/
│   │   ├── _variables.scss     # Variables globales
│   │   ├── _mixins.scss        # Mixins y funciones reutilizables
│   │   ├── _base.scss          # Estilos base (reset, tipografía, etc.)
│   │   └── main.scss           # Archivo principal que importa todo lo anterior
│
├── components/
│   ├── Header.vue
│   └── Footer.vue
│
└── App.vue
```

Ejemplo de importación en `main.js`:

```js
import './assets/styles/main.scss';
```

---

## ⚙️ Instalar un Preprocesador en un Proyecto Nuevo

Si has creado tu proyecto con **Vite + Vue**, simplemente instala el preprocesador que desees.

### 🔹 Sass / SCSS

```bash
npm install -D sass
```

### 🔹 Less

```bash
npm install -D less
```

### 🔹 Stylus

```bash
npm install -D stylus
```

Luego, en cualquier componente Vue puedes usarlo así:

```vue
<style lang="scss" scoped>
$color: #42b983;

.container {
  background-color: $color;
  h1 {
    color: white;
  }
}
</style>
```

---

## 🧰 Instalar un Preprocesador en un Proyecto Existente

Si tu proyecto ya está creado y no usaba preprocesadores, el proceso es igual:

1. Instala el preprocesador con `npm install -D sass`
2. Cambia el bloque `<style>` de tus componentes a:

   ```vue
   <style lang="scss" scoped>
   ```
3. Comienza a usar las funcionalidades del preprocesador (variables, anidación, mixins, etc.).

---

## 🌍 Configuración de Acceso Global

Podemos hacer que todas las variables o mixins de SCSS estén disponibles **en todos los componentes sin necesidad de importarlos manualmente**.

Para eso, edita el archivo `vite.config.js`:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixins.scss";
        `
      }
    }
  }
})
```

✅ Así podrás usar variables o mixins globales en cualquier `<style lang="scss">` de tu app.

---

## ✨ Características de un Preprocesador CSS

| Característica              | Descripción                          | Ejemplo (SCSS)                           |
| --------------------------- | ------------------------------------ | ---------------------------------------- |
| **Variables**               | Guardar valores reutilizables        | `$color: #42b983; color: $color;`        |
| **Anidación**               | Escribir selectores dentro de otros  | `.card { h1 { color: red; } }`           |
| **Mixins**                  | Reutilizar bloques de código CSS     | `@mixin redondo { border-radius: 8px; }` |
| **Importación modular**     | Dividir estilos en archivos pequeños | `@import 'variables';`                   |
| **Operaciones y funciones** | Realizar cálculos o transformaciones | `width: (100% / 3);`                     |
| **Extends**                 | Heredar reglas de estilo             | `.boton { @extend .base; }`              |

---

## 📘 Ejemplo Práctico

📁 `src/assets/styles/_variables.scss`

```scss
$color-primario: #42b983;
$padding-base: 16px;
```

📁 `src/components/Card.vue`

```vue
<template>
  <div class="card">
    <h3>Título</h3>
    <p>Contenido de la tarjeta</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: $color-primario;
  padding: $padding-base;
  border-radius: 10px;

  h3 {
    color: white;
  }
}
</style>
```

---

## 💬 Conclusión

Los **preprocesadores de estilo** son una herramienta esencial para desarrollar aplicaciones Vue modernas y mantenibles.
Nos permiten escribir **CSS más potente, organizado y profesional**, especialmente en proyectos grandes o en equipo.

---

## 📚 Recursos Recomendados

* 📖 [Documentación oficial de Vite sobre CSS pre-processors](https://vitejs.dev/guide/features.html#css-pre-processors)
* 📖 [Sass: guía oficial](https://sass-lang.com/guide)
* 🎥 [Curso Vue.js - Estilos y Preprocesadores (YouTube)](https://www.youtube.com/watch?v=snHa8kRPjH8&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i)

---

✨ **Autor:** Eloy Parga
📅 **Proyecto:** Formación Vue.js
📁 **Tema:** 09 - Preprocesadores de Estilo

🚀 *Domina el poder de los estilos escalables y profesionales con SCSS en Vue.js.*


