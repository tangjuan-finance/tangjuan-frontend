<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useFlashMessageStore } from '@/stores/flashMessageStore';

const router = useRouter()

import api from '@/utils/axios';

import TextInputField from '@/components/form/TextInputField.vue';

// Explicitly define the type for formInput
interface FormInput {
  email: string;
}
// Make `formInput` a reactive object with explicit type
const formInput = reactive<FormInput>({
  email: "",
});

const errors = ref<Record<string, string>>({}); // Field-specific errors
const flashMessageStore = useFlashMessageStore();

const fetchData = async () => {
  try {
    await api.post<unknown>('api/v1/register', formInput); // Replace with actual API endpoint
    sessionStorage.setItem('registration_email', formInput.email);
    flashMessageStore.setFlashMessage('驗證信已送出，請前往收信', 'success');
    router.push({ name: 'signup-email-sent' });
  } catch (err: any) {
    if (err.response?.data?.errors.email) {
      errors.value = err.response.data.errors; // Assign field-specific errors
    } else {
      // Handle generic errors
      flashMessageStore.setFlashMessage('出現非預期的錯誤', 'error');
    }

  }
};

const submit = () => {
  fetchData();
};
</script>

<template>
  <div class="flex flex-col justify-between gap-y-4 w-[448px] border-yellow-300 border-2 bg-yellow-50 p-6 m-8 rounded">
    <h1 class="text-xl text-title">註冊</h1>
    <div class="flex flex-col justify-between gap-y-2">
      <TextInputField label="電子信箱" name="email" v-model:value="formInput.email" fluid />
      <div v-if="errors.email" class="field-error">{{ errors.email }}</div>
      <Button @click="submit" label="下一步" class="text-title" />
    </div>
    <Divider />
    <div class="flex flex-row justify-center">
      <div class="text-sm text-stone-500">
        已經有帳號？
        <RouterLink to="/login" class="text-primary-400">登入</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
