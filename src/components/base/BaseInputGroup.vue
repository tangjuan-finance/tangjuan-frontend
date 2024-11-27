<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  min: { type: Number },
  max: { type: Number },
  prefix: { type: String },
  suffix: { type: String },
  mode: {
    type: String as () => "currency" | "decimal" | undefined, // Explicit type
  },
  currency: { type: String },
  locale: { type: String },
  default: {
    type: [String, Number], // Allow string or number
    default: 0
  },
})

const numValue = ref(Number(props.default) || 0);
const strValue = ref(String(props.default));

watch(
  () => props.default,
  (newValue) => {
    numValue.value = Number(newValue) || 0;
    strValue.value = String(newValue);
  }
);
</script>

<template>
  <InputGroup>
    <FloatLabel variant="on">
      <InputNumber v-if="props.type == 'integer'" :inputId="props.name" :min="props.min" :max="props.max"
        :prefix="props.prefix" :suffix="props.suffix" :mode="props.mode" :currency="props.currency"
        :maxFractionDigits="0" :locale="props.locale" v-model="numValue" />
      <InputNumber v-else-if="props.type == 'float'" :inputId="props.name" :min="props.min" :max="props.max"
        :prefix="props.prefix" :suffix="props.suffix" :mode="props.mode" :currency="props.currency"
        :locale="props.locale" v-model="numValue" :minFractionDigits="2" :maxFractionDigits="2" />
      <InputText v-else :type="props.type" :id="props.name" v-model="strValue" />
      <label :for="props.name">{{ props.label }}</label>
    </FloatLabel>
  </InputGroup>
</template>

<style scoped></style>
