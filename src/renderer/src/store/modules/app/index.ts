import { defineStore } from 'pinia'
export const useAppStore = defineStore(
  'appStore',
  () => {
    const count = ref(0)
    return {
      count
    }
  },
  {
    persist: {
      key: '__app__',
      paths: []
    }
  }
)
