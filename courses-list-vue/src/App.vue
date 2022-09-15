<script setup>
import { ref } from 'vue'

const courses = ref([
  {
    id: 1,
    name: 'Curso de Vue',
    url: 'https://escuela.it/cursos/curso-vue',
  },
  {
    id: 2,
    name: 'Curso de Arquitectura Hexagonal, DDD, Microservicios y CQRS',
    url: 'https://escuela.it/cursos/curso-arquitectura-hexagonal-DDD-microservicios-cqrs',
  },
])
let newCourse = {}

const saveInfoCourse = (event, field) => {
  const value = event.target.value
  newCourse[field] = value
}
const saveNewCourse = () => {
  courses.value.push({
    ...newCourse,
    id: courses.value[courses.value.length - 1].id + 1,
  })

  console.log(courses)
}
</script>

<template>
  <header class="p-6 border-b-2">
    <a href="#" class="mr-4">Cursos</a>
    <a href="#">Nuevo Curso</a>
  </header>
  <main class="mt-4">
    <section>
      <h3>Añade tu nuevo curso</h3>
      <form class="flex mb-4">
        <input
          type="text"
          placeholder="Nombre curso"
          class="input input-bordered w-full max-w-xs mr-3"
          @input="saveInfoCourse($event, 'name')"
        />
        <input
          type="text"
          placeholder="Url curso"
          class="input input-bordered w-full max-w-xs mr-3"
          @input="saveInfoCourse($event, 'url')"
        />
        <button type="button" class="btn btn-success" @click="saveNewCourse">
          Crear
        </button>
      </form>
    </section>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <th>{{ course.id }}</th>
            <td>{{ course.name }}</td>
            <td>{{ course.url }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
