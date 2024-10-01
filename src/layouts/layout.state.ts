import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useOpenMenuStore = defineStore('openMenu', () => {
  const isOpenMenu = ref<boolean>(true)
  const menuWidth = computed(() => isOpenMenu.value ? '280px' : '65px')
  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
  }

  return { isOpenMenu, menuWidth, toggleMenu }
})