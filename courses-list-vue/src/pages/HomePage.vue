<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import { provide, ref, watchEffect } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { useAuth } from '../composables/useAuth'

const links = ref([
  {
    url: '/courses',
    text: 'Cursos',
  },
  {
    url: '/new-course',
    text: 'Nuevooooo curso',
  },
])

const updateLinks = () => {
  links.value.unshift({ url: '/', text: 'Inicio' })
}

provide('links', { links, updateLinks })

const { user, setUser } = useAuth()
const { data, makeRequest, error } = useFetch()

const loadData = async () => {
  await makeRequest('https://randomuser.me/api/')
}

watchEffect(() => {
  if (error.value) alert('errorrr')
})

loadData()
</script>

<template>
  <BaseLayout>
    <span @click="setUser({ username: `${user.username}a` })">
      {{ user.username }}
    </span>
    <h1>HomePage</h1>
    <span v-if="error">{{ error.message }}</span>
    <div
      v-for="person in data"
      :key="person.id.name"
      class="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img :src="person.picture?.large" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ `${person.name?.first} ${person.name?.last}` }}
        </h2>
      </div>
    </div>
  </BaseLayout>
</template>
