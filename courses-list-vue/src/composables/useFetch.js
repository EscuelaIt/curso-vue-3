import { readonly, ref } from 'vue'

export function useFetch() {
  const data = ref()
  const error = ref()

  const makeRequest = async (apiUrl, method = 'GET') => {
    try {
      const res = await fetch(apiUrl, {
        method,
        headers: {
          accept: 'application/json',
        },
      })
      const { results } = await res.json()
      console.log(results)
      data.value = results
    } catch (err) {
      error.value = err
    }
  }

  return {
    makeRequest,
    data: readonly(data),
    error,
  }
}
