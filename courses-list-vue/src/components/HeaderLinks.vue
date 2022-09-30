<script setup>
// import { inject } from 'vue'

// const {links} = inject('links')
const localLinks = [
  {
    url: '/courses',
    text: 'Cursos',
  },
  {
    url: '/new-course',
    text: 'Nuevo curso',
  },
]
</script>

<template>
  <div>
    <router-link
      v-for="(link, index) in links || localLinks"
      :key="index"
      :to="link.url"
      class="mr-4 cursor-pointer link"
    >
      {{ link.text }}
    </router-link>
  </div>
</template>
