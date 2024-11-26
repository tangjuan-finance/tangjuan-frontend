<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseHeader from './components/base/BaseHeader.vue'
</script>

<template>
  <BaseHeader />
  <main class="flex flex-row justify-center">
    <RouterView />
  </main>
</template>

<style scoped></style>
