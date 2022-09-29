import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: {},
  }),
  actions: {
    loginUser(userInfo) {
      if (userInfo.username && userInfo.pass) {
        this.user = {
          name: userInfo.username,
        }
        this.isLoggedIn = true
      }
    },
  },
})
