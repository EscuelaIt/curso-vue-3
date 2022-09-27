<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
const links = [
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
  <BaseHeader :links="links" />
  <main class="mt-4">
    <slot />
  </main>
</template>
