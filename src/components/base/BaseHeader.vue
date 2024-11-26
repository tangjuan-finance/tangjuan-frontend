<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-row justify-center bg-primary-300 p-3">
    <nav class="flex flex-row justify-between w-screen">
      <RouterLink to="/" class="hover:bg-inherit ml-4">
        <img alt="Tangjuan logo" class="logo" src="@/assets/logo_vertical.svg" width="125" height="125" />
      </RouterLink>
      <section class="flex flex-row items-center">
        <div class="p-2">
          <RouterLink to="/about" class="font-medium text-xl text-stone-900 font-title">關於</RouterLink>
        </div>
      </section>
    </nav>
  </header>
</template>

<style scoped></style>
