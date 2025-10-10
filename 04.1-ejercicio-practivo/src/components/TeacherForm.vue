<template>
  <div>
    <section>
        <h3>Añadir Profesor</h3>
            <div>
                <label for="name">Nombre Completo:</label>
                <input v-model="teacher.teacherName" type="text" id="name" name="name"  />
            </div>
            <div>
                <label for="name">DNI / NIE</label>
                <input v-model="teacher.dni" type="text" id="name" name="name"  required/>
            </div>
            <div>
                <label for="subject">Asignaturas:</label>
                <input v-model="subject" type="text" id="subject" name="subject"  />
                <button @click="addSubject">Agregar</button>
            </div>
            <div>
                <ul>
                    <li v-for="(elm, i) in teacher.subjects" :key="i">{{ elm }}</li>
                </ul>
            </div>
            <div>
                <label for="email">Email:</label>
                <input v-model="teacher.email" type="email" id="email" name="email"  />
            </div>

            <div> <input v-model="teacher.documentation" type="checkbox" name="" id="check"> Documentación entregada</div>

            <button @click="addTeacher" type="submit">Registrar</button>
    </section>

    <section>
        <h3>Profesores Registrados</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>DNI/NIE</th>
                    <th>Asignaturas</th>
                    <th>Email</th>
                    <th>Documentación</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tch, index) in teachers" :key="index">
                    <td>{{ tch.teacherName }}</td>
                    <td>{{ tch.dni }}</td>
                    <td>
                        <ul>
                            <li v-for="(subj, i) in tch.subjects" :key="i">{{ subj }}</li>
                        </ul>
                    </td>
                    <td>{{ tch.email }}</td>
                    <td>{{ tch.documentation ? 'Sí' : 'No' }}</td>
                </tr>
            </tbody>
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

    const addSubject = () => {
        if (subject.value && !teacher.value.subjects.includes(subject.value)) {
            teacher.value.subjects.push(subject.value);
            subject.value = '';
        }
    }

    const addTeacher = () => {
        if (teacher.value.teacherName) {
            teachers.value.push({ ...teacher.value });
            teacher.value = {
                teacherName: '',
                dni: '',
                subjects: [],
                email: '',
                documentation: false
            };
        } else {
            alert('Por favor, complete todos los campos obligatorios.');
        }
    }
</script>

<style scoped>
    
</style>