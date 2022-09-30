<script setup>
import { useAuth } from '@/composables/useAuth'
import { useAuthStore } from '@/stores/auth'
import HeaderLinks from './HeaderLinks.vue'
defineEmits(['show-section'])

const store = useAuthStore()
const { user } = useAuth()
</script>

<template>
  <header class="p-6 border-b-2 flex justify-between">
    <HeaderLinks />

    <router-link v-if="!store.isLoggedIn" to="/login">Login</router-link>
    <span v-else>{{ user.username }}</span>
  </header>
</template>

<style scoped>
.link.router-link-active {
  color: green;
}
</style>
