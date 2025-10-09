<template>
  <div>
    <section>
        <h3>Añadir Profesor</h3>
        <form>
            <div>
                <label for="name">Nombre Completo:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label for="name">DNI / NIE</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label for="subject">Asignaturas:</label>
                <input type="text" id="subject" name="subject" required />
                <button>Agregar</button>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div> <input type="checkbox" name="" id="check"> Documentación entregada</div>

            <button type="submit">Registrar</button>
        </form>
    </section>

    <section>
        <h3>Profesores Registrados</h3>
        <table>

        </table>
    </section>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    let teacher = ref({
        teacherName: '',
        dni: '',
        subjects: [],
        email: '',
        documentation: false
    });

    let teachers = ref([]);
    let subject = ref('');
</script>

<style scoped>
    
</style>