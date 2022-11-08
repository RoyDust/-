import { defineStore } from 'pinia'

export const indexStore = defineStore('index', {
  state: () => {
    return {
      name: 'fpa_web'
    }
  }
})
