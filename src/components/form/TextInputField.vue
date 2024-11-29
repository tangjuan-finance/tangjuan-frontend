<script setup lang="ts">
const value = defineModel<string>('value', {
  required: true,
});
const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  size: { type: String },
  disabled: { type: Boolean, default: false },
  fluid: { type: Boolean, defualt: true }
})
</script>

<template>
  <FloatLabel variant="on">
    <InputText v-model="value" :name="props.name" :disabled="props.disabled" :fluid="props.fluid" />
    <label :for="props.name">{{ props.label }}</label>
  </FloatLabel>
</template>

<style scoped></style>
