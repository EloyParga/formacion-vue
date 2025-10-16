<template>
    <div class="factura-container">
        <h2>Factura Computada</h2>

        <!-- Formulario -->
        <form @submit.prevent="agregarProducto" class="form-producto">
            <input
                v-model="nombre"
                type="text"
                placeholder="Nombre del producto"
                required
            />
            <input
                v-model.number="cantidad"
                type="number"
                placeholder="Cantidad"
                min="1"
                required
            />
            <input
                v-model.number="precio"
                type="number"
                placeholder="Precio unitario"
                step="0.01"
                min="0"
                required
            />
            <button type="submit">Agregar</button>
        </form>

        <!-- Tabla de productos -->
        <table v-if="productos.length" class="tabla-factura">
            <thead>
                <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio (€)</th>
                <th>Subtotal (€)</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prod, index) in productos" :key="index">
                <td>{{ prod.nombre }}</td>
                <td>{{ prod.cantidad }}</td>
                <td>{{ prod.precio.toFixed(2) }}</td>
                <td>{{ (prod.cantidad * prod.precio).toFixed(2) }}</td>
                <td>
                    <button class="btn-eliminar" @click="eliminarProducto(index)">
                    ❌
                    </button>
                </td>
                </tr>
            </tbody>
        </table>

        <!-- Resumen de totales -->
        <div v-if="productos.length" class="resumen">
            <p>Subtotal: <strong>{{ subtotal.toFixed(2) }} €</strong></p>
            <p>Impuestos (21%): <strong>{{ impuestos.toFixed(2) }} €</strong></p>
            <p class="total">Total: <strong>{{ total.toFixed(2) }} €</strong></p>
        </div>

        <p v-else class="no-productos">No hay productos añadidos aún.</p>

    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    // Campos del formulario
    const nombre = ref('')
    const cantidad = ref(1)
    const precio = ref(0)

    // Array de productos
    const productos = ref([])

    // Método para agregar un producto
    function agregarProducto() {
        if (!nombre.value || cantidad.value <= 0 || precio.value <= 0) {
            alert('Completa correctamente todos los campos')
            return
        }

        productos.value.push({
            nombre: nombre.value,
            cantidad: cantidad.value,
            precio: precio.value
        })

        // Limpiar campos
        nombre.value = ''
        cantidad.value = 1
        precio.value = 0
    }

    // Eliminar producto por índice
    function eliminarProducto(index) {
        productos.value.splice(index, 1)
    }

    // Datos computados
    const subtotal = computed(() =>
        productos.value.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    )

    const impuestos = computed(() => subtotal.value * 0.21)

    const total = computed(() => subtotal.value + impuestos.value)
</script>

<style scoped>
    .factura-container {
    max-width: 700px;
    margin: 2rem auto;
    padding: 2rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
    text-align: center;
    color: #333;
    margin-bottom: 1.5rem;
    }

    .form-producto {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    }

    .form-producto input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    }

    .form-producto button {
    background-color: #42b883;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    }

    .form-producto button:hover {
    background-color: #36a372;
    }

    .tabla-factura {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    }

    .tabla-factura th,
    .tabla-factura td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    }

    .tabla-factura th {
    background-color: #f5f5f5;
    }

    .btn-eliminar {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    }

    .resumen {
    text-align: right;
    border-top: 2px solid #eee;
    padding-top: 10px;
    }

    .resumen p {
    margin: 5px 0;
    font-size: 1.1rem;
    }

    .total {
    font-weight: bold;
    color: #42b883;
    font-size: 1.3rem;
    }

    .no-productos {
    text-align: center;
    color: #999;
    margin-top: 20px;
    }
</style>