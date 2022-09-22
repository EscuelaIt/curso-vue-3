<script setup>
import { computed, ref, defineAsyncComponent } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseInput from '@/components/BaseInput.vue'

const BaseTable = defineAsyncComponent(() =>
  import('@/components/BaseTable.vue'),
)

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
const links = [
  {
    section: 'courses',
    text: 'Cursos',
  },
  {
    section: 'new',
    text: 'Nuevo curso',
  },
]
const coursesInfo = ref({
  headers: ['Favoritos', 'Id', 'Nombre', 'URL', 'Activo'],
  items: courses.value,
})
const newCourse = {
  isActive: false,
}

const allFav = computed(() => {
  return courses.value.filter(course => listFav.value.includes(course.id))
})
const saveNewCourse = () => {
  console.log(newCourse)
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
const saveFav = value => {
  listFav.value.push(+value)
  console.log(listFav.value)
}
</script>

<template>
  <BaseHeader :links="links" @show-section="showSection" />
  <main class="mt-4">
    <section v-if="!showCourses">
      <h3>Añade tu nuevo curso</h3>
      <form class="flex mb-4" @submit.prevent="saveNewCourse">
        <BaseInput v-model="newCourse.name" placeholder="Nombre curso" />
        <BaseInput v-model="newCourse.url" placeholder="Url curso" />

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">¿Está activo?</span>
            <input
              v-model="newCourse.isActive"
              type="checkbox"
              class="toggle"
            />
          </label>
        </div>
        <button class="btn btn-success">Crear</button>
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
      <BaseTable v-bind="coursesInfo" @save-fav="saveFav" />
    </div>
  </main>
</template>
