<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import { useCoursesStore } from '@/stores/courses'

const store = useCoursesStore()

const newCourse = {
  isActive: false,
}

const saveNewCourse = () => {
  console.log(newCourse)

  store.addCourse(newCourse)
}
</script>

<template>
  <BaseLayout>
    <h3>Añade tu nuevo curso</h3>
    <form class="flex mb-4" @submit.prevent="saveNewCourse">
      <BaseInput v-model="newCourse.name" placeholder="Nombre curso" />
      <BaseInput v-model="newCourse.url" placeholder="Url curso" />

      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">¿Está activo?</span>
          <input v-model="newCourse.isActive" type="checkbox" class="toggle" />
        </label>
      </div>
      <button class="btn btn-success">Crear</button>
    </form>
  </BaseLayout>
</template>
