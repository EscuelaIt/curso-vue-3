<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import courses from '@/assets/courses.json'

const route = useRoute()
const course = ref()

onBeforeRouteUpdate(() => {
  findCourse()
})

const findCourse = () => {
  course.value = courses.find(course => +course.id === +route.params.id)
}

findCourse()
</script>

<template>
  <BaseLayout>
    <h1>Course {{ route.params.id }} Detail Page</h1>
    <pre>
      {{ course }}
    </pre>
  </BaseLayout>
</template>
