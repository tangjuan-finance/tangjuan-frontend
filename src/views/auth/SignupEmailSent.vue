<script setup lang="ts">
import { useEmailStore } from '@/stores/emailStore'

const email_store = useEmailStore()

console.log("Inside SignupEmailSent")
console.log("email_store.email: " + email_store.email)
</script>

<template>
  <main class="flex flex-row justify-center py-4 bg-yellow-50">
    <div class="flex flex-col justify-between gap-y-4 w-[448px] border-yellow-300 border-2 bg-stone-50 p-6 m-8 rounded">
      <div>
        您的註冊驗證信件已經寄到 {{ email_store.email }}，請至該信箱查看註冊驗證信件，以完成註冊。
      </div>
    </div>
  </main>
</template>

<style scoped></style>
