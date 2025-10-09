# 🧭 Tema 03 — Directivas en Vue.js

<img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue Logo" width="150" />

## 📘 ¿Qué son las Directivas?

En Vue.js, **las directivas** son **atributos especiales** que se colocan en el HTML y que permiten **vincular el DOM con la lógica reactiva de Vue**.  
Todas las directivas comienzan con el prefijo `v-` (por ejemplo, `v-if`, `v-for`, `v-model`).

> 💡 Piensa en las directivas como "instrucciones" que le dicen a Vue cómo debe manipular los elementos del DOM según los datos del componente.

---

## 🧩 Tipos de Directivas Comunes

### 🔹 1. Directivas Selectivas `v-if`, `v-else-if`, `v-else`, `v-show`
Controlan la renderización condicional de elementos.

#### 🧠 Ejemplo práctico:
```html
<p v-if="usuarioActivo">Bienvenido, {{ nombre }}</p>
<p v-else>Inicia sesión para continuar</p>
```

### 🔹 2. Directivas Iterativa `v-for`
Permite renderizar listas de elementos a partir de un array.

#### 🧠 Ejemplo práctico:
```html
<ul>
  <li v-for="(curso, index) in cursos" :key="index">
    {{ curso }}
  </li>
</ul>
```
```javascript
<script>
    export default {
        data() {
            return {
            cursos: ["Vue.js", "React", "Angular"]
            };
        }
    };
</script>
```
#### 🧩 Resultado:
- Vue.js
- React
- Angular




### 🔹 3. `v-bind`
Sirve para **enlazar atributos de HTML** a datos reactivos.

#### 🧠 Ejemplo práctico:
```html
<img v-bind:src="urlImagen" alt="Imagen dinámica" />
<!-- Versión corta -->
<img :src="urlImagen" />
```

```javascript
data() {
  return {
    urlImagen: "https://vuejs.org/images/logo.png"
  };
}
```

### 🔹 4. `v-on`
### 🔹 5. `v-model`


## ⚙️ Directivas Personalizadas

Además de las directivas nativas, podemos crear nuestras propias directivas para manipular el DOM directamente.

``PROXIMAMENTE....``

---

## 🧠 Conceptos Clave

| Directiva | Propósito                  | Ejemplo               |
|-----------|----------------------------|-----------------------|
| `v-if` / `v-else` | Mostrar u ocultar elementos | `v-if="isActive"`     |
| `v-for`   | Repetir elementos          | `v-for="item in lista"` |
| `v-bind`  | Enlazar atributos dinámicos | `:src="imagen"`       |
| `v-on`    | Proximamente           | `proximamente`     | 
| `v-model` | proximamente       | `proximamente`    |

---

## 💬 Conclusión

Las directivas son el corazón de Vue.js, ya que permiten que la vista se actualice automáticamente cada vez que cambian los datos.  
Dominar su uso te permitirá crear interfaces reactivas, limpias y declarativas sin manipular el DOM directamente.

🪄 “En Vue, el DOM se convierte en una extensión viva de tus datos.”

---

## 📚 Recursos Recomendados

- 📘 [Documentación oficial de Directivas - Vue.js](https://vuejs.org/guide/introduction.html)
- 🎥 [Video explicativo — Vue.js Directives (YouTube)](https://www.youtube.com/watch?v=Ln1SN43jtG8&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&index=4)

✨ **Autor:** Eloy Parga  
📅 **Proyecto:** Formación Vue.js  
📁 **Tema:** 03 - Directivas
```

