<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="font-bold text-2xl">Página no encontrada</h1>
    <button class="btn" @click="router.push('/')">Ir a inicio</button>
  </div>
</template>
