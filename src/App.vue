<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseHeader from './components/base/BaseHeader.vue'
import BaseFooter from './components/base/BaseFooter.vue'
</script>

<template>
  <BaseHeader />
  <RouterView />
  <BaseFooter />
</template>

<style scoped></style>
