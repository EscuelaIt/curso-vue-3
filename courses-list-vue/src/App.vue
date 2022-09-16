<script setup>
import { computed, ref } from 'vue'

const showCourses = ref(true)
const listFav = ref([])
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

const allFav = computed(() => {
  return courses.value.filter(course => listFav.value.includes(course.id))
})

const saveInfoCourse = (event, field) => {
  const value = event.target.value
  newCourse[field] = value
}
const saveNewCourse = () => {
  courses.value.push({
    ...newCourse,
    id: courses.value[courses.value.length - 1].id + 1,
  })
  showCourses.value = true

  console.log(courses)
}
const showSection = section => {
  showCourses.value = section === 'courses'
}
const saveFav = event => {
  const value = event.target.value
  listFav.value.push(+value)
  console.log(listFav.value)
}
</script>

<template>
  <header class="p-6 border-b-2">
    <a class="mr-4 cursor-pointer" @click="showSection('courses')">Cursos</a>
    <a class="cursor-pointer" @click="showSection('new')">Nuevo Curso</a>
  </header>
  <main class="mt-4">
    <section v-if="!showCourses">
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
    <div v-else class="overflow-x-auto">
      <section v-if="allFav.length" class="flex justify-around mb-6">
        <div
          v-for="fav in allFav"
          :key="fav.id"
          class="card w-96 bg-base-100 shadow-xl"
        >
          <div class="card-body">
            <h2 class="card-title">{{ fav.name }}</h2>
            <p>{{ fav.url }}</p>
          </div>
        </div>
      </section>
      <table class="table w-full">
        <thead>
          <tr>
            <th>Favoritos</th>
            <th>Id</th>
            <th>Nombre</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <th>
              <label>
                <input
                  type="checkbox"
                  class="checkbox"
                  :value="course.id"
                  @input="saveFav"
                />
              </label>
            </th>
            <th>{{ course.id }}</th>
            <td>{{ course.name }}</td>
            <td>{{ course.url }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
