<script setup>
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    type="text"
    :placeholder="placeholder"
    class="input input-bordered w-full max-w-xs mr-3"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
