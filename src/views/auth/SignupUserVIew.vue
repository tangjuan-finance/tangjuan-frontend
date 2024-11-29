<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import api from '@/utils/axios';
interface FormInput {
  email: string;
}

import TextInputField from '@/components/form/TextInputField.vue';

// Make `formInput` a reactive object with explicit type
const formInput = reactive<FormInput>({
  email: "",
});
const error = ref<string | null>();

const fetchData = async () => {
  try {
    const response = await api.post<unknown>('api/v1/register', formInput); // Replace with actual API endpoint
    router.push({ name: 'user');
    // Need to change to saving token
    console.log(response.data);
  } catch (err) {
    error.value = 'Failed to send data';
    console.error(err);
  }
};

const submit = () => {
  fetchData();
};
</script>

<template>
  <main class="flex flex-row justify-center py-4 bg-yellow-50">
    <div class="flex flex-col justify-between gap-y-4 w-[448px] border-yellow-300 border-2 bg-stone-50 p-6 m-8 rounded">
      <h1 class="text-xl text-title">註冊</h1>
      <div class="flex flex-col justify-between gap-y-2">
        <TextInputField label="電子信箱" name="email" v-model:value="formInput.email" fluid />
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
  </main>
</template>

<style scoped></style>
