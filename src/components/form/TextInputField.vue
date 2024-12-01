<script setup lang="ts">
import { useFlashMessageStore } from '@/stores/flashMessageStore';

const value = defineModel<string>({
  required: true,
});

defineEmits(['blur']);

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  size: { type: String },
  disabled: { type: Boolean, default: false },
  fluid: { type: Boolean, defualt: true },
})
</script>

<template>
  <FloatLabel variant="on">
    <InputText v-model="value" :name="props.name" :disabled="props.disabled" :fluid="props.fluid"
      @blur="$emit('blur')" />
    <label :for="props.name">{{ props.label }}</label>
  </FloatLabel>
</template>

<style scoped></style>
