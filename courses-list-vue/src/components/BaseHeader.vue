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
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
      class="mr-4 cursor-pointer link"
    >
      {{ link.text }}
    </router-link>
  </header>
</template>

<style scoped>
.link.router-link-active {
  color: green;
}
</style>
