import { ref } from 'vue'

const user = ref({})

export function useAuth() {
  const setUser = userInfo => {
    user.value = userInfo
  }

  return {
    user,
    setUser,
  }
}
