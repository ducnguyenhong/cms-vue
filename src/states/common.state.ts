import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('userInfo', () => {
  const token = ref<string | undefined>()
  const setToken = (data: string) => {
    token.value = data
  }

  return { token, setToken }
})