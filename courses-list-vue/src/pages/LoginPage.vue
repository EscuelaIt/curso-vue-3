<script setup>
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const store = useAuthStore()
const router = useRouter()
const { setUser } = useAuth()
const user = ref({})

const login = () => {
  setUser(user.value)
  store.loginUser(user.value)
  router.push('/')
}
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <section class="border rounded p-4 flex flex-col items-center h-fit">
      <BaseInput v-model="user.username" placeholder="Usuario" />
      <BaseInput v-model="user.pass" type="password" placeholder="Contraseña" />

      <button class="btn mt-8" @click="login">Iniciar sesión</button>
    </section>
  </main>
</template>
