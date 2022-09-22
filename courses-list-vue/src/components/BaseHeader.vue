<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
})
defineEmits(['show-section'])
</script>

<template>
  <header class="p-6 border-b-2">
    <a
      v-for="(link, index) in links"
      :key="index"
      class="mr-4 cursor-pointer"
      @click="$emit('show-section', link.section)"
    >
      {{ link.text }}
    </a>
  </header>
</template>
