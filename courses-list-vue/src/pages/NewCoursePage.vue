<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import BaseInput from '@/components/BaseInput.vue'

const newCourse = {
  isActive: false,
}

const saveNewCourse = () => {
  console.log(newCourse)
  // courses.value.push({
  //   ...newCourse,
  //   id: courses.value[courses.value.length - 1].id + 1,
  // })
  // showCourses.value = true

  // console.log(courses)
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
