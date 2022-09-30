<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import { computed, defineAsyncComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCoursesStore } from '@/stores/courses'
import { storeToRefs } from 'pinia'
import { useState } from '../composables/useState'

const BaseTable = defineAsyncComponent(() =>
  import('@/components/BaseTable.vue'),
)

const router = useRouter()
const store = useCoursesStore()

const { courses } = storeToRefs(store)

const [listFav, setListFav] = useState([])

const coursesInfo = ref({
  headers: ['Favoritos', 'Id', 'Nombre', 'URL', 'Activo'],
  items: courses.value,
})

const allFav = computed(() => {
  return courses.value.filter(course => listFav.value.includes(course.id))
})

const saveFav = value => {
  setListFav([...listFav.value, +value])
}

const showCourseDetail = courseId => {
  router.push(`/courses/${courseId}`)
  // router.push({ name: 'CourseDetailPage', params: { id: courseId } })
}
</script>

<template>
  <BaseLayout>
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
    <BaseTable
      v-bind="coursesInfo"
      @save-fav="saveFav"
      @row-selected="showCourseDetail"
    />

    <router-view></router-view>
  </BaseLayout>
</template>
