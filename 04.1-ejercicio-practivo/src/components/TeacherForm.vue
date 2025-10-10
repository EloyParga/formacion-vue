<template>
    <div class="teacher-form">
      <section class="form-section">
        <h3>Añadir Profesor</h3>
        <div class="form-group">
          <label for="name">Nombre Completo:</label>
          <input v-model="teacher.teacherName" type="text" id="name" name="name" />
        </div>
        <div class="form-group">
          <label for="dni">DNI / NIE:</label>
          <input v-model="teacher.dni" type="text" id="dni" name="dni" required />
        </div>
        <div class="form-group">
          <label for="subject">Asignaturas:</label>
          <div class="subject-input">
            <input v-model="subject" type="text" id="subject" name="subject" />
            <button @click="addSubject" class="btn">Agregar</button>
          </div>
          <ul class="subject-list">
            <li v-for="(elm, i) in teacher.subjects" :key="i">{{ elm }}</li>
          </ul>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="teacher.email" type="email" id="email" name="email" />
        </div>
        <div class="form-group checkbox-group">
          <input v-model="teacher.documentation" type="checkbox" id="check" />
          <label for="check">Documentación entregada</label>
        </div>
        <button @click="addTeacher" type="submit" class="btn btn-submit">Registrar</button>
      </section>
  
      <section class="table-section">
        <h3>Profesores Registrados</h3>
        <table class="teachers-table">
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
    documentation: false,
  });
  
  let teachers = ref([]);
  let subject = ref('');
  
  const addSubject = () => {
    if (subject.value.trim() !== '') {
      teacher.value.subjects.push(subject.value.trim());
      subject.value = '';
    }
  };
  
  const addTeacher = () => {
    if (teacher.value.teacherName && teacher.value.dni && teacher.value.email) {
      teachers.value.push({ ...teacher.value });
      teacher.value = {
        teacherName: '',
        dni: '',
        subjects: [],
        email: '',
        documentation: false,
      };
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  };
  </script>
  
  <style scoped>
  .teacher-form {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #42b983;
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  .form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;  
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .subject-input {
    display: flex;
    gap: 10px;
  }
  
  .subject-list {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }
  
  .subject-list li {
    padding: 5px 0;
    border-bottom: 1px solid #eee;
  }
  
  .subject-list li:last-child {
    border-bottom: none;
  }
  
  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .btn {
    padding: 10px 15px;
    background-color: #42b983;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .btn:hover {
    background-color: #369f6b;
  }
  
  .btn-submit {
    margin-top: 10px;
    width: 100%;
  }
  
  .table-section {
    margin-top: 30px;
  }
  
  .teachers-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }
  
  .teachers-table th,
  .teachers-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }
  
  .teachers-table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  .teachers-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>