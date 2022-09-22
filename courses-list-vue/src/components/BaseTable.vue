<script setup>
defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  items: {
    type: Array,
    required: true,
  },
  showAddFav: {
    type: Boolean,
    default: true,
  },
})
defineEmits(['save-fav'])
</script>

<template>
  <table class="table w-full">
    <thead v-if="headers.length">
      <tr>
        <th v-for="(header, index) in headers" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <th v-if="showAddFav">
          <label>
            <input
              type="checkbox"
              class="checkbox"
              :value="item.id"
              @input="$emit('save-fav', $event.target.value)"
            />
          </label>
        </th>
        <th>{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.url }}</td>
        <!-- <td>{{ item.isActive ? 'Si' : 'No' }}</td> -->
        <td>
          <input
            type="checkbox"
            class="checkbox"
            :checked="item.isActive"
            disabled
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
