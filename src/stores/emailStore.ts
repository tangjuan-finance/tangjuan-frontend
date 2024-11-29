import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmailStore = defineStore('emailStore', () => {
  const email = ref<string>()
  function setEmail(newEmail: string) {
    email.value = newEmail
  }
  function $reset() {
    email.value = undefined
  }

  const isEmailSet = computed((): boolean => !!email.value)
  return { email, setEmail, $reset, isEmailSet }
})
