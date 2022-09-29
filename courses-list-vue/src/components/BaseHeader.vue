<script setup>
import { useAuthStore } from '../stores/auth'

defineProps({
  links: {
    type: Array,
    required: true,
  },
})
defineEmits(['show-section'])

const store = useAuthStore()
</script>

<template>
  <header class="p-6 border-b-2 flex justify-between">
    <div>
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        class="mr-4 cursor-pointer link"
      >
        {{ link.text }}
      </router-link>
    </div>
    <router-link v-if="!store.isLoggedIn" to="/login">Login</router-link>
    <span v-else>{{ store.user.name }}</span>
  </header>
</template>

<style scoped>
.link.router-link-active {
  color: green;
}
</style>
