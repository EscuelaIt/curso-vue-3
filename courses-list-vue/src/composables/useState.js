import { ref } from 'vue'

export function useState(initialState) {
  const state = ref(initialState)
  const setState = newValue => {
    state.value = newValue
  }

  return [state, setState]
}
