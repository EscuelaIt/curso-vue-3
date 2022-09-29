import { defineStore } from 'pinia'
import courses from '@/assets/courses.json'

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    courses,
  }),
  actions: {
    addCourse(course) {
      this.courses.push({
        ...course,
        id: this.courses[this.courses.length - 1].id + 1,
      })
    },
  },
})
